import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService {

  constructor() { }
  gettoken(){  
    return !!localStorage.getItem("token");  
    }  
}
