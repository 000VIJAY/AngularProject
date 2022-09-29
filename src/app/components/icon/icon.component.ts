import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() childMessage: any;
  constructor(private not: NoteService) { }

  ngOnInit(): void {
  } 
  OnSubmit() :void{
    console.log(this.childMessage)
    this.not.trashNote(this.childMessage.noteId).subscribe((result:any)=>console.log(result))
  }
  Archive():void{
    console.log(this.childMessage)
    this.not.archiveNote(this.childMessage.noteId).subscribe((result:any)=>console.log(result))
  }
}
