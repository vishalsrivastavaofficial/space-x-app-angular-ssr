import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardDataService } from 'src/app/space-x/dashboard/dashboard-data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filteredData = new EventEmitter<any>();
  filteredYear = '';
  launchSuccess = '';
  landSuccess = '';

  constructor(private dashboardService: DashboardDataService) { }

  ngOnInit(): void {
  }

  filterByYear(year){
    this.filteredYear = year;
    this.dashboardService.getInformation(this.filteredYear,this.launchSuccess,this.landSuccess).subscribe((data)=>{
      this.filteredData.emit(data);
    });
  }
  filterByLaunch(launchSuccessful){
    this.launchSuccess = launchSuccessful;
    this.dashboardService.getInformation(this.filteredYear,this.launchSuccess,this.landSuccess).subscribe((data)=>{
      this.filteredData.emit(data);
    });
  }
  filterByLand(landSuccessful){
    this.landSuccess = landSuccessful;
    this.dashboardService.getInformation(this.filteredYear,this.launchSuccess,this.landSuccess).subscribe((data)=>{
      this.filteredData.emit(data);
    });
  }

  resetAll() {
    this.landSuccess = "";
    this.launchSuccess = "";
    this.filteredYear = "";
    this.dashboardService.getInformation().subscribe((data)=>{
      this.filteredData.emit(data);
    });
  }

}
