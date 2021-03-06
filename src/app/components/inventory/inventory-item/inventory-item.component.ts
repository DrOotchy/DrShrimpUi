import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  @Input() item: any;

  message = {
    name: String,
    id: String
  }
  stock: [];
  itemTotal;
  amountIN;
  showMe: boolean = false
  showStock: boolean = false

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
  }
  toggleAdd(item) {
    this.message.id = item._id
    this.message.name = item.name
    this.showStock = false
  
    this.showMe = true
  }
  toggleStock(item) {
    this.getStockID(item._id)
    this.showMe = false
   
    this.showStock = true
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
}
