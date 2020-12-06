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

  searchForm
  constructor(private inventoryService: InventoryService,private formBuilder: FormBuilder) { }

  async ngOnInit(): Promise<any> {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    })
    this.getALLItems()
    this.getALLCategories()
  }
  async getALLItems(){
    return this.inventoryService.getAllInventoryItems()
    .subscribe(data => {
      this.allInvent = data
      this.view = data
    });
  }
  getView(id) {
    this.view = this.allInvent.filter(r => r.category._id === id);

  }
  search() {
    return this.inventoryService.searchName(this.searchForm.value)
      .subscribe(data => this.view = data);
  }

  getALLCategories(){
    return this.inventoryService.getInventCategories()
    .subscribe(data => this.cat = data);
  }
}
