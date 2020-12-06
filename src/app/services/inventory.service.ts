import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  getAllInventoryItems(): Observable<any[]> {
    return this.http.get<any[]>('api/inventory/item/getall');
  }
  getItemByID(_id): Observable<any[]> {
    return this.http.get<any[]>(`api/inventory/item/` + _id);
  }
  searchName(name): Observable<any[]> {
    return this.http.post<any[]>(`api/inventory/item/name` , name);
  }
  addNewItem(data): Observable<any> {
    return this.http.post(`api/inventory/newitem`, data);
  }
  getInventCategories(): Observable<any>{
    return this.http.get<any[]>(`api/inventory/item/categories`)
  }
  newInventCategories(data): Observable<any> {
    return this.http.post(`api/inventory/categories/newCategory`, data);
  }
  inventoryIn(data): Observable<any> {
    return this.http.post(`api/inventory/in/new`, data);

  }
  inventoryInID(data, id): Observable<any> {
    return this.http.post(`api/inventory/in/id/`+ id , data);

  }
}
