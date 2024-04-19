import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'destinations', component: DestinationsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-data',component:AddDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
