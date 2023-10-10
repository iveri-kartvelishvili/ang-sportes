import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Event } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @Output()
  addPersonEmitter:EventEmitter<Person> = new EventEmitter()
  myp:Person = new Person()
  info:string = ""

  ngOnInit(): void {
  }
  onSaveClick(){
    if(this.myp.name.length >0 &&
       this.myp.lastname.length >0 &&
        this.myp.sport.length > 0){
    this.addPersonEmitter.emit(this.myp)
    this.myp = new Person()
    this.info = " "
  }else{
    this.info = "Fill out the information"
  }

  }

}
