import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'https://guiamedica.herokuapp.com/api';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    console.log(params);
    if (!reqOpts) {
      reqOpts = {
       };
    }else{
      if(localStorage.getItem('Authorization')){
      reqOpts = {
          headers : new HttpHeaders({'Authorization':localStorage.getItem('Authorization')}),
        }
      }
    }

    
    
    // Query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams(); 
      for (let k in params) {
        if(params[k] != undefined){
          reqOpts.params = reqOpts.params.append(k, params[k]);
        }
      }
    } 
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }
}
