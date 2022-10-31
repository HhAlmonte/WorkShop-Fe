import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/models/user.models';
import { UserService } from 'src/app/Shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  user:User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit():void {
    this.getUsers();
  }

  getUsers() {
    this.userService.gets().subscribe(data =>{
      this.user = data;
    }, error => {
      alert(error);
    });
  }
}
