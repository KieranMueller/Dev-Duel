import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {
  user: any | undefined = undefined;
  username: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.user = this.userService.inspectUser(this.username);
  }
}
