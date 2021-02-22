import { Product } from './product';

export class CartItem {
  id: string;
  productId: string;
  productName: string;
  qty: number;
  price: number;

  constructor(_id: string, productID: string, productName: string, price:number, qty = 1) {
    this.id = _id;
    this.productId = productID;
    this.productName = productName;
    this.price = price;
    this.qty = qty;
  }
}
