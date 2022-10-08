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
  colour:any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    console.log(this.colour)
  }
  show() {
    this.isShow = true;
  }
  colorcha(){
    console.log(this.message)
    if(this.message==undefined)
    {
    this.colour ="white"
    }else{
     this.colour = this.message
    }
  }
  close() {
    this.colorcha()
    this.isShow = false;
    console.log(this.title, this.description)
    let data = {
      title: this.title,
      description: this.description,
      color: this.colour
    }
    this.note.AddNotes(data).subscribe((result: any) => {
      console.log(result);
      this.messageEvent.emit(result);
    })
  }
  receiveMessage(event:any) {
    this.message = event
    console.log(this.message)
    // this.messageEvent.emit(this.message)
  }
}
