import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private http: HttpClient) { }

  getInformation(filteredYear?, launchSuccess?, landSuccess?) {
    let parameterUrl = "";
    parameterUrl += filteredYear? '&launch_year='+ filteredYear : '';
    parameterUrl += launchSuccess? '&launch_success='+ launchSuccess : '';
    parameterUrl += landSuccess? '&land_success='+ landSuccess : '';
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100'+ parameterUrl) 
  }
}
