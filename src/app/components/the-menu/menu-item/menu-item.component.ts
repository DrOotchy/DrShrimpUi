import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() item:any
  public edit = false

  constructor() { }

  ngOnInit(): void {
  }
  editItem(){
    this.edit = !this.edit
  }
}
