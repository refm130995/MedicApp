import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListNamesPage } from './list-names';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ListNamesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListNamesPage),
    ComponentsModule
  ],
})
export class ListNamesPageModule {}
