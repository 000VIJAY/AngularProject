import { Component, OnInit } from '@angular/core';
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {
title:any;
description:any;
colour:any;
  constructor(public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any, private not:NoteService) { }

  ngOnInit(): void {
    console.log(this.data)
     this.title=this.data.title;
     this.description=this.data.description;
     console.log(this.data.color)
     console.log(this.message)
     this.colorcha()
  }
  colorcha(){
    console.log(this.message)
    if(this.message==undefined)
    {
    this.colour =this.data.color
    }else{
     this.colour = this.message
    }
  }
  onNoClick(): void {
    this.colorcha()
    this.dialogRef.close();
    let dat={
      title:this.title,
      description:this.description,
      color:this.colour,
      isPin: false,
      isReminder: false,
      isArchieve: false,
      isTrash: false,
      reminder: "2022-09-28T07:16:08.706Z",
      NoteId: this.data.noteId
    }
    this.not.updateNotes(dat).subscribe((result: any) => console.log(result))
  }
  message:any;
  receiveMessage(event:any) {
    console.log(event.color)
    this.message = event
    console.log(this.message)
  }
}
