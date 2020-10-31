import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  userForm;

  constructor(private formBuilder: FormBuilder, private customerService: CustomersService) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      mainNumber: new FormControl(''),
      alternativeNumbers: new FormControl(''),
      address: new FormGroup({
        buildingNo: new FormControl(''),
        street: new FormControl(''),
        floor: new FormControl(''),
        apartmentNo: new FormControl(''),
        specialMark: new FormControl(''),
        area: new FormControl(''),
        district: new FormControl('')
      })
    })
}

  onSubmit() {
    return this.customerService.newCustomer(this.userForm.value)
      .subscribe(data => alert(data.name + 'Added Successfully' ))
  }
}
