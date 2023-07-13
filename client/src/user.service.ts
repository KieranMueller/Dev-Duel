import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface User {
//   username: string;
//   name?: string;
//   location?: string;
//   titles?: string;
//   favLanguage?: string;
//   totalStars?: number;
//   highestStarCount?: number;
//   publicRepos?: number;
//   perfectRepos?: number;
//   followers?: number;
//   following?: number;
// }

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  test: string = '';
  user: any = undefined;

  constructor(private http: HttpClient) {}

  async inspectUser(username = 'andrew') {
    let data = await this.http
      .get(inspectUserUrl + username)
      .toPromise()
      .catch(() => alert('Invalid Username'));
    console.log(data);
    return data;
  }
}
