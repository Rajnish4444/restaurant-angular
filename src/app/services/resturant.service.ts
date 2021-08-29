import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantItems } from "../models/restaurant-items";
import { RestaurantDetails } from "../models/restaurant-details";
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResturantService {
  
  private url: string = 'https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/';
  
  constructor(private http: HttpClient) { }

  getAllRestaurants = () => {
    const url = this.url + '/allRestaurants';
    return this.http.get(url).pipe(
      map(( value ) => {
        return value['allRestaurants'];
      })
    );
  }

  getRestaurantDetails = () => {
    const url = this.url + '/restaurantDetails';
    return this.http.get(url).pipe(
      map(( value ) => {
        return value['restaurantDetails'];
      })
    );
  }


  getMenu = (): RestaurantItems[] => {
    return [
      {
        restaurantName: "Burger Mania",
        items: [
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          }
        ]
      },
      {
        restaurantName: "Posh Pizza Hut",
        items: [
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          }
        ]
      },
      {
        restaurantName: "Cheesy Grilly",
        items: [
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          }
        ]
      },
      {
        restaurantName: "Indian Curries",
        items: [
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          }
        ]
      },
      {
        restaurantName: "Moonlit Dining",
        items: [
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          }
        ]
      },
      {
        restaurantName: "Ted's Classic Pub Food",
        items: [
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Hot Dish",
            itemCost: '£2.11',
            itemName: 'Look Delicious',
            itemPhoto: '../../assets/images/image2.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Baked",
            itemCost: '£19.80',
            itemName: 'Some Dish',
            itemPhoto: '../../assets/images/image1.jpg'
          },
          {
            itemCategory: "Sweet",
            itemCost: "£22.89",
            itemName: 'Yummy',
            itemPhoto: '../../assets/images/image3.jpg'
          }
        ]
      }
    ]
  }
}
