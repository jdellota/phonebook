import { Injectable } from '@angular/core';
import { Contact } from '../interface/contact';
import {CONTACTS} from '../mockData/mockContacts';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  contacts=CONTACTS;
  constructor() { }
  getContacts(): Observable<Contact[]>{
    return of(this.contacts)
  }

  addContact(newName:String, newPhone:String){
    var exists:number=this.contactExists(newName,newPhone);
    if(-1==exists){
      this.contacts.push({
        name: newName,
        phoneNumber: newPhone
      }) 
    }
    else{
      this.contacts[exists]={
        name: newName,
        phoneNumber: newPhone
      }
    }


  }
  contactExists(newName:String, newPhone:String):number{
    var exists:number=-1;
    this.contacts.forEach(contact => {
      if(contact.name==newName||contact.phoneNumber==newPhone){
          exists=this.contacts.indexOf(contact);
      }
    });
    return exists;
  }
  // deleteContact(contact:Contact){
    
  //   this.contacts.splice(this.contacts.indexOf(contact), 1)
  // }
}
