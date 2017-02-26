import { Component, OnInit } from '@angular/core';
import { MatdataService } from './../shared/service/matdata.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Subscription }   from 'rxjs/Subscription';
import { Matdata } from './../shared/service/matdata.model';


var Rx = require('rxjs/Rx');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private subscription: Subscription;
  private arDataList:Array<Matdata>;
  private arViewList:Array<Matdata>;
  private sortByCat:string;
  private txtTag:string;
  private descOrder:boolean;
  constructor(private matservice:MatdataService) { 
      this.arDataList = new Array<Matdata>();
      this.arViewList = new Array<Matdata>();
      this.sortByCat = "updated";
      this.txtTag = "";
      this.descOrder = true;
  }

  ngOnInit() {
    this.startPolling();
    this.observeChange();
  }

 startPolling():void{
    var source = Rx.Observable
    .interval(60000)
    .repeat();
    var subscription = source.subscribe(
      (x) =>  this.getServiceData(),
      (err) => console.log('Error: ' + err),
      () => {}
     );
    
  }

  getServiceData():void{
    var ref = this;
    this.matservice.getServiceData()
            .subscribe(
                (value) =>{ 
                    ref.arDataList.push(value);
                    ref.observeChange();
                },
                (error: any) => {
                  console.log("Server error.")
                }
        );
  }

  sortList(by:string):void{
    this.arViewList.sort(function(o1:Matdata,o2:Matdata){
      var n1:number;
      var n2:number;
      switch(by){
        case "lastexecuted" :
            n1 = o1.datetimes.lastexecuted .getTime();
            n2 = o2.datetimes.lastexecuted.getTime();
        break;
        case "updated":
            n1 = o1.datetimes.updated.getTime();
            n2 = o2.datetimes.updated.getTime();
        break;
        case "id":
            n1 = o1.id;
            n2 = o2.id;
        break;
        case "price":
            n1 = o1.price;
            n2 = o2.price;
        break;
      }
    
      if (n1>n2)    return -1;
      else if(n1<n2) return  1;
      else return  0;
    });

    if(this.descOrder) {
      this.arViewList.reverse();
    }
  }

  onSortingChange(val:String):void{
      switch(val){
        case "updated_a-z":
          this.sortByCat = "updated";
          this.descOrder = true;
        break
        case "updated_z-a":
          this.sortByCat = "updated";
          this.descOrder = false;
        break
        case "lastupdated_a-z":
          this.sortByCat = "lastupdated";
          this.descOrder = true;
        break
        case "lastupdated_z-a":
          this.sortByCat = "lastupdated";
          this.descOrder = false;
        break
      }
      //this.sortByCat = "price";
      this.sortList(this.sortByCat);
  }

  onTagEnter(val:string):void{
    this.txtTag = val;
  }

  observeChange():void{
    this.arViewList = [];
    var ref = this;
    var sourcelist = Observable.from<Matdata>(this.arDataList)
    .filter(value=> value.tags.toString().indexOf(ref.txtTag) > -1);
    this.subscription = sourcelist.subscribe(
      (value) => {
          this.arViewList.push(value);
      },
      (error) => {

      },
      () => {
        this.sortList(this.sortByCat);
      }

    );
  }


}
