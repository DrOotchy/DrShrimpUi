import { Component, OnInit } from '@angular/core';
import { SuppliersService } from '../../../services/suppliers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
supplier:any;
  constructor(private suppliersService: SuppliersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getbyId();
  }
  getbyId() {
    return this.suppliersService.getbyId(this.route.snapshot.params.id)
      .subscribe(
        res => this.supplier = res
      );
  }

}
