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
      this._userService.testProducts().subscribe(res => {
            this.products = res;
              console.log(this.products)
      });
  }

    deleteItem (id, index) {
        this._userService.deleteProduct(id).subscribe(res=> {
           this.products.splice(index, 1);
            this._userService.changeProduct(this.products);
        });
    }

}
