import { Component, OnInit } from '@angular/core';
import { ResturantService } from '../../services/resturant.service';
import { Restaurant } from "../../models/restaurant";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
