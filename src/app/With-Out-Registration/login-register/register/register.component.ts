import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrModule } from 'ngx-toastr';
import { RegistrationService } from '../../../Services/FranchiseRegistration/registration.service';

export class RegistrationDto{
  FirstName:string ="";
  LastName:string = "";
  Email:string = "";
  ConfirmPassword:string = "";
  UserName :string = "";
  Password :string = "";
  Gender:string = "";
  DateOfBirth:string = "";
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, MatSnackBarModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  
  form:FormGroup = {} as FormGroup ; 
  constructor(private router:Router, private fb:FormBuilder, private authService:AuthService,private snackBar: MatSnackBar, private regisServcie: RegistrationService ) { 
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Email:['',[Validators.required]],
      ConfirmPassword:['',Validators.required],
      Password : ['',Validators.required],
      Gender:['',Validators.required],
      DateOfBirth:['',Validators.required],
  });
 }

  gotoLogin(){
    this.router.navigate(['gotoLogin']);
  }

 async registration(){
    if(this.form.valid){
      let formValues = this.form.value as RegistrationDto;
      formValues.UserName = formValues.Email;
      let res = await this.authService.register(formValues);
      if(res){
        this.regisServcie.showSuccessMessage();
      }
     }
    
  }


 
}
