import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  eventToBeBooked: { eventType: string; eventId: string; eventData: any } = {
    eventType: '',
    eventId: '',
    eventData: {},
  };
  constructor() {}

  bookTrek(trekData: any) {
    // Implement logic to book a trek
    console.log('Booking Trek:', trekData);
    // You can send the trekData to a server or perform any other necessary operations
  }

  bookCamp(campData: any) {
    // Implement logic to book a camping event
    console.log('Booking Camp:', campData);
    // You can send the campData to a server or perform any other necessary operations
  }

  bookAdventure(adventureData: any) {
    // Implement logic to book an adventure event
    console.log('Booking Adventure:', adventureData);
    // You can send the adventureData to a server or perform any other necessary operations
  }

  bookBackpack(backpackData: any) {
    // Implement logic to book a backpacking event
    console.log('Booking Backpack:', backpackData);
    // You can send the backpackData to a server or perform any other necessary operations
  }
}
