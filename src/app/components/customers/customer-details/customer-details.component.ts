import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  @Input() item:any
  constructor(private customerService: CustomersService, private route: ActivatedRoute) { }
  customerID = this.route.snapshot.params.id;
  message = {
    model: 'Competitors',
    id: this.customerID
  }
details = false
  ngOnInit(): void {
   // this.getCustomerDertails();
  }
  getCustomerDertails() {
    return this.customerService.getCustomerID(this.customerID)
      .subscribe(res => this.item = res)
  }
  showDetails(){
    this.details = !this.details
  }
}
