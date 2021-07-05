import { Component, OnInit } from '@angular/core';
import { PosService } from '../../../services/pos.service';

@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.css']
})
export class DailySalesComponent implements OnInit {
  salesSummary
  constructor(private posService: PosService) { }

  ngOnInit(): void {

    this.getSummary(Date.now())
  }
  getSummary(date){
    return this.posService.salesSummary(Date.now()).subscribe(res=> {this.salesSummary = res, console.log(res)} )
  }


  
}
