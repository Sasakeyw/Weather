import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'weather' },
      { path: '', redirectTo: '', pathMatch: 'prefix' },
      { path: 'weather', component: WeatherComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
