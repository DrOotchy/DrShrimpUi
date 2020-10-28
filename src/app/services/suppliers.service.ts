import { Injectable } from '@angular/core';
import { ISuppliers } from '../interfaces/suppliers';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<ISuppliers[]> {
    return this.http.get<ISuppliers[]>('api/supliers/all');
  }
  getSuppliersByGroup(group): Observable<ISuppliers> {
    return this.http.get<ISuppliers>(`api/supliers/group/` + group);

  }
  public createSupplier(data): Observable<any> {
    return this.http.post(`api/supliers/new`, data);
  }
  public getbyId(id): Observable<any> {
    return this.http.get('api/supliers/' + id);
  }
}
