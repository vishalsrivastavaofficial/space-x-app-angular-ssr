import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http: HttpClient) { }

  getInformation() {
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100') 
  }
}
