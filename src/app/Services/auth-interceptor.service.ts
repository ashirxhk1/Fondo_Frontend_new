import {HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {inject} from '@angular/core';
import {catchError, of} from 'rxjs';
// import {AppC} from '../../shared/utils/app-utilities';
import { AuthService } from './auth.service';
import { environment } from '../../enviroments/enviroments.prod';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const authService = inject(AuthService);
  return processRequestWithToken(req, next, authService.getAccessToken())
    .pipe(
      catchError(error => {
        // Handle auth related errors here (e.g., 401 Unauthorized)
        if (error.status === 401) {
          console.error('Authorization error occurred:', error);
          return of(error);
        }

        // Handle other errors here
        console.error('An error occurred:', error);
        return of(error);
      }));
};

function processRequestWithToken(req: HttpRequest<any>, next: HttpHandlerFn, token: string) {
  if (req.url.includes(environment.api_url)) {
    if (!!token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
  }
  return next(req);
}
