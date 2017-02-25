import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Matdata } from './matdata.model';

@Injectable()
export class MatdataService {

  private baseUrl = 'http://localhost:3000/';
  constructor(private http: Http) { }

  getServiceData():Observable<Matdata>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers, withCredentials: true }); 
     const url = `${this.baseUrl}`;
     return this.http.get(this.baseUrl,options)
            .map(this.extractData)
            .do(data => data)
            .catch(this.handleError);
  }

   private extractData(response: Response) {
       var o:Matdata = response.json() as Matdata;
       o.datetimes.lastexecuted = new Date(o.datetimes.lastexecuted);
       o.datetimes.updated = new Date(o.datetimes.updated );
       return o;
    }

    private handleError(error: Response): Observable<any> {
        return Observable.throw(false);
    }

   

}