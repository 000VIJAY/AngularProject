import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token')
  }
  AddNotes(data: any) {
    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
    }
    return this.http.postService("https://localhost:44300/Note/AddNote", data, true, header)
  }
  GetNotes(){
    console.log(this.token)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.getService("https://localhost:44300/Note/GetAllNoteJoin",true,header)
  }
  updateNotes(dat: any) {
    console.log(dat,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
    }
    return this.http.putService(`https://localhost:44300/Note/UpdateNote/${dat.NoteId}`, dat, true, header)
  }
}
