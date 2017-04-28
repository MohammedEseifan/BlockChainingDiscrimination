import { Component, OnInit } from '@angular/core';
import {User} from '../UserModel';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
 export class ProfileEditComponent {

 
 	model = new User("https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "Mohammed Eseifan","https://www.google.ca","https://www.github.com","(905) 897-2186","Toronto");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}


