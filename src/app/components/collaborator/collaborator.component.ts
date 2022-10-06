import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CollabService } from 'src/app/services/Collaborator/collab.service';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  email:any;
  res:any;
  constructor(public dialogRef: MatDialogRef<CollaboratorComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private not:CollabService) { }

  ngOnInit(): void {
    console.log(this.data.user.email)
    console.log(this.res)
    this.getCollabo();
  }
  onNoClick(): void {
    this.dialogRef.close();
    let dat={
      email:this.email,
      NoteId: this.data.noteId
    }
    this.not.AddCollab(dat).subscribe((res:any)=>{
      console.log(res)
    })
  }
  getCollabo(){
    this.not.GetCollab(this.data.noteId).subscribe((res:any)=> {console.log(res.allCollab);
      this.res = res.allCollab;
      console.log(this.res.collabId)
    })
  }
  DeleteCollab(){
    let dat={
      collabId:this.res.collabId,
      NoteId:this.data.noteId
    }
    this.not.DeleteCollaborator(dat).subscribe((result:any)=>{
      console.log(result)
    })
  }
  onclick(){
    this.dialogRef.close();
  }
}
