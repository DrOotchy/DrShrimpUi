import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

 wishlistUrl = 'api/menu/all'
 
  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(this.wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  addToWishlist(productId) {
    return this.http.post(this.wishlistUrl, { id: productId })
  }

  removeFromWishlist(productId) {
    return this.http.delete(this.wishlistUrl + '/' + productId);
  }
}
