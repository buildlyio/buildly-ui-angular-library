import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fj-light-box',
  templateUrl: './light-box.component.html',
  styleUrls: ['./light-box.component.scss']
})
export class LightBoxComponent implements OnInit {

  /**
   * images that will be shown in the lightbox
   */
  @Input() slides;

  /**
   * checks if the lightbox is open
   */
  isOpen = false;

  /**
   * current image slide index
   */
  currentSlideIndex = 1;

  constructor() { }

  ngOnInit() {
  }

  /**
   * opens the lightbox modal and set the current slide
   * slideNumber - the seleceted slide number
   */
  openModal(slideNumber: number) {
    if (this.slides) {
      this.isOpen = true;
      this.currentSlide(slideNumber);
    }
  }

  /**
   * closes the lightbox modal
   */
  closeModal() {
    this.isOpen = false;
  }

  // Next/previous controls
  plusSlides(n) {
    this.showSlides(this.currentSlideIndex += n);
  }

  // Thumbnail image controls
  currentSlide(n) {
    this.showSlides(this.currentSlideIndex = n);
  }

  /**
   * show the slides in the lightbox modal
   * @param n - slide number
   */
  showSlides(n) {
    if (n > this.slides.length) {
      this.currentSlideIndex = 1;
    } else if (n < 1) {
      this.currentSlideIndex = this.slides.length;
    }

    this.slides.forEach( slide => {
      slide.hidden = true;
    });
    this.slides[this.currentSlideIndex - 1].hidden = false;
  }

}
