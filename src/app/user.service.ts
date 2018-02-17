import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://api.myjson.com/bins/hytxx');
  }

  getProducts() {
    return this.http.get('http://test-api.com/api/products');
  }

  saveProduct(data) {
    return this.http.post('http://test-api.com/api/products', data, httpOptions);
  }

}
