import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Api } from '../api/api';
import Swal from 'sweetalert2'
import { LoadingController } from 'ionic-angular';

@Injectable()
export class ListProvider {
  constructor(public api: Api, private loadingCtrl: LoadingController) { }

  GetOcuppations( page:Number = 0) {
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    })
    loading.present();
    let seq = this.api.get('speciality?page=' + page, null, true).share();
    seq.subscribe((res: any) => {
      loading.dismiss();
      console.log(res);
      
    }, err => {
      console.error('ERROR', err);
      loading.dismiss();
    });

    return seq;
  }

  GetDoctorsBy( page:Number = 0, hospital:any = [], speciality:any = [] ){
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    })
    loading.present();
    let params = {
      'page':page,
      'hospital':hospital._id,
      'speciality': speciality._id
    }

 
    let seq = this.api.get('doctor/all', params, true).share();
    seq.subscribe((res: any) => {
      loading.dismiss();
      console.log(res);
      
    }, err => {
      console.error('ERROR', err);
      loading.dismiss();
    });

    return seq;
  }

  GetHospitals( page: Number = 0){
    let loading = this.loadingCtrl.create({
      content: 'Por favor espere...'
    })
    loading.present();
    let params = {
      'page':page
    }
    let seq = this.api.get('hospital', params, true).share();
    seq.subscribe((res: any) => {
      loading.dismiss();
      console.log(res);
      
    }, err => {
      console.error('ERROR', err);
      loading.dismiss();
    });

    return seq;
  }
 
}
