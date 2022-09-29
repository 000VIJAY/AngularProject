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
        console.log("notes")
        return data.isTrash == true
      })
      this.noteArr.reverse();
    })
  }
  OnSubmit() :void{
    console.log(this.noteArr.noteList)
    this.note.trashNote(this.noteArr.noteList.noteId).subscribe((result:any)=>console.log(result))
  }
  OnDeleteForever(){
    console.log(this.noteArr)
    this.note.DeleteNote(this.noteArr.noteList.noteId).subscribe((result:any)=>console.log(result))
  }
}
