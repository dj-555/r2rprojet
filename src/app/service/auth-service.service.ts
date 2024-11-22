import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/auth/'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  private readonly http: HttpClient = inject(HttpClient);


  login(email: string, password: string): Observable<any> {
    return this.http.post(`${apiUrl}login`, { email, password });
    
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${apiUrl}logout`, {});
    
  }
}
