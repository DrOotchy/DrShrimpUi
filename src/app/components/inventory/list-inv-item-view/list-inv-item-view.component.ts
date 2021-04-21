import { Component, OnInit, Input } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-list-inv-item-view',
  templateUrl: './list-inv-item-view.component.html',
  styleUrls: ['./list-inv-item-view.component.css']
})
export class ListInvItemViewComponent implements OnInit {

  @Input() item: any;

  message = {
    name: String,
    id: String,
    altName: String,
    category: Object,
    brand: Object,
    purchases: Array
  }
  stock: [];
  itemTotal;
  amountIN;
  showStock: boolean = false

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    console.log(this.item)
  }

  toggleStock(item) {
    this.getStockID(item._id)
   
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
