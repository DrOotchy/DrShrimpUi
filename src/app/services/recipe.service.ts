import { Injectable } from '@angular/core';
import { IRecipe } from '../interfaces/recipe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  public createRecipe(data): Observable<any> {
    return this.http.post(`api/recipe/new`, data);
  }

  getAllRecipies(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`api/recipe/all`);
  }
  getSortedRecipies(): Observable<any> {
    return this.http.get(`api/recipe/sorted`);
  }
  getbyId(id): Observable<any> {
    return this.http.get(`api/recipe/` + id);
  }
  updateRecipe() { }

  deleteReciper() { }


  createIngredient(data): Observable<any> {
    return this.http.post(`api/ingredient/new`, data);
  }

  getAllIngredient(): Observable<IRecipe[]> {
    return this.http.get<IRecipe[]>(`api/ingredient/all`);
  }

  getIngredientbyId(id): Observable<any> {
    return this.http.get(`api/ingredient/` + id);
  }
}