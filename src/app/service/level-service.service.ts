import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../model/level-model';


const apiUrl = 'http://localhost:3000/levels';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private readonly http: HttpClient = inject(HttpClient);

  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(apiUrl);
  }

  getLevelById(id: string): Observable<Level> {
    return this.http.get<Level>(`${apiUrl}${id}`);
  }

  createLevel(level: Omit<Level, 'id'>): Observable<Level> {
    return this.http.post<Level>(apiUrl, level);
  }

  updateLevel(id: string, level: Partial<Level>): Observable<Level> {
    return this.http.put<Level>(`${apiUrl}${id}`, level);
  }

  deleteLevel(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${id}`);
  }

  getLevelsByScoreThreshold(threshold: number): Observable<Level[]> {
    return this.http.get<Level[]>(`${apiUrl}?scoreThreshold_gte=${threshold}`);
  }

  getLevelByLevelNumber(levelNumber: number): Observable<Level> {
    return this.http.get<Level>(`${apiUrl}?levelNumber=${levelNumber}`);
  }
}
