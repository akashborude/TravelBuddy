import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data-service/data.service';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrls: ['./bookingpage.component.css'],
})
export class BookingpageComponent implements OnInit {
  eventData: any;
  eventType: string = '';
  eventDetails: any;

  constructor(
    private dataService: DataService,
    public bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.eventData = this.bookingService.eventToBeBooked.eventData;
    this.eventType = this.bookingService.eventToBeBooked.eventType;
  }
}