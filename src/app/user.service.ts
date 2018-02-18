import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class UserService {

  private products = new BehaviorSubject([]);
  //product = this.products.asObservable();

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

  deleteProduct(id) {
    return this.http.delete('http://test-api.com/api/products/' + id, httpOptions);
  }

  changeProduct(product) {
    this.products.next(product);
  }

  testProducts() {
    return this.products.asObservable();
  }

}
