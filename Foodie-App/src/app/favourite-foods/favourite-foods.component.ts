import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResUserService } from '../res-user.service';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';
import { UserCartService } from '../user-cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite-foods',
  templateUrl: './favourite-foods.component.html',
  styleUrls: ['./favourite-foods.component.css']
})
export class FavouriteFoodsComponent {

  userFavRest: any = [];

  constructor(public userService:UserService,private resUserService:ResUserService,private restaurantService:RestaurantService, private router:Router,private userCartService:UserCartService,private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.resUserService.getUserByID(this.userService.loggedInEmail()).subscribe((resp:any) => {
      this.userFavRest = resp.favouriteItems;
      console.log("favfood");
    })
  }
  
  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.removeItem('jwt')

  }

  delfavfood:any
  deleteFavoFoodItemToUser(foodId:any){
    this.resUserService.deleteFavoFoodItemToUser(foodId).subscribe(
      response => {
        this.delfavfood = response;
        console.log(response);
        // window.location.reload();
        this.ngOnInit();
        this.snackBar.open("Favourite Food", "DELETED", {
          duration: 2000,
        });
      }
    )
  }

  cartfood:any;
  addToCart(foodobj:any){
    console.log(foodobj)
    this.userCartService.addToCart(foodobj).subscribe(
      response=>{
        this.cartfood = response;
        console.log(response);
        alert("Added To Cart")
      }
    )

  }

 
}
