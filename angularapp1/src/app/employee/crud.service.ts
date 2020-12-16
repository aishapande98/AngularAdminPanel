import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireService:AngularFirestore) { }

  create_NewEmployee(Record){
     return  this.fireService.collection("Employee").add(Record);
  }
  ListOfEmployees(){
    return this.fireService.collection("Employee").snapshotChanges();
  }
  DeleteEmp(record_id){
   this.fireService.doc("Employee/" + record_id).delete();
  }
}
