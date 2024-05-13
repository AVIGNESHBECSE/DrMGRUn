import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { DesignationService } from 'src/services/DesignationService';
import { FacultyDepartmentService } from 'src/services/FacultyDepartmentService';
import { FacultyService } from 'src/services/FacultyService';
import { FileUploadService } from 'src/services/FileUploadService';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';

@Component({
  selector: 'app-edit-research',
  templateUrl: './edit-research.component.html',
  styleUrls: ['./edit-research.component.css']
})
export class EditResearchComponent implements OnInit {
  @Input() value:any;
  @Output('reload') reload=new EventEmitter();
 
  id: any;
  reseachData: any;
  update: any;
  updatedResearch: any;
  designationList: any;
  facultys: any;
  department: any;
  departmentList: any;
  showText: boolean;
  otherName: any;
  file: any;
  showUploadButton: boolean;
  fileData: any;
  deleteFileAttach: any;
  fileAttachment: boolean=false;
  fileLabel: any=[];
  deleteFile: boolean;
  increment=0;
  newDataToAdd:any;
  updatedResearchFile: any;
  newFileUpload: boolean;
  


  constructor(private activateRoute:ActivatedRoute,
    private researchService:ResearchPublicationService,
    private fileUpload:FileUploadService,
    private desinationService:DesignationService,
    private facultyService:FacultyService,
    private facultyDepartmentService:FacultyDepartmentService,
    private router:Router,
    private config:NgbModalConfig,  
    private activemodel:NgbActiveModal  ) { }

  ngOnInit(): void {
    this.update=this.value;
    this.config.backdrop=false;
    this.config.keyboard=false;
    //this.id=this.activateRoute.snapshot.paramMap.get('data');
    // this.getResearch();
    // this.update={
      
    // }
    this.getFaculty();
    this.getdesignation();
  }
  getResearch() {
    this.researchService.getById(this.id).then((data:any)=>{
      this.reseachData=data;
      this.update=data;
      this.update.jor
     
    })
  }
  onSubmit(valid){
  
    if(valid){


if(this.update.universityName != "Dr. M.G.R. EDUCATIONAL AND RESEARCH INSTITUTE UNIVERSITY"){

  this.update.universityName=this.otherName;
  // this.update.journalPublication=this.update.journalAttachment.length;
      this.researchService.update(this.update).then((data:any)=>{
        this.updatedResearch=data;
        this.router.navigate(['/research-publication/view',this.id]);
        this.reload.emit(); 
      })
    }
    else
    {
    
      this.researchService.update(this.update).then((data:any)=>{
        this.updatedResearch=data;
        this.router.navigate(['/research-publication/view',this.id]); 
        
      })
    }
    this.activemodel.close();
  }
  }
  getDepartmentId(department){
    this.facultyDepartmentService.getFacultyDepartmentEdit(department.id).then((data:any)=>{
this.departmentList=data;
this.update.departmentName=this.departmentList.name;

this.update.departmentId=this.departmentList.id;
    })
  }
  getdesignation() {
    this.desinationService.getDesignation().then((data:any)=>{
      this.designationList=data;
    })
  }
  getFaculty() {
    this.facultyService.getAllFacultys().then((data:any)=>{
      this.facultys=data;
    })
  }
  getDepartmentList(faculty){
    
    this.update.facultyName=faculty.name;
    this.update.facultyId=faculty.id;
    this.facultyDepartmentService.getFacultyDepartment(faculty.id).then((data:any)=>{
this.department=data;

    })
  }

  onChange(event) {
   
    this.fileAttachment=true;
    this.file = event.target.files[0];
    this.fileLabel=this.file.name;
    this.showUploadButton=true;
    var ext = this.fileLabel.split('.').pop();
 
    // if(ext=="pdf" || ext=="docx" || ext=="doc" || ext=="ppt" || ext=="pptx"){
    //    if(this.file.size >= 10485760){
    //     event.target.value=null;
    //      alert("Only 10 MB files allowed")
       
    //     this.showUploadButton=false;
       
       
    //     this.fileAttachment=false;
    //    }
       
    //   return this.fileLabel;
    // }
    // else{
    //   event.target.value=null;
    //     alert(this.fileLabel+" "+"Not Allowed");
      
    //     this.showUploadButton=false;
    //     this.fileLabel='';
       
    //     this.fileAttachment=false;
     
    // }
    
  
 
    // this.showUploadButton=true;
this.fileUpload.uploadFileData(this.file).then((data:any)=>{
  // this.showUploadButton=true;
  this.fileData=data;
  this.newDataToAdd.fileAttach.fileKey=this.fileData.fileKey;
  this.newDataToAdd.fileAttach.versionId=this.fileData.versionId;
 
  this.showUploadButton=false;
  this.fileAttachment=true;
  this.deleteFile=false;
  
  this.update.journalAttachment.push(this.newDataToAdd);
  this.researchService.update(this.update).then((data:any)=>{
    this.updatedResearchFile=data;
    this.update.journalPublication=this.updatedResearchFile.journalAttachment.length;
    this.update.journalAttachment=this.updatedResearchFile.journalAttachment;

  })
})
    this.newFileUpload=false;

  }
//   remove(index){
   
// this.fileUpload.AssignmentdeleteFile(this.new[index].fileAttach.versionId,this.create.journalAttachment[index].fileAttach.fileKey).then((data:any)=>{
//   this.deleteFileAttach=data;
//   this.create.journalAttachment[index].fileAttach.fileKey="";
//   this.create.journalAttachment[index].fileAttach.versionId="";
//   this.deleteFile=true;
//   this.fileAttachment = false;
//   this.fileLabel[index]='';
//   this.increment=index;
// })

//   }

  other(type){
    if(type == "Others"){
      this.showText=true;
    }
  }
  got(institute){
 
    this.otherName=institute;
    // this.create.universityName=institute;
  }


  add(){
   
    this.newDataToAdd={
      title:'',
      publishedLink:'',
      
      fileAttach:{
  versionId:'',
  fileKey:''
      }
    }
    this.newFileUpload=true;
    
   this.fileAttachment=false;

  } 
  
  removeJournalAttachment(index,each){
this.update.journalAttachment.splice(index,1);
if(each.fileAttach != undefined){
  this.fileUpload.AssignmentdeleteFile(each.fileAttach.versionId,each.fileAttach.fileKey).then((data:any)=>{
    this.deleteFileAttach=data;
    this.researchService.update(this.update).then((data:any)=>{
      this.updatedResearchFile=data;
      this.update.journalPublication=this.updatedResearchFile.journalAttachment.length;

    })
})
  }
}
close(){
this.activemodel.close();
}

}