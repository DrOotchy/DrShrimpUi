import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PosService } from 'src/app/services/pos.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  invoiceData 

  constructor(
    private route: ActivatedRoute,
    private posService: PosService
  ) { }
  invoice = this.route.snapshot.params._id;

  ngOnInit(): void {
    console.log(this.invoice)
    this.getInvoice()
  }

  getInvoice() {
    this.posService.getInvoice(this.invoice).subscribe(res => {console.log(res), this.invoiceData = res})
  }
}
