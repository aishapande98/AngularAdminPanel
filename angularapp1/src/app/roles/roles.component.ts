import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from './role-service.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {

  constructor(public roleService:RoleServiceService){}

  title = 'angularapp1';
  name:String;
  description:string;
  role:string;
  organization:string;
  message:string;
  Role;
  show:boolean=false;

  
  AddRole(){
   let Record={};
   Record['name']=this.name;
   Record['description']=this.description;
  

   this.roleService.create_NewRole(Record).then(res =>{
     this.name="";
     this.description="";
     console.log(res);
     this.message="Data submitted successfully";
     alert(this.message);
   }).catch(error =>{
     console.log(error);
   })
   
  }

  DeleteRoles(record_id){
    this.roleService.DeleteRole(record_id);
    }
  
  ListRoles(){
    this.show=true;
     this.roleService.ListOfRoles().subscribe(data=>{
       this.Role= data.map(e =>{
         return{
           id:e.payload.doc.id,
           name:e.payload.doc.data()['name'],
           description:e.payload.doc.data()['description'],
          
         };
       })
       console.log(this.Role);
     }
       
     )
  }
}

