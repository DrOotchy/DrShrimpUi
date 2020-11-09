import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  searchForm;
  public name;
  public searchCustomers = [];
  public allCustomers = [];
  constructor(private formBuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      mainNumber: new FormControl('')
    })
    this.getAllInvoices()
  }
  getAllInvoices() {
    return this.customerService.getCustomers()
      .subscribe(data => this.allCustomers = data)
  }

  searchName() {
    return this.customerService.searchPhone(this.searchForm.value)
      .subscribe(data => this.searchCustomers = data)
  }
}
