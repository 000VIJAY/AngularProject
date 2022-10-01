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
  nam:any = 'TrashComponent';
  archive:any='ArchiveComponent';
  Get:any='GetAllNotesComponent';
  @Input() childMessage: any;
  isComponent(item: Type<any> | string | null): item is Type<any> {
    return typeof item === 'function';
  }
  constructor(private not: NoteService, private route: ActivatedRoute) {
    this.name = this.isComponent(this.route.snapshot.component) ? route.snapshot.component : null
    console.log(this.name.name) 
  }

  ngOnInit(): void {
  }
  Archive(): void {
    console.log(this.childMessage)
    this.not.archiveNote(this.childMessage.noteId).subscribe((result: any) => console.log(result))
  }
  OnDelete() :void{
    console.log(this.childMessage)
    this.not.trashNote(this.childMessage.noteId).subscribe((result:any)=>console.log(result))
  }
  OnDeleteForever(){
    console.log(this.childMessage)
    this.not.DeleteNote(this.childMessage.noteId).subscribe((result:any)=>console.log(result))
  }
}
