import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  username?: string;
  avatar_url?: string;
  bio?: string;
  name?: string;
  location?: string;
  titles?: string[];
  ['favorite-language']?: string;
  ['total-stars']?: number;
  ['highest-starred']?: number;
  ['public-repos']?: number;
  ['perfect-repos']?: number;
  followers?: number;
  following?: number;
}

const inspectUserUrl = 'http://localhost:3000/api/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  inspectUser(username = 'KieranMueller') {
    return this.http.get(inspectUserUrl + username);
  }
}
