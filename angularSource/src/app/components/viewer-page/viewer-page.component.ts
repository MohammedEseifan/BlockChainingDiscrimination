import { Component, OnInit } from '@angular/core';
import {Resume} from '../ResumeModel';
@Component({
  selector: 'viewerpage',
  templateUrl: './viewer-page.component.html',
  styleUrls: ['./viewer-page.component.css']
})
export class ViewerPageComponent implements OnInit {
resume:Resume = new Resume(["Python","Java", "Knitting", "Talking"],"MIT",4.0,"USA", "John Smith");
  constructor() { }

  ngOnInit() {
  }

}
