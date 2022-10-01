import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArr: any;
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.note.GetNotes().subscribe((result: any) => {
      console.log(result);
      this.noteArr = result.noteList
      this.noteArr =  result.noteList.filter((data:any)=>{
        console.log("notes" ,this.noteArr)
        return data.isArchieve == false && data.isTrash == false
      })
      this.noteArr.reverse();
    })
  }
}
