import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-tablerow',
  templateUrl: './tablerow.component.html',
  styleUrls: ['./tablerow.component.scss']
})
export class TablerowComponent implements OnInit {

  constructor() { }
  @Input()
  i:Person = new Person();

  ngOnInit(): void {
  }

}
