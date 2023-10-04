import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService:UserService,private router:Router){ }
  
  ngOnInit(): void{ }
  Swal:any=Swal
 

  signupForm=new FormGroup({
    'emailId':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z]+(?:\.[a-zA-Z0-9-]+)*$/)]),
    'password':new FormControl('',Validators.required),
    'firstName':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]),
    'lastName':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]),
    'street':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]),
    'city':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]),
    'state':new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]/)]),
    'zipCode':new FormControl('',[Validators.required,Validators.pattern("[0-9]{6}")]),

  });

  get emailId(){
    return this.signupForm.get('emailId');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get firstName(){
    return this.signupForm.get('firstName');
  }
  get lastName(){
    return this.signupForm.get('lastName');
  }
  get street(){
    return this.signupForm.get('street');
  }
  get city(){
    return this.signupForm.get('city');
  }
  get state(){
    return this.signupForm.get('state');
  }
  get zipCode(){
    return this.signupForm.get('zipCode');
  }
  

  sendSignupData(){
    console.log(this.signupForm.value);
    this.userService.registerUser1(this.signupForm.value).subscribe(
      response => {
        console.log(response)
        alert("success")
        this.router.navigateByUrl("loginView")
        }
     )
  }
}




// simpleAlert(){  
//   this.Swal.fire('Hello Angular');  
// }  
  
// alertWithSuccess(){  
//   this.Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
// }

// alertsuccess(){
//   Swal.fire({
// title: 'Welcome!',
// text: 'Your login was successful.',
// icon: 'success',
// confirmButtonText: 'OK'
// });


// }


