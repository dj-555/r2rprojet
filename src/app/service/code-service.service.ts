import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Code } from '../model/code-model';

const apiUrl = 'http://localhost:3000/codes';

@Injectable({
  providedIn: 'root',
})
export class CodeService {
  private readonly http: HttpClient = inject(HttpClient);

  getCodes(): Observable<Code[]> {
    return this.http.get<Code[]>(apiUrl);
  }

  getCodeById(id: string): Observable<Code> {
    return this.http.get<Code>(`${apiUrl}${id}`);
  }

  createCode(code: Omit<Code, 'id'>): Observable<Code> {
    return this.http.post<Code>(apiUrl, code);
  }

  updateCode(id: string, code: Partial<Code>): Observable<Code> {
    return this.http.put<Code>(`${apiUrl}${id}`, code);
  }

  deleteCode(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${id}`);
  }

  getUnusedCodes(): Observable<Code[]> {
    return this.http.get<Code[]>(`${apiUrl}?isUsed=false`);
  }
}
