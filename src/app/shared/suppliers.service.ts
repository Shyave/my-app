import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { HandleError } from './handleErr.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SupplierService {
    private url = 'http://trivarna.in/api/products';
    constructor( private http: Http, private errHandle: HandleError) {}

    getSuppliers(): Observable<string> {
        return this.http.get(this.url)
            .map(outPut => outPut.json())
            .catch((e: any) => Observable.throw(this.errHandle.handleError(e)));
    }
}
