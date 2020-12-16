import { Component, OnInit } from '@angular/core';
import {OrgService } from './org.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent  {
  title = 'angularapp1';
  name:String;
  size:number;
  message:string;
  description:string;
  org;
  show:boolean=false;

  constructor( public orgService: OrgService) { }

  AddOrganization(){
    let Record={};
    Record['name']=this.name;
    Record['size']=this.size;
    Record['description']=this.description;
   
 
    this.orgService.AddOrg(Record).then(res =>{
      this.name="";
      this.size=0;
      this.description="";
      console.log(res);
      this.message="Data submitted successfully";
      alert(this.message);
    }).catch(error =>{
      console.log(error);
    })
    
   }
 
   DeleteOrg(record_id){
     this.orgService.DeleteOrg(record_id);
     }
   
   ListOrg(){
     this.show=true;
      this.orgService.ListOrg().subscribe(data=>{
        this.org= data.map(e =>{
          return{
            id:e.payload.doc.id,
            name:e.payload.doc.data()['name'],
            size:e.payload.doc.data()['size'],
            description:e.payload.doc.data()['description'],
           
          };
        })
        console.log(this.org);
      }
        
      )
   }
 }