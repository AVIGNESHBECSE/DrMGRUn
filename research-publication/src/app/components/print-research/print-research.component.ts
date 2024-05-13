import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';

@Component({
  selector: 'app-print-research',
  templateUrl: './print-research.component.html',
  styleUrls: ['./print-research.component.css']
})
export class PrintResearchComponent implements OnInit {
  id: string;
  researchPublication: any;

  constructor( private activateRoute:ActivatedRoute,
    private researchService:ResearchPublicationService ) { }
  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.getResearch();
  }
  getResearch() {
    this.researchService.getById(this.id).then((data:any)=>{
      this.researchPublication=data;
    })
  }
  print(){
    window.print();
  }
}
