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


  showNewItem: boolean = true
  showNewBrand: boolean = false
  searchForm
  

  constructor(private inventoryService: InventoryService, private formBuilder: FormBuilder) { }
  message = {
    name: String,
    id: String
  }

  async ngOnInit(): Promise<any> {
    this.searchNameForm = new FormGroup({
      name: new FormControl('')
    })
    this.getALLItems()
    this.getALLCategories()
  }

  toggleNewItem(){
  
    this.showNewBrand = false
    this.showNewItem = !this.showNewItem
  }
  toggleNewBrand(){
  
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


  getALLCategories() {
    return this.inventoryService.getInventCategories()
      .subscribe(data => this.cat = data);
  }

  searchName() {
    return this.inventoryService.searchName(this.searchNameForm.value)
      .subscribe(data => this.view = data);
  }
}
