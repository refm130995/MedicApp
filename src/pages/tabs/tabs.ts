import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root, Tab4Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab1Title = "Especialidades";
  tab2Title = "Doctores";
  tab3Title = "Hospitales";
  tab4Title = "Perfil";
  constructor(public navCtrl: NavController) {
  }
}
