import { BehaviorSubject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    public usersObservable: BehaviorSubject<User[]> = new BehaviorSubject([
        {username: 'jean'},
        {username: 'Bob'}
    ]);

    constructor() {}

    addUser(username: string) {
        const newUser = new User;
        newUser.username = username;
        const currentUsers: User[] = this.usersObservable.value;
        currentUsers.push(newUser);
        this.usersObservable.next(currentUsers);
    }

    deleteUser(index: number) {
        const currentUsers: User[] = this.usersObservable.value;
        currentUsers.splice(index, 1);
        this.usersObservable.next(currentUsers);
    }
}