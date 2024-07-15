import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {
  private slides: any[] = [];
  private eventTitle: string = "";

  constructor() { }

  setSlides(slides: any[], title: string) {
    this.slides = slides;
    this.eventTitle = title;
  }

  getSlides(): { slides: any[], eventTitle: string } {
    return { slides: this.slides, eventTitle: this.eventTitle };
  }
}