import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>('api/customer/all');
  }
  getCustomerID(_id): Observable<any[]> {
    return this.http.get<any[]>(`api/customer/` + _id);
  }
  newCustomer(data): Observable<any> {
    return this.http.post<any>(`api/customer/new`, data);
  }
}
