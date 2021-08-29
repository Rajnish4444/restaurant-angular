import { Component, OnInit } from '@angular/core';
import { ResturantService } from "../../services/resturant.service";
import { RestaurantDetails } from "../../models/restaurant-details";
import { item } from "../../models/item";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.scss']
})
export class RestaurantDetailsComponent implements OnInit {
  selectedCategory: string[] = ['All'];
  categoryList: string[] = ['All'];
  categoryQty: number[] = [];
  unfilteredMenu: item[] = [];
  menuItems: item[] = [];
  restaurantDetail: RestaurantDetails;
  restaurantName:string = '';
  constructor(
    private service: ResturantService,
    private route: ActivatedRoute  
  ) {
    this.restaurantName = this.route.snapshot.paramMap.get('name');
  }

  ngOnInit(): void {
    this.getRestaurantDetails();
  }

  getRestaurantDetails = () => {
    this.service.getRestaurantDetails().subscribe( (response: RestaurantDetails[]) => {
      this.restaurantDetail = response.filter(item => item.restaurantName.toLowerCase() === this.restaurantName.toLowerCase())[0];
      this.getMenu();
      this.setCategory();
      this.restaurantDetail.openingHours = this.restaurantDetail.openingHours.replace(', ', ', <br>');
    });
  }

  getMenu = () => {
    this.menuItems = this.service.getMenu().filter(item => item.restaurantName === this.restaurantName)[0].items;
    this.unfilteredMenu = this.menuItems;
  }

  setCategory = () => {
    this.categoryQty.push(this.menuItems.length);
    this.menuItems.forEach(item => {
      if(!this.categoryList.includes(item.itemCategory)){
        this.categoryList.push(item.itemCategory);
        this.categoryQty.push(1);
      }
      else{
        this.categoryQty[this.categoryList.indexOf(item.itemCategory)] = this.categoryQty[this.categoryList.indexOf(item.itemCategory)] + 1;
      }
    });
  }

  toggle = (item) => {
    if(this.selectedCategory.length == 1 && this.selectedCategory[0] === 'All'){
     this.selectedCategory = [];   
    }
    if(!this.selectedCategory.includes(item)){
      this.selectedCategory.push(item);
    }
    else{
      this.selectedCategory.splice(this.selectedCategory.indexOf(item), 1);
    }
    if (this.selectedCategory.length == 0 || this.selectedCategory.includes('All'))
    {
      this.selectedCategory = ["All"];
      this.menuItems = this.unfilteredMenu;
    } else {
      this.applyCategoryFilter();
    }
  }

  applyCategoryFilter = () => {
    this.menuItems = this.unfilteredMenu
                    .filter(item => this.selectedCategory.indexOf(item.itemCategory) >= 0 );
  }
}
