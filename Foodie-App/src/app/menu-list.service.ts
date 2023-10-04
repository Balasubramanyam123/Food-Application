import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {
 

  constructor(private httpClient:HttpClient) { }

  MenulistApplicationBaseUrl : String = "http://localhost:9999/menu-app";


  addMenu(menuobj:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.post(this.MenulistApplicationBaseUrl+"/add-menu",menuobj,requestoptions);
 
    
  }
    
  getAllMenu(){
    return this.httpClient.get(this.MenulistApplicationBaseUrl + "/get-all-menu");
  }

  updateMenu(menuobj:any){
    let httpheaders = new HttpHeaders({
      'Authorization':'Bearer ' +localStorage.getItem('jwt')
    });
    let requestoptions = {headers:httpheaders};
    return this.httpClient.post(this.MenulistApplicationBaseUrl+"/update-menu",menuobj,requestoptions);
  }

  
}
