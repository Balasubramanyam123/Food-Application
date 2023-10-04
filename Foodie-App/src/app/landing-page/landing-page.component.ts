import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ResUserService } from '../res-user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private restaurantService:RestaurantService,private resUserService:ResUserService){
   
  }
  


  



  getAllRes:any;
 ngOnInit(): void {
  this.restaurantService.getAllRestaurants().subscribe(
    response => {
     this.getAllRes = response;
      console.log(this.getAllRes)
    })
}





}
