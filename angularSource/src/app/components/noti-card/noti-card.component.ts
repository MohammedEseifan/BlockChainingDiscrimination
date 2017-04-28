import { Component, OnInit } from '@angular/core';
import { NotiCard } from './NotiCard';

@Component({
  selector: 'noti-card',
  templateUrl: './noti-card.component.html',
  inputs:['card'],
  styleUrls: ['./noti-card.component.css']
})
export class NotiCardComponent implements OnInit {
  public card:NotiCard;

  constructor(
  ) {  }

  ngOnInit() {
  }

}
