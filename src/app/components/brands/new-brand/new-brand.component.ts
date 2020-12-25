import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BrandsService } from '../../../services/brands.service';
import { SuppliersService } from '../../../services/suppliers.service';
@Component({
  selector: 'app-new-brand',
  templateUrl: './new-brand.component.html',
  styleUrls: ['./new-brand.component.css']
})
export class NewBrandComponent implements OnInit {

  newBrandForm
  public suppliers = []
  constructor(private fb: FormBuilder, private brandService: BrandsService, private supplierService: SuppliersService) { }

  ngOnInit(): void {
    this.getSuppliers()
    this.newBrandForm = new FormGroup({
      name: new FormControl(''),
      altName: new FormControl(''),
      supplier: new FormControl('')
    })

  }
  getSuppliers(){
    return this.supplierService.getAllSuppliers()
    .subscribe( data => this.suppliers = data)
  }

  onSubmit(){
    return this.brandService.addNewBrand(this.newBrandForm.value)
    .subscribe(data => alert(data + ' ADDED Succesfully '))
  }
}
