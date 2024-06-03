import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  currentSlideIndex: number = 0;
  slideIntervalSubscription: Subscription | null = null;

  ngOnInit() {
    this.startSlideInterval();
  }

  ngOnDestroy() {
    this.stopSlideInterval();
  }

  startSlideInterval() {
    this.slideIntervalSubscription = interval(5000).subscribe(() => {
      this.nextSlide();
    });
  }

  stopSlideInterval() {
    if (this.slideIntervalSubscription) {
      this.slideIntervalSubscription.unsubscribe();
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 3) {
      this.currentSlideIndex++;
    } else {
      this.currentSlideIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    } else {
      this.currentSlideIndex = this.slides.length - 3;
    }
  }
}
