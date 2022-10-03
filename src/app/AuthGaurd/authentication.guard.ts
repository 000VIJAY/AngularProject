import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGaurdService } from '../services/AuthService/auth-gaurd.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private Authguardservice: AuthGaurdService, private router: Router) {}  
canActivate(): boolean {  
    if (!this.Authguardservice.gettoken())
    {  
      this.router.navigateByUrl("/signin");  
    }  
    return this.Authguardservice.gettoken();  
}  
}
