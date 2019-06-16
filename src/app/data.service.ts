import { HttpClient } from '@angular/common/http'; import { Injectable } from '@angular/core'; import { User } from './user.model'; @Injectable({ providedIn: 'root' }) export class DataService {
  apiUrl = 'http://www.mocky.io/v2/5d052e013200001100d78c45';
  constructor(private _http: HttpClient) { } getUsers() {
    return this._http.get
      <User[]>(this.apiUrl);
  }
}