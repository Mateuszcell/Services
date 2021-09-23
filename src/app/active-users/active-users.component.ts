import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private servUs: UserService) {
  }

  ngOnInit() {
    this.users = this.servUs.activeUsers;
  }


  onSetToInactive(id: number) {
    this.servUs.onSetToInactive(id);
  }
}
