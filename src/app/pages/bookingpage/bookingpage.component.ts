import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css'],
})
export class BookingpageComponent implements OnInit {
  eventData: any;
  eventType: string = '';

  constructor(private router: Router, public bookingService: BookingService) {}

  ngOnInit(): void {
    const eventToBeBooked = this.bookingService.eventToBeBooked;
    if (eventToBeBooked) {
      this.eventData = eventToBeBooked.eventData;
      this.eventType = eventToBeBooked.eventType;
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }

  redirectToForm(registrationLink: string) {
    try {
      this.bookingService.eventToBeRegistered = registrationLink;
      this.router.navigate(['/registration-form']);
    } catch (error) {
      console.error('Error navigating to booking page:', error);
    }
  }
}
