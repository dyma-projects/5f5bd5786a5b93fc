import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.usersObservable.subscribe( (usersObserver: User[]) => {
      this.users = usersObserver;
    });
  }

  deleteUser(index: number) {
    this.userService.deleteUser(index);
  }

}
