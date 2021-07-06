import { Component, OnInit } from '@angular/core';
import { PosService } from '../../../services/pos.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-sales',
  templateUrl: './daily-sales.component.html',
  styleUrls: ['./daily-sales.component.css']
})
export class DailySalesComponent implements OnInit {
  salesSummary
  constructor(private posService: PosService) { }
  dateFilterForm
  ngOnInit(): void {

    this.getSummary()
    this.dateFilterForm = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl('')
    })
  }
  getSummary(){
    return this.posService.salesSummary(Date.now()).subscribe(res=> {this.salesSummary = res, console.log(res)} )
  }
  getSummary2(){
    return this.posService.salesSummary(this.dateFilterForm.value).subscribe(res=> {this.salesSummary = res, console.log(res)} )
  }
  
}
