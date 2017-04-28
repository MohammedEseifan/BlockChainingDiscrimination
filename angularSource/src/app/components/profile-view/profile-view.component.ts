import { Component, OnInit } from '@angular/core';
import { User } from '../UserModel';

@Component({
  selector: 'profile-view',
  inputs:['user'],
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
	public user:User;
	editMode=false;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
  	this.editMode=false;
  }
}
