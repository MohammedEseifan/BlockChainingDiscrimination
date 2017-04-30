import { Component, OnInit } from '@angular/core';
import {Resume} from '../ResumeModel';

@Component({
  selector: 'resumepage',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  resume:Resume = new Resume(["Python","Java", "Underwater Basketweaving", "Releasing tax returrns"],"MIT",4.12,"USA", "John Cena");
  constructor() { }

  ngOnInit() {
  }

  onLikeDrop(data:any){
    document.getElementsByClassName('likeBody')[0].innerHTML+="<ul>"+data+"</ul>";
   
  }
  onDislikeDrop(data:any){
    document.getElementsByClassName('dislikeBody')[0].innerHTML+="<ul>"+data+"</ul>";
   
  }
}