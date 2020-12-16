import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(public fireService:AngularFirestore) { }

  
  create_NewRole(Record){
    return  this.fireService.collection("Roles").add(Record);
 }
 ListOfRoles(){
   return this.fireService.collection("Roles").snapshotChanges();
 }
 DeleteRole(record_id){
  this.fireService.doc("Roles/" + record_id).delete();
 }
}


