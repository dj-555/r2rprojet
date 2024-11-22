import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories-model';

const apiUrl = 'http://localhost:3000/categories/';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly http: HttpClient = inject(HttpClient);

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(apiUrl);
  }

  getCategoryById(id: string): Observable<Categories> {
    return this.http.get<Categories>(`${apiUrl}${id}`);
  }

  createCategory(category: Omit<Categories, 'id'>): Observable<Categories> {
    return this.http.post<Categories>(apiUrl, category);
  }

  updateCategory(id: string,category: Partial<Categories>): Observable<Categories> {
    return this.http.put<Categories>(`${apiUrl}${id}`, category);
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${id}`);
  }

  getCategoriesByTitle(title: string): Observable<Categories[]> {
    return this.http.get<Categories[]>(`${apiUrl}?title=${title}`);
  }
}
