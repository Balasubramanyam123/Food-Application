import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  UserAuthenticationBaseUrl: String = "http://localhost:8888/user-app";

  registerUser1(signupdata: any){
    return this.httpClient.post(this.UserAuthenticationBaseUrl + "/register-user1", signupdata);
  }

  loginCheck(logindata: any){
    return this.httpClient.post(this.UserAuthenticationBaseUrl + "/login-check", logindata);
  }

  Islogidin(){
    return !!localStorage.getItem('jwt');
  }

  loggedInEmail() {
    return localStorage.getItem("email")
  }

  logout(){
    localStorage.removeItem('jwt');
    localStorage.clear();
  }

  isUserView(){
    if(localStorage.getItem('role') == "ROLE_USER"){
      return true;
    }
    else{
      return false;
    }
  }

  isAdminView(){
    if(localStorage.getItem('admin') == "ROLE_ADMIN"){
      return true;
    }
    else{
      return false;
    }
  }
}
