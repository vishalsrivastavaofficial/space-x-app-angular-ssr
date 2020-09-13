import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { FilterComponent } from './component/filter/filter.component';
import { CardComponent } from './component/card/card.component';

//Material Component Import
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FilterComponent, CardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  exports: [HeaderComponent, FooterComponent, FilterComponent, CardComponent,
    MatButtonModule, MatToolbarModule, MatCardModule, MatButtonToggleModule, HttpClientModule]
})
export class SharedModule { }
