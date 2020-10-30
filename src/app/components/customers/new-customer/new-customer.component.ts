import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    this.userForm = this.formBuilder.group({
      name: [''],
      mainNumber: [''],
      alternativeNumbers:[''],
      buildingNo: [''],
      street: [''],
      floor: [''],
      apartmentNo: [''],
      specialMark: [''],
      area:[''],
      district:['']
    });


  }

    onSubmit(){
      return this.customerService.newCustomer(this.userForm.value)
      .subscribe(data => console.log('response', data))
    }
}
