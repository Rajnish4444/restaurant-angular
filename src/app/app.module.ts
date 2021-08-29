import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResturantService } from "./services/resturant.service";
import { HttpClientModule } from '@angular/common/http';
import { RestaurantsPageComponent } from './components/restaurants-page/restaurants-page.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantsPageComponent,
    RestaurantDetailsComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ ResturantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
