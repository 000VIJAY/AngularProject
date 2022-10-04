import { Component, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  name: any;
  nam: any = 'TrashComponent';
  archive: any = 'ArchiveComponent';
  Get: any = 'GetAllNotesComponent';
  durationInSeconds = 5;
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private not: NoteService, private route: ActivatedRoute,private dialog: MatDialog,private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.component
    console.log(this.name.name)
  }
  Archive(): void {
    console.log(this.childMessage)
    this.not.archiveNote(this.childMessage.noteId).subscribe((result: any) =>{
    console.log(result)
    this.messageEvent.emit(result)
    })
  }
  OnDelete(): void {
    console.log(this.childMessage)
    this.not.trashNote(this.childMessage.noteId).subscribe((result: any) =>{
      console.log(result)
      this.messageEvent.emit(result)
    })
  }
  OnDeleteForever() {
    console.log(this.childMessage)
    this.not.DeleteNote(this.childMessage.noteId).subscribe((result: any) =>{ 
      console.log(result);
      this.messageEvent.emit(result)
    })
  }
  color:any[] =[{ "name": "Red" }, { "name": "Cyan" }, { "name": "Blue" }, { "name": "DarkBlue" },
  { "name": "LightBlue" }, { "name": "Orange" }, { "name": "Black" },
  { "name": "Green" }, { "name": "Pink" }, { "name": "Purple" }, { "name": "Maroon" }, { "name": "Yellow" }]
  changeColor(name:any){
    console.log(name)
    let data ={
      color: name,
      NoteId: this.childMessage.noteId
    }
    this.not.BackgroundColor(data).subscribe((res:any)=>{
      console.log(res);
      this.messageEvent.emit(res)
    })
  }
  openSnackBar() {
    let snakbarRef=this._snackBar.open("Message archived!!");
    snakbarRef._dismissAfter(1000);
  }
  opeSnackBar() {
    let snakbarRef=this._snackBar.open("Message Unarchived!!");
    snakbarRef._dismissAfter(1000);
  }
  opSnackBar(){
    let snakbarRef=this._snackBar.open("Color changed successfully!!");
    snakbarRef._dismissAfter(1000);
  }
  oeSnackBar(){
    let snakbarRef=this._snackBar.open("Deleted permanently!!");
    snakbarRef._dismissAfter(1000);
  }
  oSnackBar(){
    let snakbarRef=this._snackBar.open("Restored!!");
    snakbarRef._dismissAfter(1000);
  }
  SnackBar(){
    let snakbarRef=this._snackBar.open("Deleted!!");
    snakbarRef._dismissAfter(1000);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CollaboratorComponent, {
      width: '600px',
      // panelClass: 'dialog-container-custom',
      data:this.childMessage
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }
}
