import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }

  @Input() restaurant: Restaurant;

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params["id"])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
