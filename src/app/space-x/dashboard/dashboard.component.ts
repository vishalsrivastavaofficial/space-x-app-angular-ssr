import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:Object;
  constructor(private dashboardService: DashboardDataService) { }

  ngOnInit(): void {
    this.dashboardService.getInformation().subscribe((data)=>{
      this.data = data;
    });
  }

  setData(filteredData) {
    this.data = filteredData;
  }

}
