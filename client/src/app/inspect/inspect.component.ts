import { Component } from '@angular/core';
import { UserService } from 'src/user.service';
import { User } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent {
  user: User = {};
  username: string = '';

  constructor(private userService: UserService) {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.username).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: () => alert('Invalid Username'),
    });
  }
}
