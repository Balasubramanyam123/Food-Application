import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuListService } from '../menu-list.service';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';
import { MatTableDataSource } from '@angular/material/table';
import { ResUserService } from '../res-user.service';

export interface GetRest {
  restaurantId: number;
  restaurantName: string;
  location: string;
}

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})





export class AdminviewComponent {
  MenulistApplicationBaseUrl: string;
  httpClient: any;
  getAllRes: any;
  displayedColumns: string[] = ["restaurantId","images", "restaurantName", "location", "Action"]
  datasource: any;

  constructor(private userService: UserService,private resUserService:ResUserService, private restaurantService: RestaurantService, private router: Router) {
    this.getAllRestaurants();
    this.getUserByID();
  }

  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.removeItem('jwt')

  }

  //ok

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe(
      response => {
        this.getAllRes = response;
        this.datasource = new MatTableDataSource<any>(this.getAllRes)
        console.log(response);
      })
  }

  deleteMenu: any;
  deleteMenuListToRestaurant(foodId: any) {
    this.restaurantService.deleteMenuListToRestaurant(foodId).subscribe(
      response => {
        this.deleteMenu = response;
        console.log(response);
        this.getAllRestaurants();
      }
    )
  }




  //ok
  addRestaurantForm = new FormGroup({
    'restaurantId': new FormControl(),
    'restaurantName': new FormControl(),
    'location': new FormControl(),
    'menulist': new FormControl()
  });

  sendNewRestaurantData() {
    this.restaurantService.addNewRestaurantData(this.addRestaurantForm.value).subscribe(
      response => {
        console.log(response);
        this.addRestaurantForm.reset();
        this.getAllRestaurants();
      }
    )
  }
  editRestaurantForm = new FormGroup({
    'restaurantId': new FormControl(),
    'restaurantName': new FormControl(),
    'location': new FormControl()

  });
  getRestaurantForEdit(productObj: any) {
    this.editRestaurantForm.setValue(productObj);

  }

  updateRes: any;
  updateRestaurant(restaurantobj: any) {
    this.restaurantService.updateRestaurant(restaurantobj).subscribe(
      response => {
        this.updateRes = response;
        console.log(response);
        this.getAllRestaurants();
      }
    )
  }

  sendEditRestaurantData() {
    this.restaurantService.updateRestaurant(this.editRestaurantForm.value).subscribe(
      response => {
        console.log(response);
        this.getAllRestaurants();
        this.editRestaurantForm.reset();
      }
    )
  }

  deleteRes: any;
  deleteRestaurantById(restautantId: any) {
    this.restaurantService.deleteRestaurantById(restautantId).subscribe(
      response => {
        this.deleteRes = response;
        console.log(response);
        this.getAllRestaurants();
      }
    )
  }


  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.datasource.filter = value;
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

}
