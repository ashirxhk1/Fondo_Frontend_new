import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FrenchiseDto } from '../../With-Out-Registration/VerificationForm/select-frenchise/select-frenchise.component';
import { API_ENDPOINTS, AppConstant } from '../../Utils/global';
import { lastValueFrom } from 'rxjs';
import { RestaurantDto } from '../../With-Out-Registration/VerificationForm/register-frenchise/register-frenchise.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

 async saveFrenchiseAgainstUser(frenchise:FrenchiseDto){
   return await lastValueFrom(this.httpClient.post(API_ENDPOINTS.FrenchiseRegistration.saveFrenchiseAgainstUser, frenchise));
  }  

 
  async SaveRestuarnt(model: RestaurantDto) {
    const formData = new FormData();
    formData.append('Id', model.Id.toString());
    formData.append('RestaurantName', model.RestaurantName);
    formData.append('StartDate', model.StartDate);
    formData.append('Specialty', model.Specialty.toString());
    formData.append('ReferenceSite', model.ReferenceSite);
    formData.append('Neighborhood', model.Neighborhood);
    formData.append('ZipCode', model.ZipCode);
    formData.append('City', model.City);
    formData.append('State', model.State);
    formData.append('Country', model.Country);
    formData.append('OutsideNumber', model.OutsideNumber);
    formData.append('InnerNumber', model.InnerNumber);
    formData.append('ContactName', model.ContactName);
    formData.append('Surname', model.Surname);
    formData.append('Email', model.Email);
    formData.append('PhoneNumber', model.PhoneNumber);
    formData.append('Password', model.Password);
    formData.append('ConfirmPassword', model.ConfirmPassword);
    formData.append('UserId', model.UserId.toString())
    
    return await lastValueFrom(this.httpClient.post(API_ENDPOINTS.FrenchiseRegistration.saveResurant, formData));
  }


  async isResturantCreated() {
   let userId = Number(localStorage.getItem(AppConstant.userId))
   const url = `${API_ENDPOINTS.FrenchiseRegistration.checkRestuarant}?UserId=${userId}`;
   return await lastValueFrom(this.httpClient.get(url));
  }

  showSuccessMessage() {
    this.snackBar.open('Success!', 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

   
}
