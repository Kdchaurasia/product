import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements OnInit{
 
  
  users:any
  select: any;
  item: boolean=false;
  constructor(private user:DataService) {}
 

  ngOnInit(): void {
    this.users=this.user.table
  }
  show(data: any){
    this.select=data
    this.item=true


  }
} 


