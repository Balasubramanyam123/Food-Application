import { Component } from '@angular/core';
import { RestaurantService } from './restaurant.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foodie-App';

  constructor(public userService:UserService){

    
  }



  

  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.clear();
  }

}