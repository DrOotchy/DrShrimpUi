import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-the-menu',
  templateUrl: './the-menu.component.html',
  styleUrls: ['./the-menu.component.css']
})
export class TheMenuComponent implements OnInit {
  public themenu = [];
  public categories = [];
  public category: String;
  public view = [];
  constructor(private menuServices: MenuService) { }

  ngOnInit(): void {
    this.getTheMenu();
    this.getMenuCategories();
  }
  getTheMenu() {
    return this.menuServices.getMenu()
      .subscribe(data => { this.themenu = data, this.view = this.themenu });
  }
  getsub(sub) {
    return this.menuServices.getSubMenu(sub)
      .subscribe(data => { this.themenu = data, this.view = this.themenu });
  }
  async getMenuCategories() {
    await this.menuServices.getCategories()
      .subscribe(res => {
        console.log(res)
        this.categories = res
      })
  }
  listCategories(newItem: string) {
    this.category = newItem,
      this.view = this.themenu.filter(r => r.menuSection._id === this.category);

  }
}
