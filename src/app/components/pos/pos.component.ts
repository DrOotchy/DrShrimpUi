import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PosService } from '../../services/pos.service';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  public posView;
  public menuCategories = [];
  public menuItems = [];
  public invoicetemp = [];
  public tot ;
  public invoiceItem ={
    _id: '',
    name: '',
    specialrequst: '',
    quantity: 1,
    price: '',
    itemTotal: 0

  }
  constructor(private posServices: PosService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenuCategories();
    this.getPOSview();
  }
  getMenuCategories() {
    return this.menuService.getCategories()
      .subscribe(data => this.menuCategories = data);
  }
  getPOSview() {
    return this.menuService.getPOSview()
      .subscribe(data => this.posView = data);
  }
  getMenuItems(name) {
    if (name === 'Salads') {
      this.menuItems = this.posView.Salads;
    }
    if (name === 'Sandwiches') {
      this.menuItems = this.posView.Sandwiches;
    }
    if (name === 'Rice') {
      this.menuItems = this.posView.Rice;
    }
    if (name === 'Pasta') {
      this.menuItems = this.posView.Pasta;
    }
    if (name === 'Meals') {
      this.menuItems = this.posView.Meals;
    }
    if (name === 'Kilos') {
      this.menuItems = this.posView.Kilos;
    }
    if (name === 'Appetizerz') {
      this.menuItems = this.posView.Appetizerz;
    }
    if (name === 'Beverages') {
      this.menuItems = this.posView.Beverages;
    }
    if (name === 'Soup') {
      this.menuItems = this.posView.Soup;
    }
  }
  addToInvoice(item){
    this.invoiceItem._id = item._id;
    this.invoiceItem.name = item.name;
    this.invoiceItem.price = item.price;
    this.invoicetemp.push(this.invoiceItem);
  }
  payInvoice(){
console.log(this.invoicetemp)
  }
}
