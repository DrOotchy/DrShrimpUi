import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/interfaces/product';
import { CartItem } from 'src/app/interfaces/cart-item';
import { PosService } from 'src/app/services/pos.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() invId:string;
  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private posService: PosService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems();
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
  payInvoice(){
    this.posService.payTempInvoice(this.invId).subscribe(res => alert(res))
  }
}
