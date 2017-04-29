import { Component, OnInit } from '@angular/core';
import { NotiCard } from '../noti-card/NotiCard';
import { User } from '../UserModel';
import { UserService } from '../UserService';

@Component({
  selector: 'client',
  templateUrl: './clientPage.component.html',
  // providers:[UserService],
  styleUrls: ['./clientPage.component.css']
})
export class ClientComponent implements OnInit {
	cards= [
	new NotiCard("http://copicola.com/images/cool-picture/cool-picture-5.jpg","Mo","Hey yo","This is a desc"),
	new NotiCard("https://scontent.fybz1-1.fna.fbcdn.net/v/t1.0-0/p206x206/1925324_935769069776044_4189505762596065532_n.jpg?oh=21dd9ef302953f9ab58b20a2e26cb43b&oe=59814F4E","Denys Linkov","Interview","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eros augue, lacinia eu diam sed, placerat vulputate nisi. Mauris ut sodales nibh, ut fermentum neque. Pellentesque elit elit, congue id lacinia sed, iaculis nec dui. Vestibulum eu ipsum molestie, maximus magna sed, auctor lacus. Aenean ex dui, sodales id rutrum ut, pharetra vel sem. Duis nec ipsum sit amet est lobortis malesuada at ut ex. Mauris imperdiet vulputate augue. Nulla non ante gravida, gravida nisl ac, consequat enim. In consequat, urna et ornare congue, urna risus commodo neque, nec ullamcorper sapien mi et justo. Donec a sollicitudin justo. Aenean quis."),
	// new NotiCard("http://images.clipartpanda.com/weed-symbol-wallpaper-anny-s-weed-hi.png","Anubhav","Yo Dawg","It was just 420, you wanna blaze it? hit me up for a lit time brrrruhhhh."),
	new NotiCard("https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg","MIT Person","More infos?","I liked your team I just wanted more infos if possible. Many thank!"),
	];
	users:User[];

	user = new User("https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", "Mohammed Eseifan","https://www.google.ca","https://www.github.com","(905) 897-2186","Toronto");
  //  constructor(private userService : UserService){}
   constructor(){}

  ngOnInit(){
    // this.userService
    //   .getAll()
    //   .subscribe(p => this.users = p);
		// 	this.user=this.users[0];
  }

}
