import { Component } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'
import { Observable } from 'rxjs';
import { CrudService } from './employee/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp1';
  name:String;
  email:string;
  role:string;
  organization:string;
  message:string;
  employee;
  show:boolean=false;

  constructor(public crudService:CrudService){}


  CreateEmployee(){
   let Record={};
   Record['name']=this.name;
   Record['email']=this.email;
   Record['role']=this.role;
   Record['organization']=this.organization;

   this.crudService.create_NewEmployee(Record).then(res =>{
     this.name="";
     this.email="";
     this.role="";
     this.organization="";
     console.log(res);
     this.message="Data submitted successfully";
     alert(this.message);
   }).catch(error =>{
     console.log(error);
   })
   
  }

  DeleteEmployee(record_id){
    this.crudService.DeleteEmp(record_id);
    }
  
  ListEmployees(){
    this.show=true;
     this.crudService.ListOfEmployees().subscribe(data=>{
       this.employee= data.map(e =>{
         return{
           id:e.payload.doc.id,
           name:e.payload.doc.data()['name'],
           email:e.payload.doc.data()['email'],
           role:e.payload.doc.data()['role'],
           organization:e.payload.doc.data()['organization'],
         };
       })
       console.log(this.employee);
     }
       
     )
  }
}
