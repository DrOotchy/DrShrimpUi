import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public expenses = [];
  public amount = [];
  public total: any;
  constructor(private dashboarService: DashboardService) { }

  ngOnInit(): void {
    this.getAllExpenses();
    this.getTotal()
  }
  getAllExpenses() {
    return this.dashboarService.getexpenses()
      .subscribe(
        data => this.expenses = data
      );
  }
  getTotal() {
    return this.dashboarService.getTotal()
    .subscribe(
      data => this.total = data
    );
  }

}
