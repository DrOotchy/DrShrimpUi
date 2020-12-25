import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../../services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  public brands = []
  public view
  constructor(private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    return this.brandsService.getAllBrands()
    .subscribe(data => {
      this.brands = data
      this.view = data
    })
  }

}
