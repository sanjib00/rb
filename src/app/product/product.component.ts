import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Observable} from 'rxjs/Rx';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'rb-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    
    name:string = '';
    description:string = '';
    products:any = [];

  constructor(private _userService: UserService, private meta: Meta) {
      //this.meta.addTag({ name: 'Content-Security-Policy', content: 'upgrade-insecure-requests' });
  }

  ngOnInit() {
    this.getProducts();
  }

    createProduct() {
        var data = {name: this.name, description: this.description};

        this._userService.saveProduct(data).subscribe(
                res => {
                console.log(res);
                this.products.unshift(res);
                    this._userService.changeProduct(this.products);
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
                this.products = res;
                this._userService.changeProduct(this.products);
            }, err => console.log(err),
            () => console.log('done loading users')
        );
    }

}
