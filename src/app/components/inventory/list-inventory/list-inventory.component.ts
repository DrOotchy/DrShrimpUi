import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {
  searchForm
  public allInvent = []
  view
  constructor(private inventoryService: InventoryService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('')
    })
    this.getALLCategories()
  }
  getALLCategories(){
    return this.inventoryService.getAllInventoryItems()
    .subscribe(data => this.allInvent = data);
  }
  search() {
    return this.inventoryService.searchName(this.searchForm.value)
      .subscribe(data => this.view = data);
  }
}
