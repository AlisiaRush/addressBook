import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**API for Fetching user data */
  URL = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}
  public arrUsers: any[] = [];

  // get users array

  // Get Method for API results
  public getUser(): Observable<User> {
    return this.http.get<User>(`${this.URL}?seed=nuvalence&results=10`);
  }
}
