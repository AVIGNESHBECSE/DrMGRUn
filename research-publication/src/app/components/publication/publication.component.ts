import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalComponent } from '../journal/journal.component';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';
import { ConferenceComponent } from '../conference/conference.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  journalCreate: any;
  researchDatas: any
  start: number;
  curPos: number;
  conferenceCreate: any;

  constructor(private researchService:ResearchPublicationService, private router:Router, 
    private moduleservice:NgbModal) { }


  ngOnInit(): void {
   // this.getResearch();
  }
  getResearch() {
    if(this.start == undefined){
      this.start=0;
    }
    this.researchService.getResearchPublication(this.start).then((data:any)=>{
      this.researchDatas=data;
      this.curPos=this.start;
    })
  }
//   researchExport(){
// this.researchService.getResearchExport().then((data:any)=>{
//   this.researchExport=data;
  
// })
//   }
//   researchPagination(start){
//     this.curPos=start;
//     this.researchService.getResearchPagination(this.curPos).then((data:any)=>{
//       this.researchDatas=data;
//     })
//   }
 
//   searchByName(filterName){
// this.researchService.search(filterName).then((data:any)=>{
//   this.researchDatas=data;
// })
//   }
//   viewTechnical(id){
//     this.router.navigate(['/publication',id]); 
//   }
  config={
    backdrop:false,
    keyboard:false,
    size:"xl"
  }
  
  goToJournal(){
    const modalRef=this.moduleservice.open(JournalComponent,this.config);
    modalRef.componentInstance.value=this.journalCreate;
    modalRef.componentInstance.reload.subscribe(()=>{
    this.reload();
    });
    
    //this.modalService.open(CreateResearchComponent,{size:'xl'});
  }

  goToConference(){
    const modalRef=this.moduleservice.open(ConferenceComponent,this.config);
    modalRef.componentInstance.value=this.conferenceCreate;
    modalRef.componentInstance.reload.subscribe(()=>{
    this.reload();
    });
    
    //this.modalService.open(CreateResearchComponent,{size:'xl'});
  }
  reload() {
    this.getResearch();
  }
  // goToJournal(){
  //   //this.router.navigate([`$(pagename)`]);
  //   //this.router.navigate(['/journal']);
  //   this.router.navigate([]).then(result=>{window.open('research-publication/journal','_blank')});
  // }
  // goToConfrence(){
  //   this.router.navigate([]).then(result=>{window.open('research-publication/conference','_blank')});
  // }

}
