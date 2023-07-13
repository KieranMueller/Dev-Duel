import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dev-duel';

  constructor(private userService: UserService) {}

  async inspectUser(username: string = 'andrew') {
    const data = await this.userService.inspectUser(username);
    console.log(data);
  }
}
