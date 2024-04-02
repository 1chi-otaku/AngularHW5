import { Component } from '@angular/core';

interface User {
  name: string;
  salary: number;
  date: Date;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


  users: User[] = [];
  newUser: User = { name: '', salary: 0, date: new Date() };
  editingUserIndex: number = -1;

  addUser(): void {
    if (this.newUser.name.trim() !== '' && this.newUser.salary > 0) {
      this.users.push(this.newUser);
      this.newUser = { name: '', salary: 0, date: new Date() };
    }
  }

  editUser(index: number): void {
    this.editingUserIndex = index;
    this.newUser = { ...this.users[index] };
  }

  saveUser(): void {
    if (this.newUser.name.trim() !== '' && this.newUser.salary > 0) {
      this.users[this.editingUserIndex] = this.newUser;
      this.newUser = { name: '', salary: 0, date: new Date() };
      this.editingUserIndex = -1;
    }
  }

  deleteUser(index: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.users.splice(index, 1);
    }
  }



}
