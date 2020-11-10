import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  public allInvent = []
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getALLCategories()
  }
  getALLCategories(){
    return this.inventoryService.getAllInventoryItems()
    .subscribe(data => this.allInvent = data);
  }
}
