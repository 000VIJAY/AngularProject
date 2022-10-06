import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CollabService {
  token: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token')
  }
  AddCollab(data: any) {
    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
    }
    return this.http.postService(`https://localhost:44300/Collaborator/AddCollab/${data.NoteId}/${data.email}`, data, true, header)
  }
  GetCollab(data: any) {
    console.log(data,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
    }
    return this.http.getService(`https://localhost:44300/Collaborator/GetCollaboratorByNoteId/${data}`, true, header)
  }
  DeleteCollaborator(dat: any){
    console.log(dat,this.token);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+this.token 
      })
    }
    return this.http.DeleteService(`https://localhost:44300/Collaborator/RemoveCollaborator/${dat.NoteId}/${dat.CollabId}`, true, header)
  }
}
