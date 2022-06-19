import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  public usuario : Contact;

  constructor() { 
    this.usuario = new Contact("", "", "");
  }

  ngOnInit(): void {}
  OnSubmit(form: any){
    form.reset("formContacto"); 
    console.log("evento lanzado");
    console.log(this.usuario);

  }

}
