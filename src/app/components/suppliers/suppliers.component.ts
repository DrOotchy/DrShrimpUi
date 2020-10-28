import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  allSupliers: {};
  kitchensuppliers: {};

  constructor(private suplierService: SuppliersService) {

  }
  ngOnInit(): void {
    this.getSupplier();
  }
  getSupplier() {
    this.suplierService.getAllSuppliers().subscribe((response) => {
      this.allSupliers = response;
    });
  }
  getShrimp() {
    this.suplierService.getSuppliersByGroup('shrimp').subscribe((response) => {
      this.allSupliers = response;
    });
  }
  getKitchen() {
    this.suplierService.getSuppliersByGroup('kitchen').subscribe((response) => {
      this.allSupliers = response;
      console.log(this.allSupliers);
    });
  }
  getPlastics() {
    this.suplierService.getSuppliersByGroup('plastics').subscribe((response) => {
      this.allSupliers = response;
    });
  }
  getPrintables() {
    this.suplierService.getSuppliersByGroup('printables').subscribe((response) => {
      this.allSupliers = response;
    });
  }
}
