import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResUserService {
  

  constructor(private httpClient: HttpClient) { }

  ResUserApplicationBaseUrl : String = "http://localhost:9999/res-user-app";

  addFavoRestaurantToUser(restaurant:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.post(this.ResUserApplicationBaseUrl+"/add-favo-restaurant-to-user/" + restaurant.restaurantId,restaurant,requestoptions);

  }
  
  emailId:any;
  addFavoFoodItemToUser(restaurantobj:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    this.emailId = localStorage.getItem('email')
    
    return this.httpClient.post(this.ResUserApplicationBaseUrl+"/add-favo-food-item-to-user/" +this.emailId,restaurantobj);

  }
  
  // addToCart(restaurantobj:any){
  //   let httpheaders = new HttpHeaders({
  //     'Authorization':'Bearer ' +localStorage.getItem('jwt')
  //   });
  //   let requestoptions = {headers:httpheaders};
  //   this.emailId = localStorage.getItem('email')
    
  //   return this.httpClient.post(this.ResUserApplicationBaseUrl+"/add-cart-item-to-user/" +this.emailId,restaurantobj);

  // }

 
  deleteFavoRestaurantToUser(restaurantId:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.delete(this.ResUserApplicationBaseUrl+"/delete-favo-restaurant-to-user/"+ restaurantId,requestoptions);

  }

  deleteFavoFoodItemToUser(foodId:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.delete(this.ResUserApplicationBaseUrl+"/delete-favo-food-item-to-user/"+ foodId,requestoptions);
  }

  // deleteCartItem(foodId:any){
  //   let httpheaders = new HttpHeaders({
  //     'Authorization':'Bearer ' +localStorage.getItem('jwt')
  //   });
  //   let requestoptions = {headers:httpheaders};
  //   return this.httpClient.delete(this.ResUserApplicationBaseUrl+ "/delete-cart-item-to-user/" + foodId,requestoptions);
  // }
  
  getRestaurantById(restaurantId:any){
  
    return this.httpClient.get(this.ResUserApplicationBaseUrl+"/get-restaurant-by-id/" +restaurantId);
  }

  getAllCartItems(){
    return this.httpClient.get(this.ResUserApplicationBaseUrl+"/get-all-cart-item-to-user");
  }
  
  
  getUserByID(email:string) {
    
    return this.httpClient.get(this.ResUserApplicationBaseUrl+"/get-user-by-id/"+email);
  }

  
}
