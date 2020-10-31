import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getMenu(): Observable<any[]> {
    return this.http.get<any[]>('api/menu/all');
  }
  getSubMenu(sub): Observable<any[]> {
    return this.http.get<any[]>(`api/menu/sub/` + sub);
  }
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>('api/menu/sections')
  }
  getMenuItems(_id): Observable<any[]> {
    return this.http.get<any[]>(`api/menu/bysection/` + _id);
  }
  getPOSview(): Observable<any[]> {
    return this.http.get<any[]>(`api/menu/POSview`);
  }
}
