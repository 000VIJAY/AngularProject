import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient:HttpClient) { }

  postService(url:string,requestData:any, token:boolean=false, httpOptions:any){
    console.log(requestData);

    return this.httpClient.post(url,requestData,token && httpOptions)
  }
  putService(url:string,requestData:any, token:boolean=false, httpOptions:any)
  {
    console.log(requestData);

    return this.httpClient.put(url,requestData,token && httpOptions)
  }
  getService( url:string,token:boolean=false,httpOptions:any)
  {
    return this.httpClient.get(url,token && httpOptions)
  }
  DeleteService( url:string,token:boolean=false,httpOptions:any)
  {
    return this.httpClient.delete(url,token && httpOptions)
  }
}
