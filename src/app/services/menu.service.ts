import { Injectable } from '@angular/core';
import { IMenu } from '../interfaces/menu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  getMenu(): Observable<IMenu[]> {
    return this.http.get<IMenu[]>('api/menu/all');
  }
  getSubMenu(sub): Observable<IMenu[]> {
    return this.http.get<IMenu[]>(`api/menu/sub/` + sub);
  }
}
