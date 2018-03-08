import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HandleError } from './handleErr.service';

@NgModule()
export class ProductService {
    private url = 'http://trivarna.in/api/products';
    constructor (private http: Http, private errHandle: HandleError) { }

    getProducts(): Observable<string> {
        return this.http.get(this.url)
            .map(outPut => outPut.json())
            .catch((e: any) => Observable.throw(this.errHandle.handleError(e)));
    }

    getProductDetail(id): Observable<string> {
        return this.http.get(`${this.url}/${id}`)
            .map(outPut => outPut.json())
            .catch((e: any) => Observable.throw(this.errHandle.handleError(e)));
    }
}
