import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddDataComponent } from './add-data/add-data.component';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { GoogleFormPageComponent } from './pages/google-form-page/google-form-page.component';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-data',component:AddDataComponent},
  {path: 'bookingpage', component:BookingpageComponent},
  {path:'registration-form', component:GoogleFormPageComponent}, 
  { path: 'view-all', component: ViewAllPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
