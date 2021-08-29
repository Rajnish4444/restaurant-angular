import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';

const routes: Routes = [
  {
    path: 'details/:name',
    component: RestaurantDetailsComponent
  },
  {
    path: '',
    component: RestaurantsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
