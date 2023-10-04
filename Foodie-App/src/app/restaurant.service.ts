import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
 

  constructor(private httpClient: HttpClient) { }
  
  RestaurantApplicationBaseUrl : String = "http://localhost:9999/res-app";

  getAllRestaurants(){
    return this.httpClient.get(this.RestaurantApplicationBaseUrl+"/get-all-restaurants");
  }


  updateRestaurant(restaurantobj:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.put(this.RestaurantApplicationBaseUrl+"/update-restaurant/"+restaurantobj?.restaurantId,restaurantobj,requestoptions);
  }

  deleteRestaurantById(restautantId:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.delete(this.RestaurantApplicationBaseUrl+"/delete-restaurant-by-id/"+restautantId,requestoptions);
  }

  addMenuListToRestaurant(restaurantId:any,menuListData:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions ={headers:httpheaders};
    return this.httpClient.post(this.RestaurantApplicationBaseUrl+"/add-menu-list-to-restaurant/"+restaurantId,menuListData,requestoptions);

  }
  
  updateMenuLisToRestaurant(restaurantId:any,foodId:any,menuListData:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions ={headers:httpheaders};
    return this.httpClient.put(this.RestaurantApplicationBaseUrl+"/update-menulist-to-restaurant/"+restaurantId+"/"+foodId,menuListData,requestoptions);

  }
  
  deleteMenuListToRestaurant(foodId:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions ={headers:httpheaders};
    return this.httpClient.delete(this.RestaurantApplicationBaseUrl+"/delete-menulist-to-restaurant/"+foodId,requestoptions);

  }

  addNewRestaurantData(restaurantdata:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions ={headers:httpheaders};
    return this.httpClient.post(this.RestaurantApplicationBaseUrl+"/add-restaurant",restaurantdata,requestoptions);
  }
  deleteFoodItemFromMenu(restaurantId:any,foodId:any){
    let httpheaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions ={headers:httpheaders};
    return this.httpClient.delete(this.RestaurantApplicationBaseUrl+"/delete-menulist-to-restaurant/"+restaurantId+"/"+foodId,requestoptions);
  }
}
