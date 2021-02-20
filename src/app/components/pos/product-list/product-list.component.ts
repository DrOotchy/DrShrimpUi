import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { PosService } from 'src/app/services/pos.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() menuCategory: string;
  public view = []
  productList: Product[] = []
  wishlist: number[] = []

  constructor(
    private posService: PosService,
    private wishlistService: WishlistService,
  ) { }

  ngOnInit() {

    this.loadProducts();
    this.loadWishlist();
    this.getMenuItems(this.menuCategory)
  }
  ngOnChanges() {
    this.getMenuItems(this.menuCategory)

  }

  loadProducts() {
    this.posService.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds
    })
  }

  getMenuItems(menuCategory) {
    console.log(' category id : '+this.menuCategory)
    this.view = this.productList.filter(r => r.menuSection._id === menuCategory);
 console.log('view : '+ this.view)
  }
}
