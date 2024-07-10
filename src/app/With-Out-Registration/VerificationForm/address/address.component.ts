import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {

  auth = inject(AuthService)
  constructor(private router:Router){}

  goToRegFrenchise(){
    if(this.auth.isAuthenticated()){
      this.router.navigate(['goToRegFrenchise'])
    }else{
      this.router.navigate(['']) 
    }
    
  
  }

  goToContact(){
    this.router.navigate(['goToContact'])
  }

}
