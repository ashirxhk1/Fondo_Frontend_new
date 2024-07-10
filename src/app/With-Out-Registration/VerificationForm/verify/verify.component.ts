import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../../Services/FranchiseRegistration/registration.service';
import { RestaurantDto } from '../register-frenchise/register-frenchise.component';

export class RestauranMinitDto{
  id:number = 0;
  restaurantName:string="";
  startDate:string = ""
  specialty:number = 0;
  referenceSite:string ='';
  neighborhood:string="";
  zipCode:string="";
  city:string="";
  state:string = "";
  country:string ="";
  outsideNumber:string="";
  innerNumber:string="";
  contactName:string ="";
  surname:string="";
  email:string= "";
  phoneNumber:string='';
  password:string="";
  confirmPassword:string="";
  userId:number = 1; 
}

@Component({
  selector: 'app-verify',
  standalone: true,
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {
  isRestuarntCreated:boolean = false;
  restuarntData:RestauranMinitDto = {} as RestauranMinitDto;
  constructor(private router:Router, private franchiseService: RegistrationService){}

 async ngOnInit() {
   debugger
  let res = await this.franchiseService.isResturantCreated() as RestauranMinitDto;
  if(res){
    this.restuarntData = res; 
    this.isRestuarntCreated = res.id > 0 ? true: false;
  }
  }
 async goToVerification(){

   
    this.router.navigate(['goToVerification'])
 
  }

  goToLayout(){
    this.router.navigate(['goToLayout'])
  }


}
