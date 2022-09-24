import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  signup(data: any) {
    console.log(data);

    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44300/user/RegisterUser', data, false, header)
  }
  signin(data: any) {
    console.log(data);
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44300/user/LoginUser', data, false, header)
  }
  forgot(data: any) {
    console.log(data);
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('https://localhost:44300/user/ForgotPassword/{email}', data, false, header)
  }
  reset(data: any) {
    let header = {
      header: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.putService('https://localhost:44300/user/ResetPassword', data, true, header)
  }
}
