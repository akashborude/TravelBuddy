import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
 selector: 'app-contact',
 templateUrl: './contact.component.html',
 styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 FormData!: FormGroup;

 constructor(private builder: FormBuilder) { }

 ngOnInit() {
    this.FormData = this.builder.group({
      
    });
 }

 onSubmit(FormData: any) {
    console.log(FormData);
    // Here you can handle form submission, e.g., send data to a server
 }
}
