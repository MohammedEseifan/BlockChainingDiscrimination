import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
   public title: string;
    public image: string;
    public train: string;
    public improveTitle: string;
     public goodTitle: string;

   
  constructor() { 
    this.title = "My Resumes";
    this.image = "http://clipartsign.com/upload/2016/10/31/clipart-file-or-document-icon.png";
    this.train = "Training!";
    this.improveTitle = "Things to work on!";
    this.goodTitle = "You are doing great!"

  }

  ngOnInit() {
  }

}
