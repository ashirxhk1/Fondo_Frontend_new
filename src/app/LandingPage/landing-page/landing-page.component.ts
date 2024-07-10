import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

constructor(private route:Router){

}
auth = inject(AuthService);
gotoLogin(){
  if(!this.auth.isAuthenticated()){
    this.route.navigate(['gotoLogin']);
  }else{
    this.route.navigate(['goToFrenchise'])
  }
}
}
