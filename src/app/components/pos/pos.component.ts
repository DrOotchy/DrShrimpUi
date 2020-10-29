import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PosService } from '../../services/pos.service';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {
  public menuCategories = [];
  public menuItems = [];
  constructor(private posServices: PosService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.getMenuCategories()
  }
getMenuCategories(){
  return this.menuService.getCategories()
  .subscribe(data => this.menuCategories = data)
}
getMenuItems(_id){
  return this.menuService.getMenuItems(_id)
  .subscribe(data => this.menuItems = data)
}
}
