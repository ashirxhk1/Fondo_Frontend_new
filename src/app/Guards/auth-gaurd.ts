import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import { AuthService } from '../Services/auth.service';

export const authGuard: CanActivateFn = async (route, state) => {
  const permissionsService = inject(AuthService);
  const router = inject(Router);
  const authenticated = permissionsService.isAuthenticated();
  if (!authenticated) {
    await router.navigate([`/gotoLogin'`], {
      queryParams:
        {['returnUrl']: state.url}
    });
  }
  return authenticated;
};
