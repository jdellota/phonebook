import { Component } from '@angular/core';
import { Contact } from 'src/app/interface/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts:Contact[]=[];
  newName:String=''
  newPhone:String='';
  selectedContact?:Contact;
  addContact(){
    this.contacts.push({
      name: this.newName,
      phoneNumber: this.newPhone
    })
    this.newName='';
    this.newPhone='';
  }
  deleteContact(contact:Contact){
    
    this.contacts.splice(this.contacts.indexOf(contact), 1)
  }

}
