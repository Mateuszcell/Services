import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private servUse: UserService) {
  }
ngOnInit() {
    this.users = this.servUse.inactiveUsers;
}


  onSetToActive(id: number) {
    this.servUse.onSetToActive(id);
  }
}
