import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';
import { SlidesService } from 'src/app/shared/services/slides-service/slides.service';

@Component({
  selector: 'app-view-all-page',
  templateUrl: './view-all-page.component.html',
  styleUrls: ['./view-all-page.component.css'],
})
export class ViewAllPageComponent implements OnInit {
  slides: any[] = [];
  eventTitle: string = ''; // Add this line to store the event title

  constructor(
    private router: Router, 
    private bookingService: BookingService, 
    private slidesService: SlidesService
  ) {}

  ngOnInit(): void {
    const { slides, eventTitle } = this.slidesService.getSlides();
    this.slides = slides;
    this.eventTitle = eventTitle;
    console.log('Slides in ViewAllPageComponent:', this.slides);
    console.log('Event Title:', this.eventTitle);
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

  async navigateToBookingPage(
    eventType: string,
    eventId: string,
    eventData: any
  ) {
    try {
      this.bookingService.eventToBeBooked = { eventType, eventId, eventData };
      this.router.navigate(['/bookingpage']);
    } catch (error) {
      console.error('Error navigating to booking page:', error);
    }
  }
}