import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
   formData: any = {}; // Object to store form data

  submitForm(event: Event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const number = (<HTMLInputElement>document.getElementById('number')).value;
    const message = (<HTMLInputElement>document.getElementById('message')).value;

    //Store form data in object
    this.formData = {
      name: name,
      email: email,
      number: number,
      message: message
    };

     // Log the form data object to the console
     console.log('Form Data:', this.formData);
  }
}
