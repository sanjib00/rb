import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'rb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('https://api.myjson.com/bins/hytxx').subscribe(res => this.users = res);
  }

}
