import { Injectable } from '@angular/core';

@Injectable()
export class TextHelper {

  public toCamelCase(str) {
    // Lower cases the string
    return str.toLowerCase()
    // Replaces any - or _ characters with a space
      .replace( /[-_]+/g, ' ')
      // Removes any non alphanumeric characters
      .replace( /[^\w\s]/g, '')
      // Uppercases the first character in each group immediately following a space
      // (delimited by spaces)
      .replace( / (.)/g, function($1) { return $1.toUpperCase(); })
      // Removes spaces
      .replace( / /g, '' );
  }
  public toClass(str) {
    // Lower cases the string
    return str.toLowerCase()
      .replace(/\s+/g, '-')
  }

  public capitalize(str) {
    const parts = str.split('');
    parts[0] = parts[0].toUpperCase();

    return parts.join('');
  }
  public dedent(strings) {
    let raw = void 0;
    if (typeof strings === 'string') {
      // dedent can be used as a plain function
      raw = [strings];
    } else {
      raw = strings.raw;
    }

    // first, perform interpolation
    let result = '';
    for (let i = 0; i < raw.length; i++) {
      result += raw[i].
      // join lines when there is a suppressed newline
      replace(/\\\n[ \t]*/g, '').

      // handle escaped backticks
      replace(/\\`/g, '`');

      if (i < (arguments.length <= 1 ? 0 : arguments.length - 1)) {
        result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
      }
    }

    // now strip indentation
    const lines = result.split('\n');
    let mindent = null;
    lines.forEach(function (l) {
      const m = l.match(/^(\s+)\S+/);
      if (m) {
        const indent = m[1].length;
        if (!mindent) {
          // this is the first indented line
          mindent = indent;
        } else {
          mindent = Math.min(mindent, indent);
        }
      }
    });

    if (mindent !== null) {
      result = lines.map(function (l) {
        return l[0] === ' ' ? l.slice(mindent) : l;
      }).join('\n');
    }

    // dedent eats leading and trailing whitespace too
    result = result.trim();

    // handle escaped newlines at the end to ensure they don't get stripped too
    return result.replace(/\\n/g, '\n');
  }

}
