import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResUserService } from '../res-user.service';
import { RestaurantService } from '../restaurant.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-menu-list',
  templateUrl: './admin-menu-list.component.html',
  styleUrls: ['./admin-menu-list.component.css']
})
export class AdminMenuListComponent {


  displayedColumns: string[] = ["foodId","images", "foodName", "quantity","price", "Action"]
  datasource: any;

  constructor(private restaurantService: RestaurantService, private router:Router,private route:ActivatedRoute,private resUserService:ResUserService) {
    this.getUserByID();
   }
  AddMenuLIstForm = new FormGroup({
    'foodId':new FormControl(),
    'foodName':new FormControl(),
    'quantity':new FormControl(),
    'price':new FormControl()
  });

  sendNewMenuListData(){
    this.restaurantService.addMenuListToRestaurant(this.resID,this.AddMenuLIstForm.value).subscribe(
      response =>{
        console.log(response);
        this.AddMenuLIstForm.reset()
        this.ngOnInit()
      }
    )
  }

  selectedRestMenu:any;
  resID:any;
  restName:any;
  ngOnInit(): void {
    this.resID = this.route.snapshot.paramMap.get('id')
    this.resUserService.getRestaurantById(this.resID).subscribe(
      (response:any) => {
        console.log(response);
        this.selectedRestMenu = response?.menulist;
        this.restName = response?.restaurantName;
        this.datasource = new MatTableDataSource<any>(this.selectedRestMenu)
      }
    )
   }

   editMenuListForm = new FormGroup({
    'foodId':new FormControl('',Validators.required),
    'foodName':new FormControl(),
    'quantity':new FormControl(),
    'price':new FormControl(),
    
  });
   getRestaurantForEdit(productObj:any){
    console.log(productObj);
    
    this.editMenuListForm.setValue(productObj);
   }

   sendEditMenuListData(){
    this.restaurantService.updateMenuLisToRestaurant(this.resID,this.editMenuListForm.value.foodId,this.editMenuListForm.value).subscribe(
      response=>{
        console.log(response);
        this.ngOnInit();
        this.editMenuListForm.reset();
      }
    )
   }
   deleteFoodItem(foodId:any){
    console.log(foodId);
    this.restaurantService.deleteFoodItemFromMenu(this.resID,foodId).subscribe(
      response=>{
        console.log(response);
        this.ngOnInit();
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
