import { Component, OnInit, HostListener } from '@angular/core';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css'],
})
export class BookingpageComponent implements OnInit {
  eventData: any;
  eventType: string = '';

  constructor(public bookingService: BookingService) {}

  ngOnInit(): void {
    const eventToBeBooked = this.bookingService.eventToBeBooked;
    if (eventToBeBooked) {
      this.eventData = eventToBeBooked.eventData;
      this.eventType = eventToBeBooked.eventType;
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }

  // Scroll to the top of the page when the component is loaded
  @HostListener('window:load', ['$event'])
  onLoad() {
    window.scrollTo(0, 0);
  }
}