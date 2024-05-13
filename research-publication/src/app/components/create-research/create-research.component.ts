import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/services/DepartmentService';
import { DesignationService } from 'src/services/DesignationService';
import { FacultyDepartmentService } from 'src/services/FacultyDepartmentService';
import { FacultyService } from 'src/services/FacultyService';
import { FileUploadService } from 'src/services/FileUploadService';
import { ResearchPublicationService } from 'src/services/ResearchPublicationService';



@Component({
  selector: 'app-create-research',
  templateUrl: './create-research.component.html',
  styleUrls: ['./create-research.component.css']
})
export class CreateResearchComponent implements OnInit {

  
  facultys: any;
  department: any;
  designationList:any;
  file:File =null;
  fileData: any;
  researchDatas: any;
  departmentList: any;
  departmentName: any;
  showText: boolean;
  otherName: any;
  fileAttachment:boolean=false;
  showUploadButton: boolean;
  showLabel: boolean;
  deleteFileAttach: any;
  fileLabel: any=[];
  deleteFile: boolean;
  addTag: boolean;
  attachShow: boolean;
  increment=0;
  createFile: any;
  journal: any=[];
  newFileUpload:boolean=true;
  @Input() value:any;
  @Output("reload") reload=new EventEmitter;
  // public journalAttachment:any =[{}];
  constructor(private facultyService:FacultyService,
    private facultyDepartmentService:FacultyDepartmentService,
    private researchService:ResearchPublicationService,
    private desinationService:DesignationService,
    private fileUpload:FileUploadService,
    private departmentService:DepartmentService,
    private toasterService:ToastrService,
    private router:Router,
    private activemodel:NgbActiveModal) { }
create={
  name:'',
  departmentId:'',
  facultyId:'',
  facultyName:'',
  departmentName:'',
  designation:'',
  duration:'',
  universityName:'',
  cumulativeSJRValue:'',
 journalPublication:null,
  journalAttachment:[{
    title:'',
    publishedLink:'',
    
    fileAttach:{
versionId:'',
fileKey:''
    },
   

  }],
  conferencePublication:null,
  firstAuthorTotal:null,
  cumulativeImpactFactor:null,
  highestImpactFactor:null,
  totalJournalHIndex:null,
  highestJournalHIndex:null,
}
  ngOnInit(): void {
    this.getFaculty();
    this.getdesignation();
    // this.fileAttachment={};
    this.createFile=
      {
        title:'',
        publishedLink:'',
        
        fileAttach:{
    versionId:'',
    fileKey:''
        },
       
    
      }
    
    
  }
  getDepartmentId(department){

//     this.create.departmentName=this.department.name;
// this.create.departmentId=this.department.id;
    this.facultyDepartmentService.getFacultyDepartmentEdit(department.id).then((data:any)=>{
this.departmentList=data;
this.create.departmentName=this.departmentList.name;
this.create.departmentId=this.departmentList.id;
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
    
    this.create.facultyName=faculty.name;
    this.create.facultyId=faculty.id;
    this.facultyDepartmentService.getFacultyDepartment(faculty.id).then((data:any)=>{
this.department=data;

    })
  }
  onSubmit(form,valid){
  
    if(valid){
      if(this.create.universityName != "Dr. M.G.R. EDUCATIONAL AND RESEARCH INSTITUTE UNIVERSITY"){

      this.create.universityName=this.otherName;
      // this.create.journalAttachment=this.journal;
      this.researchService.create(this.create).then((data:any)=>{
        this.researchDatas=data;
        this.reload.emit();
       
        //this.router.navigate(['/research-publication/home']); 
      })
    }
    else
    {
      this.researchService.create(this.create).then((data:any)=>{
        this.researchDatas=data;
        this.router.navigate(['/research-publication/home']); 
        this.reload.emit();
       // this.createReport();
      })
    }
    //this.createReport();
    this.activemodel.close();
    this.toasterService.success("Successfully Created");

    }
   
   
   
  }
 
  
  other(type){
    if(type == "Others"){
      this.showText=true;
    }
  }
  got(institute){

    
    this.otherName=institute;
    // this.create.universityName=institute;
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
    

    this.fileUpload.uploadFileData(this.file).then((data:any)=>{
      // this.showUploadButton=true;
      this.fileData=data;
      this.createFile.fileAttach.fileKey=this.fileData.fileKey;
      this.createFile.fileAttach.versionId=this.fileData.versionId;
     this.journal.push(this.createFile);
     this.create.journalPublication=this.journal.length;
     this.create.journalAttachment=this.journal;
      this.showUploadButton=false;
      this.fileAttachment=true;
      this.deleteFile=false;
      
     
    })
        this.newFileUpload=false;
      }
  



 

  add(){
   

    this.createFile=
      {
        title:'',
        publishedLink:'',
        
        fileAttach:{
    versionId:'',
    fileKey:''
        },
       
    
      }
    
    // this.fileData='';
    this.newFileUpload=true;
    this.fileAttachment=false;
  } 
  
  removeJournalAttachment(index,each){
   
        this.journal.splice(index,1);
        this.fileUpload.AssignmentdeleteFile(each.fileAttach.versionId,each.fileAttach.fileKey).then((data:any)=>{
          this.deleteFileAttach=data;
          this.create.journalPublication=this.journal.length;
//           if(this.create.journalPublication == 0){
//             this.addTag = false;
// this.attachShow=true;
//           }
  });

  if(this.journal.length == 0){
    this.add();
  }
  
  }

  numericOnly(numberOnlyEvent): boolean {    
    let patt = /^([0-9.])$/;
    let result = patt.test(numberOnlyEvent.key);
    return result;
}
close(){
  this.activemodel.close();
}



// createReport()
// {

//   this.researchService.create(this.value).then((data:any)=>{
//     this.researchDatas=data;
//     // this.reload.emit();
//  this.activemodel.close(this.createFile);
//  this.toasterService.success("Successfully Created"); 
//  this.router.navigate(['/research-publication/home']); 


// })
// }


}

