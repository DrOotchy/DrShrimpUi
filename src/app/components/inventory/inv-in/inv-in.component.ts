import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from '../../../services/suppliers.service';

import { InventoryService } from '../../../services/inventory.service';
@Component({
  selector: 'app-inv-in',
  templateUrl: './inv-in.component.html',
  styleUrls: ['./inv-in.component.css']
})
export class InvINComponent implements OnInit {
  @Input() childMessage: any;

  public invINForm;
  public allSupliers
  constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService, private route: ActivatedRoute,private supplierService: SuppliersService) { }
  itemID = this.route.snapshot.params.id;
  ngOnInit(): void {
    this.getSupplier();
    this.invINForm = new FormGroup({
      itemID: new FormControl(this.childMessage.id),
      amount_in: new FormControl(''),
      pricePerUnit: new FormControl(''),
      price: new FormControl(''),
      supplier: new FormControl(''),
      date: new FormControl('')
    })    
  }
  onSubmit() {
      console.log(this.itemID)
      console.log(this.childMessage.id)
      console.log(this.invINForm)
      this.inventoryService.inventoryIn(this.invINForm.value)
      .subscribe(res => alert(res.invIN.itemID + ' ' + res.message))
      this.ngOnInit()
  }
  getSupplier() {
    this.supplierService.getAllSuppliers()
    .subscribe(response => this.allSupliers = response);
  }
 
}
