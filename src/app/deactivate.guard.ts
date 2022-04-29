import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

@Injectable()
export class DeactivateGuard implements CanDeactivate<ContactComponent> {
  canDeactivate(
    component: ContactComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    return window.confirm('Are you sure to leave this page ?');
  }

}
