import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IExpenses } from '../interfaces/expenses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getexpenses(): Observable<IExpenses[]>{
    return this.http.get<IExpenses[]>('api/expenses/all')
  }
  public createExpenses(data): Observable<any> {
    return this.http.post(`api/expenses/new`, data);
  }
  getByID() {

  }
  getTotal(): Observable<any>{
    return this.http.get('api/expenses/total')
  }

  getExensesByGroup(group): Observable<any> {
    return this.http.get(`api/expenses/group/` + group);

  }

  updateExpenses() { }

  deleteExpenses() { }
  errorHandler(error: HttpErrorResponse){
  }
}
