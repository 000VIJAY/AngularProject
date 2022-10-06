import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isShow = false;
  title: any;
  description: any;
  message:any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private note: NoteService) { }

  ngOnInit(): void {
  }
  show() {
    this.isShow = true;
  }
  close() {
    this.isShow = false;
    console.log(this.title, this.description)
    let data = {
      title: this.title,
      description: this.description,
      color: "white"
    }
    this.note.AddNotes(data).subscribe((result: any) => {
      console.log(result);
      this.messageEvent.emit(result);
    })
  }
  receiveMessage(event:any) {
    this.message = event
    console.log(this.message)
    this.messageEvent.emit(this.message)
  }
}
