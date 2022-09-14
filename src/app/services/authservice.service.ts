import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    let cred = {
      username: username,
      password: password,
    };
    return this.http.post('http://127.0.0.1:8080/authenticate', cred);
  }
}
