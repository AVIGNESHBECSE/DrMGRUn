import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';
import { CreateResearchComponent } from '../create-research/create-research.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditResearchComponent } from '../edit-research/edit-research.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  researchDatas: any;
  researchExportExcel: any;
  filters: any;
  curPos: number;
  pagination: any;
  start: number;
  researchCreate:any;
  scholar:any;
  
  constructor(public researchService:ResearchPublicationService,
    private router:Router,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getResearch();
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
  researchExport(){
this.researchService.getResearchExport().then((data:any)=>{
  this.researchExportExcel=data;
  
})
  }
  researchPagination(start){
    this.curPos=start;
    this.researchService.getResearchPagination(this.curPos).then((data:any)=>{
      this.researchDatas=data;
    })
  }
 
  searchByName(filterName){
this.researchService.search(filterName).then((data:any)=>{
  this.researchDatas=data;
})
  }
  viewTechnical(id){
    this.router.navigate(['/research-publication/view',id]); 
  }

  researchScholar(){
    const modalRef=this.modalService.open(CreateResearchComponent,{size:'xl'});
    modalRef.componentInstance.value=this.researchCreate;
    modalRef.componentInstance.reload.subscribe(()=>{
    this.reload();
    });
    
    //this.modalService.open(CreateResearchComponent,{size:'xl'});
  }
  reload(){
    this.getResearch();
  }
  researchScholaredite(scholar){
    const ResearchScholar=this.modalService.open(EditResearchComponent,{size:'xl'});
    ResearchScholar.componentInstance.value=scholar;
    ResearchScholar.componentInstance.reload.subscribe(()=>{
    this.reload();
    });
    
    //this.modalService.open(CreateResearchComponent,{size:'xl'});
  }
  print(id){
    // this.route.navigate(['research-publication/client/printResearch/'+this.id]);
   this.router.navigate([]).then(result => {  
    window.open('research-publication/client/printResearch/'+id.id, '_blank'); 
  });
// window.print()

  }
  
  // getEdit(po){

  //   const modalRef = this.researchService.open( PoEditPopupComponent, { size:"xl"});
  //  modalRef.componentInstance.value=po;
  //  modalRef.componentInstance.reload.subscribe(() =>{
  //  this.reload();
  //   });
  //  } 
}