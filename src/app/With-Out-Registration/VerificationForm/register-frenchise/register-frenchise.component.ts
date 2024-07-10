import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../Services/FranchiseRegistration/registration.service';
import { AuthService } from '../../../Services/auth.service';
import { RestuarantFormEnum } from '../../../Enums/RestuarantForm.Enum';
import { AppConstant } from '../../../Utils/global';

export class RestaurantDto{
  Id:number = 0;
  RestaurantName:string="";
  StartDate:string = ""
  Specialty:number = 0;
  ReferenceSite:string ='';
  Neighborhood:string="";
  ZipCode:string="";
  City:string="";
  State:string = "";
  Country:string ="";
  OutsideNumber:string="";
  InnerNumber:string="";
  ContactName:string ="";
  Surname:string="";
  Email:string= "";
  PhoneNumber:string='';
  Password:string="";
  ConfirmPassword:string="";
  UserId:number = 1; 
}
@Component({
  selector: 'app-register-frenchise',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register-frenchise.component.html',
  styleUrl: './register-frenchise.component.scss'
})
export class RegisterFrenchiseComponent {
  restuarntFormEnum = RestuarantFormEnum;
  formIndex:number = 1; 
  form:FormGroup = {} as FormGroup;
  constructor(private router:Router, private fb:FormBuilder, private franchiseService:RegistrationService, private Auth:AuthService){
    this.buildForm()
  }

  buildForm(){
    this.form = this.fb.group({
      Id:[0],
      RestaurantName:['',Validators.required],
      StartDate:[null,Validators.required],
      Specialty:[0,Validators.required],
      ReferenceSite:["",Validators.required],
      Neighborhood:[0, Validators.required],
      ZipCode:["",Validators.required],
      City:["",Validators.required],
      State:["",Validators.required],
      Country:["",Validators.required],
      OutsideNumber:["",Validators.required],
      InnerNumber:["",Validators.required],
      ContactName:["",Validators.required],
      Surname:["",Validators.required],
      Email:["",Validators.required],
      PhoneNumber:["",Validators.required],
      Password:["",Validators.required],
      ConfirmPassword:["",Validators.required],
    })
  }
  goToFrenchise(){
    this.router.navigate(['goToFrenchise'])
  }

  goToAddress(index: number){
    this.formIndex = index;

      // this.router.navigate(['goToAddress'])
    

  }
  
  goToRegFrenchise(){
    if(this.Auth.isAuthenticated()){
      this.router.navigate(['goToRegFrenchise'])
    }else{
      this.router.navigate(['']) 
    }
    
  
  }

  goToContact(){
    this.formIndex = RestuarantFormEnum.Contact;
    // this.router.navigate(['goToContact'])
  }

  goToVerify(){ 
    this.formIndex = RestuarantFormEnum.Varification
  }

  goToVerification(){
    this.formIndex = RestuarantFormEnum.Varification
  }
 async FgoToAddress(){
    
    if(this.form.valid){
      let formValue = this.form.value as RestaurantDto;
      formValue.UserId = Number(localStorage.getItem(AppConstant.userId))
      let res = await  this.franchiseService.SaveRestuarnt(formValue);
     if(res){
      this.franchiseService.showSuccessMessage()
     }
     this.router.navigate(['goToVerify']);
    }
  }
}
