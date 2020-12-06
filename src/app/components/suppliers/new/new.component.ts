import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliers.service';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  suppliers = {
    name: '',
    mobile: '',
    location: '',
    group: ''
  }
  categories = [];
  constructor(private supliersService: SuppliersService, private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventCat()
  }
  newSuplier(formObj) {
    console.log(formObj);
    this.supliersService.createSupplier(formObj)
    .subscribe(data => alert(data.name + 'Added Successfully' ))
  }
  getInventCat() {
    this.inventoryService.getInventCategories()
      .subscribe(res => this.categories = res)
  }

}
