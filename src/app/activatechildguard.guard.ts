import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class ActivatechildguardGuard implements CanActivateChild {
  constructor(private _userService: UserService, private _router: Router) {}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this._userService.isChildRights()) {
        return true;
      } else {
        alert('Redirecting to Login Page ');
        this._router.navigate(['login']);
      }
      return true;
  }
}
