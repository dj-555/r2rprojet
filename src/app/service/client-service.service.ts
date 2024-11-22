import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client-model';

const apiUrl = 'http://localhost:3000/clients/';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private readonly http: HttpClient = inject(HttpClient);

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(apiUrl);
  }

  getClientById(id: string): Observable<Client> {
    return this.http.get<Client>(`${apiUrl}${id}`);
  }

  createClient(client: Omit<Client, 'id'>): Observable<Client> {
    return this.http.post<Client>(apiUrl, client);
  }

  updateClient(id: string, client: Partial<Client>): Observable<Client> {
    return this.http.put<Client>(`${apiUrl}${id}`, client);
  }

  deleteClient(id: string): Observable<void> {
    return this.http.delete<void>(`${apiUrl}${id}`);
  }

  getAdminClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${apiUrl}?isAdmin=true`);
  }
}
