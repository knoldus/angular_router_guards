import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class ActivateGuard implements CanActivate {
  constructor(private _userService: UserService, private _router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (localStorage.getItem('username') != null) {
        return true;
      } else {
        alert('you dont\'t have permission to view this page, Redirecting to LoginPage ');
        this._router.navigate(['/login']);
        return false;
      }


}
}
