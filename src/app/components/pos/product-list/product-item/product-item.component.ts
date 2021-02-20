import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PosService } from 'src/app/services/pos.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem: Product;

  @Input() addedToWishlist: boolean;

  constructor(
    private msg: MessengerService,
    private posService: PosService,
    private wishlistService: WishlistService
  ) { }

  ngOnInit() {
  }

  handleAddToCart() {
    this.posService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem)
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.addedToWishlist = false;
    })
  }

}
