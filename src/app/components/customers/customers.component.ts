import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public msg = '';
  public name = '';
  public allCustomers = [];
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getAllInvoices()
  }
  getAllInvoices(){
    return this.customerService.getCustomers()
    .subscribe(data => this.allCustomers = data)
  }
  search(msg){
    return this.customerService.searchPhone(msg)
    .subscribe(data => this.allCustomers = data)
  }
  searchName(msg){
    return this.customerService.searchName(msg)
    .subscribe(data => this.allCustomers = data)
  }
}
