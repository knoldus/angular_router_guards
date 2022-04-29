import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrDatas = [];
  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getData()
    .subscribe(resData => this.arrDatas = resData);
  }
}
