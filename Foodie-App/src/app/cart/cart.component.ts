import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ResUserService } from '../res-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { MenuListService } from '../menu-list.service';
import { UserCartService } from '../user-cart.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  constructor(public userService: UserService, private resUserService: ResUserService, private restaurantService: RestaurantService,
    private menulistService: MenuListService, private router: Router, private route: ActivatedRoute, private usercartService: UserCartService) {
    this.getTotalCost();
    console.log(this.getTotalCost());

    this.getUserByID2();


    
  


  }

  userCartItems: any = [];

  displayedColumns: string[] = ["foodId", "images", "foodName", "price", "Action"]
  datasource: any;

  dateToday: number = Date.now();



  ngOnInit(): void {
    this.usercartService.getUserByID(this.userService.loggedInEmail()).subscribe((resp: any) => {
      this.userCartItems = resp.cartItems;
      this.datasource = new MatTableDataSource<any>(this.userCartItems)

      console.log(this.userCartItems);


    })





   
      setInterval(() => {
      this.dateToday = Date.now(); //set time variable with current date 
     }, 1000); // set it every one seconds}


  }

  logout() {
    confirm("Do you want to logout")
    this.userService.logout();
    localStorage.removeItem('jwt')

  }

  selectedRestMenu: any;
  resID: any;
  // ngOnInit(): void {
  //   console.log("menulist view")
  //   this.resID = this.route.snapshot.paramMap.get('id')
  //   this.resUserService.getRestaurantById(this.resID).subscribe(
  //     (response:any) => {
  //       console.log(response);
  //       this.selectedRestMenu = response?.menulist;
  //     }
  //   )
  //  }

  cartfood: any
  getAllCartItems() {
    this.resUserService.getAllCartItems().subscribe(
      response => {
        this.cartfood = response;
        console.log(response);

      }
    )
  }


  deletecart: any
  deleteCartItem(foodId: any) {
    this.usercartService.deleteCartItem(foodId).subscribe(
      response => {
        this.deletecart = response;

        this.ngOnInit();
        // window.location.reload();
        alert("Deleted From Cart")
      }
    )

  }


  userdetails: any
  getUserByID2() {
    let emailId = localStorage.getItem('email')
    console.log(emailId)
    this.resUserService.getUserByID(emailId).subscribe(
      response => {
        console.log(response);
        this.userdetails = response;

      }
    )

  }



  getTotalCost() {
    return this.userCartItems.map((t: { price: any; }) => t.price).reduce((acc: any, value: any) => acc + value, 0);
  }


 
}
