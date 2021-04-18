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
  dateFilterForm
  dateFilterResult

  showFilter= false
  showALL =true
  constructor(private inventoryService: InventoryService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllNCount()
    this.searchNameForm = new FormGroup({
      name: new FormControl('')
    })
    this.getAllInventoryItems()
    this.dateFilterForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
    
  }

  getAllInventoryItems() {
    return this.inventoryService.getAllInventoryItems()
      .subscribe(data =>{ this.allInvent = data, console.log(this.allInvent)});
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
    return total
  }

  searchName() {
    return this.inventoryService.searchName(this.searchNameForm.value)
      .subscribe(data => this.view = data);
  }
  
  filterdate() {
    return this.inventoryService.getInventoryByDate(this.dateFilterForm.value)
    .subscribe(data => {
      this.dateFilterResult = data
    this.view = this.dateFilterResult
    let filterTotal = 0
    for (let i = 0; i < data.length; i++) {
      filterTotal = filterTotal+ data[i].price;
    }
    this.showALL=false
    this.showFilter=true
    this.grandTotal = filterTotal
    })
  }
}
