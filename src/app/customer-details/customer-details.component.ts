import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit,OnChanges {
  @Input() pData:any
  detail:any
  mergeData:any
  constructor(private user:DataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("data in tetails",this.pData);
    
    this.detail=this.user.details
    let index=this.detail.map((item:{id:any;})=>{
      return item.id
    }).indexOf(this.pData.id)
    console.log(index);
    console.log(this.detail[index]);

    this.mergeData={...this.pData,...this.detail[index] }
    console.log(this.mergeData);
    
  }

  ngOnInit(): void {
    
    
    
  }

}
