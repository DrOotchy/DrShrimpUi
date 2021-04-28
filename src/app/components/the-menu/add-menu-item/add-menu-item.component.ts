import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MenuService } from '../../../services/menu.service';
@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {
  @Input() categories: any;
  menuItemForm
  constructor(private formBuilder: FormBuilder, private menuService:MenuService
  ) { }

  ngOnInit(): void {
    this.menuItemForm = new FormGroup({
      name: new FormControl(''),
      altName: new FormControl(''),
      description: new FormControl(''),
      altDesc: new FormControl(''),
      price: new FormControl(''),
      availability: new FormControl(''),
      menuSection: new FormControl(''),
      isMenu: new FormControl('')
    })
  }

  submit(){
    this.menuService.addMenuItem(this.menuItemForm.value)
    .subscribe(res=> {
      alert(res)
      this.ngOnInit()
    })
  }

}

