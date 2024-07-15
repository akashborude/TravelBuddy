import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-google-form-page',
  templateUrl: './google-form-page.component.html',
  styleUrls: ['./google-form-page.component.css']
})
export class GoogleFormPageComponent implements OnInit {
  eventRegLink: SafeResourceUrl | undefined;

  constructor(
    private sanitizer: DomSanitizer,
    private bookingService: BookingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const eventToBeRegistered = this.bookingService.eventToBeRegistered;
    console.log(eventToBeRegistered)
    if (eventToBeRegistered && eventToBeRegistered) {
      this.eventRegLink = this.sanitizer.bypassSecurityTrustResourceUrl(eventToBeRegistered);
      console.log(this.eventRegLink)
    }

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }
}
