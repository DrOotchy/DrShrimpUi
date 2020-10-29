import { Component, OnInit } from '@angular/core';
import { PosService } from '../../../services/pos.service';

@Component({
  selector: 'app-all-details',
  templateUrl: './all-details.component.html',
  styleUrls: ['./all-details.component.css']
})
export class AllDetailsComponent implements OnInit {

  public allinvoices = [];
  constructor(private posServices: PosService) { }

  ngOnInit(): void {
    this.getAllInvoices()
  }
  getAllInvoices(){
    return this.posServices.getAllInvoices()
    .subscribe(data => this.allinvoices = data)
  }

}
