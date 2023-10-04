import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResUserService } from '../res-user.service';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent  {

  showFiller = false;

  restaurants: any;
  newRestaurants: any;
  
  
  
constructor(public userService:UserService,private resUserService:ResUserService,private restaurantService:RestaurantService,private router:Router,private snackBar: MatSnackBar){
  
 }
 

logout() {
  confirm("Do you want to logout")
  this.userService.logout();
  localStorage.removeItem('jwt')

}

getAllRes:any;
 ngOnInit(): void {
  this.getUserByID();
  this.getAllRestaurant();
  
    this.resUserService.getRestaurantById(this.getAllRes).subscribe(
      response => {
        this.getAllRes = response;
      }
    )
}

getAllRestaurant(){
  this.restaurantService.getAllRestaurants().subscribe(
    response => {
     this.getAllRes = response;
     this.restaurants = response;
     this.newRestaurants = response;
      
    })

}

  
  
  getResById: any;
  getRestaurantById(restaurantId:any){
    this.resUserService.getRestaurantById(restaurantId).subscribe(
       response =>{
        this.getResById = response;
        console.log(response);
       }
    
    )
  }

  favores:any;
  addFavoRestaurantToUser(restaurant:any){ 
    
    this.resUserService.addFavoRestaurantToUser(restaurant).subscribe({
      next: data => {
        console.log(data)
        this.favores = data;
        
        window.location.reload();

        this.snackBar.open("Favourite Restaurant", "Added", {
          duration: 2000,
        });
      }, error: e => {
        this.snackBar.open("Favourite Restaurant", "Already Exists", {
          duration: 2000,
        });
      }
    });
  }


 userdetails:any
  getUserByID(){
    let emailId = localStorage.getItem('email')
    console.log(emailId)
    this.resUserService.getUserByID(emailId).subscribe(
      response=>{
        console.log(response);
        this.userdetails=response;
        
      }
    )
  }


  searchData() {
    let restaurantNames = (document.getElementById('search-bar') as HTMLInputElement).value;
    this.restaurants = this.newRestaurants;
    this.restaurants = this.restaurants.filter((x: { restaurantName: string; }) => x.restaurantName.toLowerCase().startsWith(restaurantNames.toString().toLowerCase()))
    console.log(this.restaurants);

  }

   
  
}
