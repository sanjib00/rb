import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'rb-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products:any = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._userService.getProducts().subscribe(
            res => {
          console.log(res);
          this.products = res
        }, err => console.log(err),
        () => console.log('done loading users')
    );
  }

}
