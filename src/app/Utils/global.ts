import { environment } from '../../enviroments/enviroment.development';

export const API_ENDPOINTS = {
 
registration: environment.api_url +'api/Account/register',
login: environment.api_url +'api/Account/login',
FrenchiseRegistration:{
saveFrenchiseAgainstUser:environment.api_url +'api/FranchiseRegistration/SaveFrachsie',
saveResurant:environment.api_url + 'api/FranchiseRegistration/saveResurant',
checkRestuarant: environment.api_url +'api/FranchiseRegistration/IsRestuantCreated'
 }
}

export const  AppConstant = {
  accessToken:"accessToken",
  userId:'userId',
}