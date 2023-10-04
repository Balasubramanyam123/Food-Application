import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuListService } from '../menu-list.service';
import { ResUserService } from '../res-user.service';
import { RestaurantService } from '../restaurant.service';
import { UserService } from '../user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCartService } from '../user-cart.service';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {
constructor(private userService:UserService,private resUserService:ResUserService,private restaurantService:RestaurantService,
            private menulistService:MenuListService, private router:Router, private route:ActivatedRoute,private snackBar: MatSnackBar,private userCartService:UserCartService){ }

  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.removeItem('jwt')
  
  }

  selectedRestMenu:any;
  resID:any;
  ngOnInit(): void {
    console.log("menulist view")
    this.resID = this.route.snapshot.paramMap.get('id')
    this.resUserService.getRestaurantById(this.resID).subscribe(
      (response:any) => {
        console.log(response);
        this.selectedRestMenu = response?.menulist;
      }
    )
   }


   addmenu:any
   addMenu(menuobj:any){
    this.menulistService.addMenu(menuobj).subscribe(
      response =>  {
        this.addmenu = response;
        console.log(response);
      }
    )

   }
  
  
   
   getmenu:any;
   getAllMenu(){
    this.menulistService.getAllMenu().subscribe(
      response => {
        this.getmenu = response;
        console.log(response);
      }
    )
   }

   upmenu:any;
   updateMenu(menuobj:any){
    this.menulistService.updateMenu(menuobj).subscribe(
      (           response: any) => {
        this.upmenu = response;
        console.log(response);
      }
    )
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
  
 
  favofood:any;
  addFavoFoodItemToUser(restaurantobj:any){
    console.log(restaurantobj)
    this.resUserService.addFavoFoodItemToUser(restaurantobj).subscribe(
      {
        next: data => {
          console.log(data)
          this.favofood = data;
          
          window.location.reload();
  
          this.snackBar.open("Favourite Food", "Added", {
            duration: 3000,
          });
        }, error: e => {
          this.snackBar.open("Favourite Food", "Already Exists", {
            duration: 2000,
          });
        }
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
