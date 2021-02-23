import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { identifierModuleUrl } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class PosService {


  constructor(private http: HttpClient) { }
  getAllInvoices(): Observable<any[]> {
    return this.http.get<any[]>('api/invoice/all');
  }
  createInvoice(data): Observable<any> {
    return this.http.post(`api/invoice/new`, data);
  }
  getSingleInvoice(id): Observable<any[]> {
    return this.http.get<any[]>(`api/invoice/` + id);
  }
  getCartItems(id): Observable<CartItem[]> {
    //TODO: Mapping the obtained result to our CartItem props. (pipe() and map())
    return this.http.get<CartItem[]>(`api/invoice/temp/items/` + id).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false
          console.log(item)
          for (let i in cartItems) {
            if (cartItems[i].productId === item.item._id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(id,item._id, item.item.name, item.price));
          }
        }

        return cartItems;
      })
    );
  }

  addProductToCart(id, product: Product): Observable<any> {
    return this.http.post(`api/invoice/temp/addItem/` + id, { product });
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('api/menu/all');
  }
  openNewInoice() {
    return this.http.get<any[]>(`api/invoice/temp/new`);
  }
  getTempInvoice(id){
    return this.http.get(`api/invoice/temp/`+ id )
  }
  payTempInvoice(id){
    return this.http.get(`api/invoice/temp/payInvoice/`+ id)
  }
}
