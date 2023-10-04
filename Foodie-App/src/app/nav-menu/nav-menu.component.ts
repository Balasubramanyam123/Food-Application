import { Component } from '@angular/core';
import { ResUserService } from '../res-user.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  userFavRest: any = [];
  userFavRestaurant: any = [];
  userCartItems: any = [];

  constructor(private resUserService: ResUserService,public userService:UserService) {

    this.getUserByID();
    this.resUserService.getUserByID(this.userService.loggedInEmail()).subscribe((resp:any) => {
      this.userFavRest = resp.favouriteItems;
      this. userFavRestaurant = resp.favouriteRestaurants;
      this.userCartItems = resp.cartItems;
      console.log("favfood");
    })

  }


  userdetails: any
  getUserByID() {
    let emailId = localStorage.getItem('email')
    console.log(emailId)
    this.resUserService.getUserByID(emailId).subscribe(
      response => {
        console.log(response);
        this.userdetails = response;

      }
    )

  }

}
