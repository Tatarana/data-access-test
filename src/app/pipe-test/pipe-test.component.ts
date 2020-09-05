import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { IUser } from '../user-interface';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  dateToday: string;
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.dateToday = new Date().toDateString();
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Joseph Climber',
      email: 'joseph@climber.com'
    })
  }

}