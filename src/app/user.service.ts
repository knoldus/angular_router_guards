import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private _url = './assets/data.json';

  constructor(private _http: Http) {
  }

  // check login authentication
  checkusernameandpassword(uname: string, pwd: string) {
    if (uname === 'admin' && pwd === 'admin123') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }


  isChildRights(): boolean {
    return false;
  }

  // get data from json file
  getData() {
    return this._http.get(this._url)
      .map((response: Response) => response.json());
  }
}

