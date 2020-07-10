import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {
  headers = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*');

  constructor( private http: HttpClient) { }
  
  getCommerces() {
    return this.http.get( environment.ApiServices+'/commerces');
  }
  
  getCommercesLayer() {
    return this.http.get( environment.ApiServices+'/commerces/layer');
  }

  getCommercesGraph() {
    return this.http.get( environment.ApiServices+'/commerces/graph');
  }


}
