import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { Account_ } from '../../interface/account';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  account: Account_ = {
    email:'',
    password:''
  };
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe(() => {
      this.navCtrl.setRoot(MainPage);
    });
  }
}
