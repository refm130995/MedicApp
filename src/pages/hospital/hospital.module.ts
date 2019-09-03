import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospitalPage } from './hospital';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HospitalPage,
  ],
  imports: [
    IonicPageModule.forChild(HospitalPage),
    ComponentsModule
  ],
})
export class HospitalPageModule {}
