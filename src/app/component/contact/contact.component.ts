import { Component } from '@angular/core';
import { Contact } from 'src/app/interface/contact';
import { ContactServiceService } from 'src/app/services/contact-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contacts:Contact[]=[];
  
  constructor(private contactService: ContactServiceService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    })
  }



  newName:String=''
  newPhone:String='';
  //  
  // addContact(){
  //   this.contacts.push({
  //     name: this.newName,
  //     phoneNumber: this.newPhone
  //   });
  //   this.newName='';
  //   this.newPhone='';
  // }
addContact(newName:String, newPhone:String){
  this.contactService.addContact(newName, newPhone);
}
  deleteContact(contact:Contact){
    this.contacts.splice(this.contacts.indexOf(contact), 1)
  }

}
