import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public allCustomers = [];
  constructor(private customerService: CustomersService) { }

  ngOnInit(): void {
    this.getAllInvoices()
  }
  getAllInvoices(){
    return this.customerService.getCustomers()
    .subscribe(data => this.allCustomers = data)
  }

}
