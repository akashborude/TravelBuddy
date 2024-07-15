import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddDataComponent } from './add-data/add-data.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { GoogleFormPageComponent } from './pages/google-form-page/google-form-page.component';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DestinationsComponent,
    AboutusComponent,
    ContactComponent,
    AddDataComponent,
    BookingpageComponent,
    CarouselComponent,
    GoogleFormPageComponent,
    ViewAllPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
