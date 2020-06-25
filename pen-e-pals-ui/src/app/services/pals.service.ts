import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PalsService {
  constructor(private http: HttpClient) {}

  getPals() {
    return this.http.get('/server/api/v1/pals');
  }

  createPalRegistration(pal) {
    let body = JSON.stringify(pal);
    return this.http.post('/server/api/v1/pals', body, httpOptions);
  }

  // not used yet
  getPal(id: number) {
    return this.http.get('/server/api/v1/pals' + id);
  }

  // create delete and edit
}
