import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
 
  public allInvent = []
  constructor(private inventoryService: InventoryService) { }

  async ngOnInit(): Promise<any> {
    this.getALLCategories()
  }
  async getALLCategories(){
    return this.inventoryService.getAllInventoryItems()
    .subscribe(data => this.allInvent = data);
  }
}
