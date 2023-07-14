import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { User } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css'],
})
export class DuelComponent implements OnInit {
  usernameOne: string = '';
  usernameTwo: string = '';
  u1: User = {};
  u2: User = {};

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.inspectUser(this.usernameOne).subscribe({
      next: (data) => {
        this.u1 = data;
      },
      error: () => alert('First Username Invalid'),
    });
    this.userService.inspectUser(this.usernameTwo).subscribe({
      next: (data) => {
        this.u2 = data;
      },
      error: () => alert('Second Username Invalid'),
    });
  }
}
