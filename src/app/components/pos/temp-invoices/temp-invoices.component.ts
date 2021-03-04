import { Component, OnInit } from '@angular/core';
import { PosService } from '../../../services/pos.service';
@Component({
  selector: 'app-temp-invoices',
  templateUrl: './temp-invoices.component.html',
  styleUrls: ['./temp-invoices.component.css']
})
export class TempInvoicesComponent implements OnInit {

  public tempInvoices
  constructor(
    private posService: PosService,
  ) { }

  ngOnInit(): void {
    this.getAllTempInvoices()
  }
  getAllTempInvoices(){
    this.posService.getOpenTempInvoices()
    .subscribe(data => {
      this.tempInvoices = data
    console.log(this.tempInvoices)
    })
    
  }
}
