import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  constructor(private httpClient: HttpClient) { }

  UserCartApplicationBaseUrl : String = "http://localhost:9999/user-cart-app";


  emailId:any;
  addToCart(cartobj:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    this.emailId = localStorage.getItem('email')
    
    return this.httpClient.post(this.UserCartApplicationBaseUrl+"/add-cart-item-to-user/" +this.emailId,cartobj);

  }


  // getAllCartItems(){
  //   return this.httpClient.get(this.UserCartApplicationBaseUrl+"/get-all-cart-item-to-user");
  // }

  getUserByID(email:string) {
    
    return this.httpClient.get(this.UserCartApplicationBaseUrl+"/get-user-by-id/"+email);
  }

  deleteCartItem(foodId:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.delete(this.UserCartApplicationBaseUrl+ "/delete-cart-item-to-user/" + foodId,requestoptions);
  }
}
