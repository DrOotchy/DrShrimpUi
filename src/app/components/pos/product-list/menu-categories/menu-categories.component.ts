import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>()
  public menuCategories = [];

  constructor(private menuService: MenuService) { 
  }

  ngOnInit(): void {
    this.getMenuCategories();

  }
  getMenuCategories() {
    return this.menuService.getCategories()
      .subscribe(data => this.menuCategories = data);
  }
  showCategory(value: string) {
    console.log('menu category id : '+ value)
    this.newItemEvent.emit(value);
  }
}
