import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'datafield',
  inputs:['textToDisplay'],
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.css']
})
export class DataFieldComponent implements OnInit {
   public textToDisplay:string;
  constructor() { }

  ngOnInit() {
  }
  onDrop(data: any) {
    console.log('dropped:', data)
  }
}
