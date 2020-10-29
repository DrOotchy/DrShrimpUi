import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PosService {
  

  constructor(private http: HttpClient) { }
  getAllInvoices(): Observable<any[]> {
    return this.http.get<any[]>('api/invoice/all');
  }
  createInvoice(data): Observable<any> {
    return this.http.post(`api/invoice/new`, data);
  }
  getSingleInvoice(id): Observable<any[]> {
    return this.http.get<any[]>(`api/invoice/` + id);
  }
}
