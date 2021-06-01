import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stuff-add',
  templateUrl: './stuff-add.component.html',
  styleUrls: ['./stuff-add.component.css']
})
export class StuffAddComponent implements OnInit {

  public newStuffForm
  constructor(    private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.newStuffForm = new FormGroup({
      name: new FormControl(''),
      nationalID: new FormControl(''),
      telephone: new FormControl(''),
      role: new FormControl(''),
      salary: new FormControl(''),
      address: new FormControl(''),
      startDate: new FormControl('')
    })    
  }

  onSubmit(){
    
  }
}
