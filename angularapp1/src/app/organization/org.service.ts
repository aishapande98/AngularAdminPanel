import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(public fireService:AngularFirestore) { }

  
  AddOrg(Record){
    return  this.fireService.collection("Organization").add(Record);
 }
 ListOrg(){
   return this.fireService.collection("Organization").snapshotChanges();
 }
 DeleteOrg(record_id){
  this.fireService.doc("Organization/" + record_id).delete();
 }
}