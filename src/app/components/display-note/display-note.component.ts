import { EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  message:any;
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '620px',
      data: note,
      panelClass: 'my-custom-dialog-class'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
      this.messageEvent.emit(this.message)
    });
  }
  receiveMessage(event:any) {
    this.message = event
    console.log(this.message)
    this.messageEvent.emit(this.message)
  }
}
