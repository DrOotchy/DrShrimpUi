import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {
  searchNameForm
  public allInvent = []
  view
  grandTotal
  constructor(private inventoryService: InventoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllNCount()
    this.searchNameForm = new FormGroup({
      name: new FormControl('')
    })
    this.getAllInventoryItems()
  }

  getAllInventoryItems() {
    return this.inventoryService.getAllInventoryItems()
      .subscribe(data => this.allInvent = data);
  }

  getAllNCount() {
    return this.inventoryService.getAllInventoryIn()
      .subscribe(data => {

        this.view = data.fullSchema
        this.grandTotal = data.total


      })
  }
  getitemTotal(id) {
    let total = 0
    let itemprice = this.view.filter(r => r.itemID._id === id);
    for (let i = 0; i < itemprice.length; i++) {
      total = total+ itemprice[i].price;
    }
    console.log(total)
    return total
  }
  searchName() {
    return this.inventoryService.searchName(this.searchNameForm.value)
      .subscribe(data => this.view = data);
  }
}
