import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data-service/data.service';
import { BookingService } from 'src/app/shared/services/booking-service/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  treks: any[] = [];
  camps: any[] = [];
  adventure: any[] = [];
  backpacks: any[] = [];

  constructor(private dataService: DataService, private router: Router, private bookingService: BookingService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {}

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


}
