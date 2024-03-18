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
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      Comment: new FormControl('', [Validators.required]),
      Mobile: ['', [Validators.required, Validators.pattern("/^(\+\d{1,3}[- ]?)?\d{10}$/")]]
    });
 }

 onSubmit(FormData: any) {
    console.log(FormData);
    // Here you can handle form submission, e.g., send data to a server
 }
}
