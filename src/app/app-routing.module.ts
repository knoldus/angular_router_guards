import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActivateGuard } from './activate.guard';
import { DeactivateGuard } from './deactivate.guard';
import { ContactComponent } from './contact/contact.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatechildguardGuard } from './activatechildguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ActivateGuard] },
  { path: 'contact', component: ContactComponent, canDeactivate: [DeactivateGuard] },
  { path: 'customer', component: CustomerComponent, canActivateChild: [ActivatechildguardGuard],
    children: [
      { path: 'addcustomer', component: AddcustomerComponent }
    ] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
