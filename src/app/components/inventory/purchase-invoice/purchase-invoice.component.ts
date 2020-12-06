import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.css']
})
export class PurchaseInvoiceComponent implements OnInit {
  purchaseForm
  constructor(private inventoryService: InventoryService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.purchaseForm = new FormGroup({
      amount_in: new FormControl('')
    })
  }
  onSubmit(){
    
  }

}
