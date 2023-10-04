import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private userService:UserService,private router:Router,private snackBar: MatSnackBar){ }
  ngOnInit(): void{ }

  Swal:any=Swal

 
  
  loginForm = new FormGroup({
    'emailId':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    'password':new FormControl('',Validators.required)
  });
  get emailId(){
    return this.loginForm.get('emailId');
  }
  get password(){
    return this.loginForm.get('password');
  }
   
  responsedata:any;
  loginCheck(){
    this.userService.loginCheck(this.loginForm.value).subscribe(response=>{
     console.log(response);
     this.responsedata = response;   
     console.log(this.responsedata.token);
     console.log(this.responsedata.role);
     
     localStorage.setItem("jwt",this.responsedata.token);
     localStorage.setItem("role",this.responsedata.role);
     localStorage.setItem("email",this.emailId.value);
     this.snackBar.open("Your login was successful.", "welcome", {
      duration: 3000,
    });
    //  this.alertsuccess()
     
     
     if(this.responsedata.role == "ROLE_USER"){
      this.router.navigateByUrl("userview");
     }
     if(this.responsedata.role == "ROLE_ADMIN"){
      this.router.navigateByUrl("adminview");
     }

    }, 
    
    err => {
      this.snackBar.open("Login Failed", "Try again", {
        duration: 3000,
      });
    })
  }

  alertfailure(){
    Swal.fire({
      title: 'Sorry!',
      text: 'login failed.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }


  simpleAlert(){  
    this.Swal.fire('Hello Angular');  
  }  
    
  alertWithSuccess(){  
    this.Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }

  alertsuccess(){
    Swal.fire({
  title: 'Welcome!',
  text: 'Your login was successful.',
  icon: 'success',
  confirmButtonText: 'OK'
});
  

}



}
