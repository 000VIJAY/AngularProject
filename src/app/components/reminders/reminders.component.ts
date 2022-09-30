import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {

  noteArr:any;
  constructor(private note:NoteService) { }
  ngOnInit(): void {
    this.getAllNotes();
  }
  getAllNotes() {
    this.note.GetNotes().subscribe((result: any) => {
      console.log(result);
      this.noteArr =  result.noteList.filter((data:any)=>{
        return data.isTrash == false && data.isReminder == true
      })
      this.noteArr.reverse();
    })
  }

}
