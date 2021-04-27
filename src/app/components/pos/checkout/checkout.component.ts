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
  grandTotal

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
    this.posService.getInvoice(this.invoice).subscribe(res => {
        this.invoiceData = res,
        this.grandTotal = this.invoiceData.subTotal + (this.invoiceData.vat || 0) - (this.invoiceData.discount || 0)
    })
  }
  checkout() {
 
    // let printContents = document.getElementById("printable").innerHTML;
    //  let originalContents = document.body.innerHTML;

    //  document.body.innerHTML = printContents;

    window.print();

    //  document.body.innerHTML = originalContents;

    // const printContent = document.getElementById("printable");
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.write(printContent.innerHTML);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();
  }
}
