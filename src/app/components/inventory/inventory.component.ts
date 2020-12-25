import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public cat
  public view
  public allInvent = []
  public searchNameForm

  showMe: boolean = false
  showStock: boolean = false
  showNewItem: boolean = true
  showNewBrand: boolean = false
  searchForm
  

  constructor(private inventoryService: InventoryService, private formBuilder: FormBuilder) { }
  message = {
    name: String,
    id: String
  }
  stock: [];
  itemTotal;
  amountIN;
  async ngOnInit(): Promise<any> {
    this.searchNameForm = new FormGroup({
      name: new FormControl('')
    })
    this.getALLItems()
    this.getALLCategories()
  }
  toggleAdd(item) {
    this.message.id = item._id
    this.message.name = item.name
    this.showStock = false
    this.showNewItem = false
    this.showMe = true
  }
  toggleStock(item) {
    this.getStockID(item._id)
    this.showMe = false
    this.showNewItem = false
    this.showStock = true
  }
  toggleNewItem(){
    this.showMe = false
    this.showStock = false
    this.showNewItem = !this.showNewItem
  }
  toggleNewBrand(){
    this.showMe = false
    this.showStock = false
    this.showNewItem = false
    this.showNewBrand = true
  }
  async getALLItems() {
    return this.inventoryService.getAllInventoryItems()
      .subscribe(data => {
        this.allInvent = data
        this.view = data
      });
  }
  getView(id) {
    this.view = this.allInvent.filter(r => r.category._id === id);

  }
  getStockID(id){
    return this.inventoryService.getInventoryInID(id)
    .subscribe(data => {
      console.log(data)
      this.stock = data.fullSchema;
      this.itemTotal = data.total
      this.amountIN = data.amount
    })
  }

  getALLCategories() {
    return this.inventoryService.getInventCategories()
      .subscribe(data => this.cat = data);
  }

  searchName() {
    return this.inventoryService.searchName(this.searchNameForm.value)
      .subscribe(data => this.view = data);
  }
}
