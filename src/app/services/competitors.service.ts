import { Injectable } from '@angular/core';
import { ICompetitors } from '../interfaces/competitors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitorsService {

  constructor(private http: HttpClient) { }
  getAllCompetitors(): Observable<ICompetitors[]> {
    return this.http.get<ICompetitors[]>('api/competitors/all');
  }
  getCompetitorsByGroup(group): Observable<ICompetitors> {
    return this.http.get<ICompetitors>(`api/competitors/group/` + group);
  }
  newCompetitor(data): Observable<ICompetitors> {
    return this.http.post<ICompetitors>(`api/competitors/new`, data);
  }
  getbyId(id): Observable<ICompetitors> {
    return this.http.get<ICompetitors>(`api/competitors/` + id);
  }
  updateCompetitor() {}

  deleteCompetitor() { }
}
