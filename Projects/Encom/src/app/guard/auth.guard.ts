import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

export const authGuard: CanActivateFn = (route, state) => {



  const router = inject(Router);
  const api = inject(ApiService);
  const loggedData = localStorage.getItem("angular19Token");
  const refreshToken = localStorage.getItem('angular19RefreshToken');


  if (loggedData != null) {
    console.log("User is logged in");
    return true;
  } else {
    router.navigateByUrl("login");
    return false;
  }



};
