import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Kalsubai Trek',
      description: 'Description for Event 1',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Harishchandragad Trek',
      description: 'Description for Event 2',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Vasota Trek',
      description: 'Description for Event 3',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Malvan Tour',
      description: 'Description for Event 4',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Devkund Waterfall',
      description: 'Description for Event 5',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Kumbhe Waterfall',
      description: 'Description for Event 6',
      prize : '1100/-'
    },
    {
      image: '../../../assets/Asset 1@300x-8.png',
      title: 'Kalu Waterfall',
      description: 'Description for Event 7',
      prize : '1100/-'
    }
  ];

  currentSlide = 0;
  slideIntervalSubscription: any = null; 

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
    if (this.currentSlide < this.slides.length - 3) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 3;
    }
  }
}
