import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
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
        console.log("notes")
        return data.isArchieve == true && data.isTrash == false
      })
      this.noteArr.reverse();
    })
  }
}
