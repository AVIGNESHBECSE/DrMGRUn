import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {
  @Input() value:any;
  @Output('reload') reload=new EventEmitter();
  constructor(private activeModel:NgbActiveModal) { }

  ngOnInit(): void {
  }
  close(){
    this.activeModel.close();
  }

}
