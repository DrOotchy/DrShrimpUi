import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PosService } from '../../services/pos.service';
import { MenuService } from '../../services/menu.service';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public menuView;
  public invoiceItem = {
    _id: '',
    name: '',
    price: '',
    quantity: '',
    specialRrequest: '',
    itemTotal: ['']
  };
  public invoiceAddItems: FormGroup;
  constructor(private posServices: PosService, private menuService: MenuService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getMenuCategories();
    // this.getPOSview();
    this.getMenuview()
  }
  getMenuCategories() {
    return this.menuService.getCategories()
      .subscribe(data => this.menuCategories = data);
  }
  getPOSview() {
    return this.menuService.getPOSview()
      .subscribe(data => this.posView = data);
  }
  getMenuview() {
    return this.menuService.getMenu()
      .subscribe(data => this.menuView = data);
  }
  getMenuItems(id) {

    this.menuItems = this.menuView.filter(r => r.menuSection._id === id);
    
  }
  addToInvoice(item) {
     this.invoicetemp.push(item);
  }
  payInvoice() {
    console.log(this.invoicetemp);
  }
  getLog(pass){
    console.log(pass)
  }
}
