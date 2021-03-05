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
  public menuCategories = [];
  public category: String;
  public tempInvoiceID

  constructor(private posServices: PosService, private menuService: MenuService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getNewInvoiceID()
    this.getMenuCategories();
    
  }
  getNewInvoiceID() {
    return this.posServices.openNewInoice()
      .subscribe(data => {
        this.tempInvoiceID =  data;
      })
  }
  getMenuCategories() {
    return this.menuService.getCategories()
      .subscribe(data => this.menuCategories = data);
  }
  listCategories(newItem: string) {
    this.category = newItem
  }

}

