import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule,
  MatButtonToggleModule, MatGridListModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoroscopeComponent } from './horoscope/horoscope.component';


@NgModule({
  declarations: [WeatherComponent, HoroscopeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatToolbarModule, MatCardModule,
    MatButtonToggleModule, MatGridListModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class HomeModule { }
