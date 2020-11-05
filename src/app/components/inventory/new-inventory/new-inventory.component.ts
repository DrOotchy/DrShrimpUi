import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InventoryService } from '../../../services/inventory.service';
@Component({
  selector: 'app-new-inventory',
  templateUrl: './new-inventory.component.html',
  styleUrls: ['./new-inventory.component.css']
})
export class NewInventoryComponent implements OnInit {
public itemForm;
  constructor(private formBuilder: FormBuilder,private inventoryService: InventoryService) { }
  ngOnInit(): void {
    this.itemForm = new FormGroup({
      name: new FormControl(''),
      mainNumber: new FormControl(''),
      alternativeNumbers: new FormControl('')
    });
}

  onSubmit() {
    return this.inventoryService.newInventCategories(this.itemForm.value)
      .subscribe(data => alert(data.name + 'Added Successfully' ));
  }

}
