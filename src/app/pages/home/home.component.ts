import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  eventsData = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      image: '../assets/IMG_20220821_094429.jpg', // Replace with actual image file
      prize: '1200/-'
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      image: '../assets/IMG_20220821_100417.jpg', // Replace with actual image file
      prize: '1400/-'
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
      image: '../assets\\IMG_20220821_100515.jpg', // Replace with actual image file
      prize: '1699/-'
    },

    // Add more card objects as needed
  ];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAlltreks();
  }

  getAlltreks() {
    const apiUrl = 'http://localhost:3000/getAllTreks'; // Replace with your actual API endpoint

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });

    const options = {
      headers: headers,
      withCredentials: true, // Enable sending cookies with the request
    };

    this.http.get(apiUrl, options).subscribe(
      (data: any) => {
        // Assuming the API response is an array of objects similar to eventsData
        this.eventsData = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
