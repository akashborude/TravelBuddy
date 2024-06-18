import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() slides: any[] = [];
  currentSlideIndex: number = 0;
  slideIntervalSubscription: Subscription | null = null;

  constructor(private router: Router, private bookingService: BookingService) {}

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

  getEventType(slide: any): string {
    if (slide.trek_event_details) {
      return 'trek';
    } else if (slide.camp_event_details) {
      return 'camp';
    } else if (slide.adventure_event_details) {
      return 'adventure';
    } else if (slide.backpack_event_details) {
      return 'backpack';
    } else {
      return '';
    }
  }

  bookEvent(slide: any) {
    const eventType = this.getEventType(slide);
    const { _id } = slide;

    if (eventType === 'trek') {
      this.bookTrek({ ...slide, eventType });
    } else if (eventType === 'camp') {
      this.bookCamp({ ...slide, eventType });
    } else if (eventType === 'adventure') {
      this.bookAdventure({ ...slide, eventType });
    } else if (eventType === 'backpack') {
      this.bookBackpack({ ...slide, eventType });
    } else {
      console.error('Invalid event type');
    }
  }

  bookTrek(event: { eventType: string; _id: string; [key: string]: any }) {
    this.navigateToBookingPage(event.eventType, event._id, event);
  }

  bookCamp(event: { eventType: string; _id: string; [key: string]: any }) {
    this.navigateToBookingPage(event.eventType, event._id, event);
  }

  bookAdventure(event: { eventType: string; _id: string; [key: string]: any }) {
    this.navigateToBookingPage(event.eventType, event._id, event);
  }

  bookBackpack(event: { eventType: string; _id: string; [key: string]: any }) {
    this.navigateToBookingPage(event.eventType, event._id, event);
  }

  getImageUrl(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const imgElement = doc.querySelector('img');
    return imgElement ? imgElement.src : '';
  }

  async navigateToBookingPage(eventType: string, eventId: string, eventData: any) {
    try {
      this.bookingService.eventToBeBooked = { eventType, eventId, eventData };
      this.router.navigate(['/bookingpage']);
    } catch (error) {
      console.error('Error navigating to booking page:', error);
    }
  }
}