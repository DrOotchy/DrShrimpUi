import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InventoryService } from '../../../services/inventory.service';
@Component({
  selector: 'app-new-inventory',
  templateUrl: './new-inventory.component.html',
  styleUrls: ['./new-inventory.component.css']
})
export class NewInventoryComponent implements OnInit {
  public itemForm;
  public allInvent = []
  public brands = []
  constructor(private formBuilder: FormBuilder, private inventoryService: InventoryService) { }
  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl(''),
      altName: new FormControl(''),
      category: new FormControl(''),
      unit: new FormControl(''),
      brand: new FormControl('')
    });
    this.getBrands()
    this.getALLCategories()

  }

  onSubmit() {
    return this.inventoryService.addNewItem(this.itemForm.value)
      .subscribe(data => alert(data.inventoryItem.name + 'Added Successfully'));
  }
  getALLCategories(){
    return this.inventoryService.getInventCategories()
    .subscribe(data => this.allInvent = data);
  }
  getBrands(){
    return this.inventoryService.getBrands()
    .subscribe(data => this.brands = data)
  }
}
