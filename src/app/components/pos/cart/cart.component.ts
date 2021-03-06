import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/interfaces/product';
import { CartItem } from 'src/app/interfaces/cart-item';
import { PosService } from 'src/app/services/pos.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() invId:string;
  cartItems = [];

  cartTotal = 0
  invoiceDetails
  constructor(
    private msg: MessengerService,
    private posService: PosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.handleSubscription();
    //this.loadCartItems();
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.posService.getCartItems(this.invId).subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }
  checkout(){
    this.posService.checkoutNPay(this.invId, this.cartTotal).subscribe(res => res?this.router.navigate(['/checkout/'+ this.invId]): alert('errrrrror '))

  }
  cancelInvoice(){
    this.posService.deleteInvoice(this.invId).subscribe(res => alert(res))
  }
}
