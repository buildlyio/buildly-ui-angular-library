import { Injectable, Optional, Inject, SecurityContext } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, finalize, map, share, tap } from 'rxjs/operators';

const CLOUD_CDN_URL = 'https://storage.googleapis.com/svgicons';

class SvgIcon {
  url: SafeResourceUrl | null;
  svgElement: SVGElement | null;

  constructor(data: SafeResourceUrl | SVGElement) {
    if (!!(data as any).nodeName) {
      this.svgElement = data as SVGElement;
    } else {
      this.url = data as SafeResourceUrl;
    }
  }
}


@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  private svgIcons = new Map<string, SvgIcon>();

  private inProgressUrlFetches = new Map<string, Observable<string>>();

  constructor(
    @Optional() private httpClient: HttpClient,
    private sanitizer: DomSanitizer) {
  }

  private loadSvgIconFromConfig(config: SvgIcon): Observable<SVGElement> {
    return this.fetchUrl(config.url)
      .pipe(map(svgText => this.createSvgElementForSingleIcon(svgText)));
  }
  private createSvgElementForSingleIcon(responseText: string): SVGElement {
    const svg = this.svgElementFromString(responseText);
    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false');
    return svg;
  }

  private svgElementFromString(str: string): SVGElement {
    const div = document.createElement('DIV');
    div.innerHTML = str;
    const svg = div.querySelector('svg') as SVGElement;

    if (!svg) {
      throw Error('<svg> tag not found');
    }

    return svg;
  }

  private fetchUrl(safeUrl: SafeResourceUrl | null): Observable<string> {

    const url = this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);

    const inProgressFetch = this.inProgressUrlFetches.get(url);

    if (inProgressFetch) {
      return inProgressFetch;
    }
    const req = this.httpClient.get(url, {
      responseType: 'text', headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    }).pipe(
      finalize(() => this.inProgressUrlFetches.delete(url)),
      share(),
    );

    this.inProgressUrlFetches.set(url, req);
    return req;
  }

  addSvgIcon(iconName: string): Observable<SVGElement>  {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(`${CLOUD_CDN_URL}/${iconName}.svg`);
    this.svgIcons.set(iconName, new SvgIcon(url));

    return this.getNamedSvgIcon(iconName);
  }

  getNamedSvgIcon(name: string): Observable<SVGElement> {
    const config = this.svgIcons.get(name);

    if (config) {
      if (config.svgElement) {
        return observableOf(cloneSvg(config.svgElement));
      } else {
        return this.loadSvgIconFromConfig(config).pipe(
          tap(svg => config.svgElement = svg),
          map(svg => cloneSvg(svg)),
        );
      }
    }
  }
}

function cloneSvg(svg: SVGElement): SVGElement {
  return svg.cloneNode(true) as SVGElement;
}
