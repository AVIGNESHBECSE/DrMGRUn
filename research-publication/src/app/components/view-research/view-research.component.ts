import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';
import { DeleteResearchComponent } from '../delete-research/delete-research.component';

@Component({
  selector: 'app-view-research',
  templateUrl: './view-research.component.html',
  styleUrls: ['./view-research.component.css']
})
export class ViewResearchComponent implements OnInit {
  id: any;
  researchData: any;
  report: { researchReport: any; };
 

  constructor(private route:Router,
    private researchService:ResearchPublicationService,
    private activateRoute:ActivatedRoute,
    private modalService:NgbModal) { }

  ngOnInit(): void {
    this.id=this.activateRoute.snapshot.paramMap.get('id');
    this.getResearch();
  }
  getResearch() {
    this.researchService.getById(this.id).then((data:any)=>{
      this.researchData=data;
    })
  }
goBack(){
  this.route.navigate(['/research-publication/home']); 
}
update(){
  
  
  this.route.navigate(['/research-publication/edit',this.id]); 

}
delete(){

  

  const modalRef = this.modalService.open(DeleteResearchComponent, { size: 'md',backdrop:'static' });
  modalRef.componentInstance.value=this.id;
  modalRef.componentInstance.reload.subscribe(() =>{
    this.reload(this.id);
  }); 
}
  reload(id: any) {
   this.getResearch();
  }
  print(){
    // this.route.navigate(['research-publication/client/printResearch/'+this.id]);
   this.route.navigate([]).then(result => {  window.open('research-publication/client/printResearch/'+this.id, '_blank'); });
// window.print()

  }
}
