import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PosService } from '../../services/pos.service';
import { MenuService } from '../../services/menu.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  public invoiceAddItems: any;
  constructor(private posServices: PosService, private menuService: MenuService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getMenuCategories();
    // this.getPOSview();
    this.getMenuview();
    this.invoiceAddItems = new FormGroup(
      {
        invoiceNumber: new FormControl(2, [Validators.required]),
        items: new FormArray([])
      }
    )
    
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
    this.getMyData();
    }
  payInvoice() {
    console.log(this.invoicetemp);
  }
  getLog(pass) {
    console.log(pass)
  }

  // new form



  add() {
    this.invoiceAddItems.get('items').push(new FormGroup({

      name: new FormControl('', [Validators.required]),
      completed: new FormControl(false, [Validators.required]),
      specialRrequest: new FormControl('', [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      itemTotal: new FormControl(0, [Validators.required])

    }))
  }
  submit() {
    this.getLog(this.invoiceAddItems.value.items + ';;;;' + this.invoiceAddItems.value)
    return this.posServices.createInvoice(this.invoiceAddItems.value.items)
      .subscribe(data => alert(data.name + 'Added Successfully'))
    // this.serv.setMyData(this.invoiceAddItems.value.items);
  }
  getMyData() {
    if (this.invoiceAddItems.get('items').length > 0) {
      // tslint:disable-next-line: forin
      for (const x in this.invoiceAddItems.get('items')) {
        this.invoiceAddItems.get('items').removeAt(x);
      }
    }
    let dat = this.invoicetemp;
    if (dat.length > 0) {
      // tslint:disable-next-line: forin
      for (let x in dat) {
        this.invoiceAddItems.get('items').push(new FormGroup({
          _id: new FormControl(dat[x]._id, [Validators.required]),
          name: new FormControl(dat[x].name, [Validators.required]),
          completed: new FormControl(dat[x].completed, [Validators.required]),
          specialRrequest: new FormControl(dat[x].priority, [Validators.required]),
          price: new FormControl(dat[x].price, [Validators.required]),
          quantity: new FormControl(dat[x].quantity || 1, [Validators.required]),
          itemTotal: new FormControl((dat[x].price * 1), [Validators.required])

        }))
      }
    }
  }
  deleteItem(i: number) {
    this.invoiceAddItems.get('items').removeAt(i);
    this.invoicetemp.splice(i, 1)
  }
  track(item: any, index: number) {
    return index;
  }
}

