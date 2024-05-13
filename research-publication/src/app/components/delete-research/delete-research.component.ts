import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';

@Component({
  selector: 'app-delete-research',
  templateUrl: './delete-research.component.html',
  styleUrls: ['./delete-research.component.css']
})
export class DeleteResearchComponent implements OnInit {

  @Input() value:any;
  // @Output('reload') reload=new EventEmitter();
  
  key: string;
  deletePeoData: any;
  public yes = true;
  public no = false;
  
  deleteData:any;
  id: any;


  constructor(public activeModal :NgbActiveModal,
    private researchService:ResearchPublicationService, 
    private toasterService:ToastrService,
    private activateRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    // this.id=this.activateRoute.snapshot.paramMap.get('data'); 
  }


  close() {
    this.activeModal.close(this.yes);

  }


  deletePeoReport()
{

  this.researchService.delete(this.value).then((data:any)=>{
    this.deleteData=data;
    // this.reload.emit();
 this.activeModal.close(this.no);
 this.toasterService.success("Successfully Deleted"); 
 this.router.navigate(['/research-publication/home']); 

})
}
}