import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteArr:any;
  isTrash:boolean=false;
  constructor(private note:NoteService) { }
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.note.GetNotes().subscribe((result: any) => {
      console.log(result);
      this.noteArr =  result.noteList.filter((data:any)=>{
        console.log("notes" ,this.noteArr)
        return data.isTrash == true
      })
      this.noteArr.reverse();
    })
  }
  receiveMessage(event:any) {
    console.log(event) ;
    this.getAllNotes();
  }
  // OnSubmit(note:any) :void{
  //   console.log(note)
  //   this.note.trashNote(note.noteId).subscribe((result:any)=>console.log(result))
  // }
  // OnDeleteForever(note:any){
  //   console.log(note)
  //   this.note.DeleteNote(note.noteId).subscribe((result:any)=>console.log(result))
  // }
}
