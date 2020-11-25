import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  searchPhoneForm;
  searchNameForm;
  public name;
  public searchCustomers = [];
  public allCustomers = [];

  constructor(private formBuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.searchPhoneForm = new FormGroup({
      mainNumber: new FormControl('')
    })
    this.searchNameForm = new FormGroup({
      name: new FormControl('')
    })
    this.getAllCustomers()
  }
  getAllCustomers() {
    return this.customerService.getCustomers()
      .subscribe(data => this.allCustomers = data)
  }

  searchPhone() {
    return this.customerService.searchPhone(this.searchPhoneForm.value)
      .subscribe(data => this.searchCustomers = data)
  }
  searchName() {
    return this.customerService.searchName(this.searchNameForm.value)
      .subscribe(data => this.searchCustomers = data)
  }
}
