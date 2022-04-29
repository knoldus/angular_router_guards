import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService , private routes: Router) { }
  msg: string;
  ngOnInit() {
  }
  submit(uname, pwd) {
    const output = this.userService.checkusernameandpassword(uname, pwd);
    if (output === true) {
      this.routes.navigate(['/home']);
    } else {
      this.msg = 'Invalid username or password';
    }
  }

}
