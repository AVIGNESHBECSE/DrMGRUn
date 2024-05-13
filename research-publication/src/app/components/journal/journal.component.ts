import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  @Input() value:any;
  @Output('reload') reload=new EventEmitter();
  //activemodel: any;

  constructor(private activemodel:NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(){
    this.activemodel.close();
  }
}
