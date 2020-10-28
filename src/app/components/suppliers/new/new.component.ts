import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliers.service';
import { SuppliersComponent } from '../suppliers.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  suppliers = {
    name: '',
    mobile: '',
    location: '',
    group: ''
  }
  constructor(private supliersService: SuppliersService) { }

  ngOnInit(): void {
  }
  newSuplier(formObj) {
    console.log(formObj);
    this.supliersService.createSupplier(formObj);
  }
}
