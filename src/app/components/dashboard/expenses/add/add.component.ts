import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  expenses = {
    amount : '',
    title: '',
    notes: '',
    status: ''

  };
  constructor(private dasgboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
  }
  addexpense(){
    this.dasgboardService.createExpenses(this.expenses)
    .subscribe(res => {
      window.location.reload();
    });
  }

}
