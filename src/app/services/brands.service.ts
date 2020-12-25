import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }
  getAllBrands(): Observable<any[]> {
    return this.http.get<any[]>('api/brand/all');
  }
  getBrandByID(_id): Observable<any[]> {
    return this.http.get<any[]>(`api/brand/` + _id);
  }
  addNewBrand(data): Observable<any> {
    return this.http.post(`api/brand/new`, data);
  }
}
