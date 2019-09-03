import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMasterPage } from './list-master';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ListMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ListMasterPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
  exports: [
    ListMasterPage
  ]
})
export class ListMasterPageModule { }
