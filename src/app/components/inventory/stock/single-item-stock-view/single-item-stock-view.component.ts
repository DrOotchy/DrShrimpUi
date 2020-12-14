import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { InventoryService } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-single-item-stock-view',
  templateUrl: './single-item-stock-view.component.html',
  styleUrls: ['./single-item-stock-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    

})
export class SingleItemStockViewComponent implements OnInit {
  @Input() childMessage: any;
  public stock
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getStockID(this.childMessage.id)
    console.log(this.childMessage.id)

    console.log(this.stock)
  }
  getStockID(id){
    return this.inventoryService.getInventoryInID(id)
    .subscribe(data => this.stock = data)
  }

}
