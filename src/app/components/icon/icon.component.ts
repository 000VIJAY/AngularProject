import { Component, Input, OnInit, Type } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';
import { TrashComponent } from '../trash/trash.component';

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
  @Input() childMessage: any;
  isComponent(item: Type<any> | string | null): item is Type<any> {
    return typeof item === 'function';
  }
  constructor(private not: NoteService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.component
    console.log(this.name.name)
  }
  Archive(): void {
    console.log(this.childMessage)
    this.not.archiveNote(this.childMessage.noteId).subscribe((result: any) => console.log(result))
  }
  OnDelete(): void {
    console.log(this.childMessage)
    this.not.trashNote(this.childMessage.noteId).subscribe((result: any) => console.log(result))
  }
  OnDeleteForever() {
    console.log(this.childMessage)
    this.not.DeleteNote(this.childMessage.noteId).subscribe((result: any) => console.log(result))
  }
  color:any =[{ "name": "Red" }, { "name": "Cyan" }, { "name": "Blue" }, { "name": "DarkBlue" },
  { "name": "LightBlue" }, { "name": "Orange" }, { "name": "Black" },
  { "name": "Green" }, { "name": "Pink" }, { "name": "Purple" }, { "name": "Maroon" }, { "name": "Yellow" }]
  changeColor(name:any){
    console.log(name)
    let data ={
      color: name,
      NoteId: this.childMessage.noteId
    }
    this.not.BackgroundColor(data).subscribe((res:any)=>console.log(res))
  }
}
