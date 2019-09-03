import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  edit: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: User) {
  }

  ionViewDidLoad() {
    this.getUser();
  }

   getUser() {
    this.service.getUser().share().subscribe((res) => {
      console.log(res);
      
    })
  }

  EditProfile(){
    this.edit = true;
  }
  SaveProfile(){
    this.edit = false;
  }
}
