import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { ActivateGuard } from './activate.guard';
import { ContactComponent } from './contact/contact.component';
import { DeactivateGuard } from './deactivate.guard';
import { CustomerComponent } from './customer/customer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { ActivatechildguardGuard } from './activatechildguard.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    CustomerComponent,
    AddcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [UserService, ActivateGuard, DeactivateGuard, ActivatechildguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
