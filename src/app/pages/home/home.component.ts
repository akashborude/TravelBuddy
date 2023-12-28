import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  eventsData = [
    {
      title: "Card 1",
      description: "Description for Card 1",
      image: "../assets/IMG_20220821_094429.jpg" // Replace with actual image file
    },
    {
      title: "Card 2",
      description: "Description for Card 2",
      image: "../assets/IMG_20220821_100417.jpg" // Replace with actual image file
    },
    {
      title: "Card 3",
      description: "Description for Card 3",
      image: "../assets\\IMG_20220821_100515.jpg" // Replace with actual image file
    },
    
    // Add more card objects as needed
  ];


  constructor() { }

  ngOnInit(): void {

  }

}
