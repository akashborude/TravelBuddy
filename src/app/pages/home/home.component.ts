import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data-service/data.service';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  treks: any[] = [];
  camps: any[] = [];
  adventure: any[] = [];
  backpacks: any[] = [];

  currentSlideTrek = 0;
  currentSlideCamp = 0;
  currentSlideAdventure = 0;
  currentSlideBackpack = 0;

  slideIntervalSubscription: Subscription | null = null;

  constructor(private dataService: DataService, private router: Router, private bookingService: BookingService) {}

  ngOnInit() {
    this.startSlideInterval();
    this.loadData();
  }

  ngOnDestroy() {
    this.stopSlideInterval();
  }

  startSlideInterval() {
    this.slideIntervalSubscription = interval(5000).subscribe(() => {
      this.nextSlide('trek');
      this.nextSlide('camp');
      this.nextSlide('adventure');
      this.nextSlide('backpack');
    });
  }

  stopSlideInterval() {
    if (this.slideIntervalSubscription) {
      this.slideIntervalSubscription.unsubscribe();
    }
  }

  nextSlide(category: string) {
    switch (category) {
      case 'trek':
        if (this.currentSlideTrek < this.treks.length - 3) {
          this.currentSlideTrek++;
        } else {
          this.currentSlideTrek = 0;
        }
        break;
      case 'camp':
        if (this.currentSlideCamp < this.camps.length - 3) {
          this.currentSlideCamp++;
        } else {
          this.currentSlideCamp = 0;
        }
        break;
      case 'adventure':
        if (this.currentSlideAdventure < this.adventure.length - 3) {
          this.currentSlideAdventure++;
        } else {
          this.currentSlideAdventure = 0;
        }
        break;
      case 'backpack':
        if (this.currentSlideBackpack < this.backpacks.length - 3) {
          this.currentSlideBackpack++;
        } else {
          this.currentSlideBackpack = 0;
        }
        break;
    }
  }

  prevSlide(category: string) {
    switch (category) {
      case 'trek':
        if (this.currentSlideTrek > 0) {
          this.currentSlideTrek--;
        } else {
          this.currentSlideTrek = this.treks.length - 3;
        }
        break;
      case 'camp':
        if (this.currentSlideCamp > 0) {
          this.currentSlideCamp--;
        } else {
          this.currentSlideCamp = this.camps.length - 3;
        }
        break;
      case 'adventure':
        if (this.currentSlideAdventure > 0) {
          this.currentSlideAdventure--;
        } else {
          this.currentSlideAdventure = this.adventure.length - 3;
        }
        break;
      case 'backpack':
        if (this.currentSlideBackpack > 0) {
          this.currentSlideBackpack--;
        } else {
          this.currentSlideBackpack = this.backpacks.length - 3;
        }
        break;
    }
  }

  loadData() {
    this.dataService.getAllTreks().subscribe((data: any) => {
      this.treks = data;
    });

    this.dataService.getAllCamps().subscribe((data: any) => {
      this.camps = data;
    });

    this.dataService.getAllAdventure().subscribe((data: any) => {
      this.adventure = data;
    });

    this.dataService.getAllBackpacks().subscribe((data: any) => {
      this.backpacks = data;
    });
  }
  bookTrek(trekId: any) {
    this.navigateToBookingPage('trek', trekId._id);
  }

  bookCamp(campId: any) {
    this.navigateToBookingPage('camp', campId._id);
  }

  bookAdventure(adventureId: any) {
    this.navigateToBookingPage('adventure', adventureId._id);
  }

  bookBackpack(backpackId: any) {
    this.navigateToBookingPage('backpack', backpackId._id);
  }

  async navigateToBookingPage(eventType: string, eventId: string) {
    let eventData;
    try {
      switch (eventType) {
        case 'trek':
          eventData = await this.dataService.getTrekById(eventId).toPromise();
          break;
        case 'camp':
          eventData = await this.dataService.getCampById(eventId).toPromise();
          break;
        case 'adventure':
          eventData = await this.dataService.getAdventureById(eventId).toPromise();
          break;
        case 'backpack':
          eventData = await this.dataService.getBackpackById(eventId).toPromise();
          break;
        default:
          throw new Error('Invalid event type');
      }
      this.bookingService.eventToBeBooked = { eventType, eventId, eventData };
      this.router.navigate(['/bookingpage']);
    } catch (error) {
      console.error('Error fetching event data:', error);
    }
  }
}
