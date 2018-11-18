import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  responseApi : any;
  constructor(private _httpService : Http){

  }
  
  // CallApi()
  // {
  // this._httpService.get('http://sunnykapadia-001-site1.itempurl.com/home/values?input=jigar')
  // .subscribe(result => this.responseApi = result);
  // }
}



