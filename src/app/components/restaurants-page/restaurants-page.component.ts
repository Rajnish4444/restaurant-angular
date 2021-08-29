import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SearchFilterComponent } from 'src/app/components/search-filter/search-filter.component';
import { Restaurant } from 'src/app/models/restaurant';
import { ResturantService } from 'src/app/services/resturant.service';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.scss']
})
export class RestaurantsPageComponent implements OnInit {

  allRestaurant: Restaurant[] = [];
  categoryList: string[] = [];
  filterCategoryList: string[] = [];
  cuisineList: string[] = ['All'];
  unfilteredRestaurantList: Restaurant[] = [];
  searchText = "";
  constructor(
    private service: ResturantService, 
    public dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants = () => {
    this.service.getAllRestaurants().subscribe((allRestaurants) => {
      this.allRestaurant = allRestaurants.map(item => {
        const newRestaurant: Restaurant = {
          id: item.id,
          isOpen: item.isOpen,
          restaurantCategory: JSON.parse(item['restaurantCategory'].replace('\"', '"')),
          restaurantCuisine: JSON.parse(item['restaurantCuisine'].replace('\"', '"')),
          restaurantDescription: item['restaurantDescription'].replace("\n", ""),
          restaurantImage: item.restaurantImage,
          restaurantName: item.restaurantName
        }
        return newRestaurant;
      });
      this.unfilteredRestaurantList = this.allRestaurant;
      this.setRestaurantCategoryAndCuisineList();
    });
  }

  setRestaurantCategoryAndCuisineList = () => {
    this.allRestaurant.forEach(item => {
      item.restaurantCategory.forEach(i => {
        if(!this.categoryList.includes(i)){
          this.categoryList.push(i);
        }
      });
      item.restaurantCuisine.forEach(i => {
        if(!this.cuisineList.includes(i)){
          this.cuisineList.push(i);
        }
      })
    });
  }

  openFilter = () => {
    const dialogRef = this.dialog.open(SearchFilterComponent, {
      width: '400px',
      position: { 
        right: '0', top: '0', bottom: '0'
      },
      minHeight: '100vh',
      panelClass: 'filter-panel',
      data: {
        isOpen: false,
        cuisineList: this.cuisineList
      }
    });
  }

  search = (search: string) => {
    this.searchText = search.toLocaleLowerCase();
    this.applyFilters();
  }

  applyFilters = () => {
    if (this.filterCategoryList.length !== 0 || this.searchText != "")
    {
      this.allRestaurant = this.unfilteredRestaurantList
        .filter((rest) => rest.restaurantName.toLocaleLowerCase().includes(this.searchText));
      if (this.filterCategoryList.length !== 0)
        this.allRestaurant = this.allRestaurant
          .filter(rest => rest.restaurantCategory.some(category => this.filterCategoryList.indexOf(category) >= 0));
    } else {
      this.allRestaurant = this.unfilteredRestaurantList;
    }
  }

  addToCategoryFilter = (category: string) => {
    if (this.filterCategoryList.indexOf(category) >= 0)
    {
      this.filterCategoryList = this.filterCategoryList.filter(cat => cat !== category);
    } else {
      this.filterCategoryList.push(category);
    }
    this.applyFilters();
  }

  openRestaurantDetails = (restaurantName) => {
    this.router.navigateByUrl('details/' + restaurantName);
  }
}
