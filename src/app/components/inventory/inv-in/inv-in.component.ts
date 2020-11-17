import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { InventoryService } from '../../../services/inventory.service';
@Component({
  selector: 'app-inv-in',
  templateUrl: './inv-in.component.html',
  styleUrls: ['./inv-in.component.css']
})
export class InvINComponent implements OnInit {
  public invINForm;

  constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService, private route: ActivatedRoute) { }
  itemID = this.route.snapshot.params.id;
  ngOnInit(): void {
    this.invINForm = new FormGroup({
      amount_in: new FormControl(''),
      pricePerUnit: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
      date: new FormControl('')
    })
  }
  onSubmit() {

  }
 
}
