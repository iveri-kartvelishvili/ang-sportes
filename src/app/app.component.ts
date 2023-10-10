import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sportebi';
  arr1:Person [] = []
  arr3:Person [] = []
  arr2:Person [] = []

  onsubscribeclick(event:Person){
    if(event.sport == 'football'){
    this.arr1.push(event)
  }
  else if(event.sport == 'basketball'){
    this.arr2.push(event)
  }
  else {
    this.arr3.push(event)

  }
   
  }
}
