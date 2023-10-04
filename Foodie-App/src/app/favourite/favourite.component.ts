import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResUserService } from '../res-user.service';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  userFavRest:any = [];

constructor(private resUserService:ResUserService,private router:Router,public userService:UserService,private snackBar: MatSnackBar){ }

  ngOnInit(): void {
    this.resUserService.getUserByID(this.userService.loggedInEmail()).subscribe((resp:any) => {
      this.userFavRest = resp.favouriteRestaurants;
    })
  }
  

  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.removeItem('jwt')

  }


  delfavres:any
  deleteFavoRestaurantToUser(restaurantId:any){
    this.resUserService.deleteFavoRestaurantToUser(restaurantId).subscribe(
      response => {
        this.delfavres = response;
        console.log(response);
        // window.location.reload();
        this.ngOnInit();
        // alert("Restaurant Deleted From Favourite")
        this.snackBar.open("Favourite Restaurant", "DELETED", {
          duration: 2000,
        });
      }
    )
  }
  
}
