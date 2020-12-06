import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers.service';
import { InventoryService } from '../../services/inventory.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public allSupliers
  public view 
  public allInvent = []

  constructor(private suplierService: SuppliersService, private inventoryService: InventoryService) {

  }
  ngOnInit(): void {
    this.getSupplier();
    this.getALLCategories();
  }
  getSupplier() {
    this.suplierService.getAllSuppliers().subscribe((response) => {
      this.allSupliers = response;
      this.view = response
    });
  }

  getView(id) {
    this.view = this.allSupliers.filter(r => r.group._id === id);

  }

  getALLCategories(){
    return this.inventoryService.getInventCategories()
    .subscribe(data => this.allInvent = data);
  }
    

}
