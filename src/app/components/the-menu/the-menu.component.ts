import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-the-menu',
  templateUrl: './the-menu.component.html',
  styleUrls: ['./the-menu.component.css']
})
export class TheMenuComponent implements OnInit {
  public themenu = [];

  constructor(private menuServices: MenuService) { }

  ngOnInit(): void {
    this.getTheMenu();
    this.getMenuCategories();
  }
  getTheMenu(){
    return this.menuServices.getMenu()
    .subscribe(data => this.themenu = data);
  }
  getsub(sub){
    return this.menuServices.getSubMenu(sub)
    .subscribe(data => this.themenu = data);
  }
  async getMenuCategories(){
    await this.menuServices.getCategories()
    .subscribe(res => {
      console.log(res)
    })
  }
}
