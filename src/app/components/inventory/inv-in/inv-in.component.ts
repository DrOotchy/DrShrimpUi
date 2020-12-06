import { Component, OnInit } from '@angular/core';
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
  public invINForm;
  public allSupliers
  constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService, private route: ActivatedRoute,private supplierService: SuppliersService) { }
  itemID = this.route.snapshot.params.id;
  ngOnInit(): void {
    this.getSupplier();
    this.invINForm = new FormGroup({
      amount_in: new FormControl(''),
      pricePerUnit: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      supplier: new FormControl(''),
      date: new FormControl('')
    })
    
  }
  onSubmit() {
    if(this.itemID != null || undefined){
      console.log(this.itemID)
    }else{
      console.log("itemID is null")

    }
console.log(this.invINForm)
  }
  getSupplier() {
    this.supplierService.getAllSuppliers()
    .subscribe(response => this.allSupliers = response);
  }
 
}
