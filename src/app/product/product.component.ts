import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'rb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    
    name:string = '';
    description:string = '';
    products = [];

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getProducts();
  }

    createProduct() {
        var data = {name: this.name, description: this.description};

        this._userService.saveProduct(data).subscribe(
                res => {
                console.log(res);
                this.products.unshift(res);
                    this.name = '';
                    this.description = '';
            }, err => console.log(err),
            () => console.log('done loading users')
        );
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
