import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../../../Services/FranchiseRegistration/registration.service';
import { RestaurantDto } from '../register-frenchise/register-frenchise.component';

export class FrenchiseDto{
  id:number=0;
  name:string='';
  userId:number = 0
};
@Component({
  selector: 'app-select-frenchise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select-frenchise.component.html',
  styleUrl: './select-frenchise.component.scss'
})

export class SelectFrenchiseComponent {
  franchise:FrenchiseDto[] = [{id:1,name:"KFC"},{id:2,name:"McDoland's"},{id:3,name:"Starbucks"},{id:4,name:"Domino's"},{id:5,name:"FLorida steaks"}] as  FrenchiseDto [];
  selectedFrencise:FrenchiseDto = {} as FrenchiseDto;
  restuant:any = {} as any;
  constructor(private router:Router,private auth: AuthService, private franchiseService:RegistrationService){

  }


 async ngOnInit() {
  this.restuant  = await this.franchiseService.isResturantCreated() as any;
  debugger
  }
  gotoLogin(){
    if(this.auth.isAuthenticated()){
      this.router.navigate([''])
    }else{
      this.router.navigate(['gotoLogin'])
    }
 
  }
  
  async goToRegFrenchise(){
  debugger
    if((this.selectedFrencise?.id||0)>0){
      this.selectedFrencise.userId = 23;
     await this.franchiseService.saveFrenchiseAgainstUser(this.selectedFrencise);
    } 
    if(this.restuant?.id> 0){
      this.router.navigate(['goToVerify'])
    }else{

      this.router.navigate(['goToRegFrenchise'])
    }
  }

  OnFrenciseselect(event:any){
    
    if(event && event.target?.value){
      let selectedFranchiseId = Number(event.target?.value);
      this.selectedFrencise = this.franchise.find(x=>x.id == selectedFranchiseId) || {} as FrenchiseDto;;

    }
  }

  gotoRegistration(){
    this.router.navigate(['gotoRegister'])
  }
}
