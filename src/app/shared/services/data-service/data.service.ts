import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = environment.travelBuddyServerUrl;
  

  constructor(private http: HttpClient) {}

  getAllTreks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllTreks`);
  }

  getAllCamps(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllCamps`);
  }

  getAllAdventure(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllAdventure`);
  }

  getAllBackpacks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllBackpacks`);
  }

  getTrekById(trekId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getTrekById/${trekId}`);
  }

  getCampById(campId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getCampById/${campId}`);
  }

  getAdventureById(adventureId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAdventureById/${adventureId}`);
  }

  getBackpackById(backpackId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getBackpackById/${backpackId}`);
  }

  bookTrek(trekData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookTrek`, trekData);
  }

  bookCamp(campData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookCamp`, campData);
  }

  bookAdventure(adventureData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookAdventure`, adventureData);
  }

  bookBackpack(backpackData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookBackpack`, backpackData);
  }
}