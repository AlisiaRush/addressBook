import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  public allUser: any;
  public id!: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => (this.id = params['id']));
    this.getUserById(this.id);
  }

  public getUserById(id: string) {
    let arrUsers: any[] = this.userService.arrUsers;
    arrUsers = arrUsers.filter((data: any) => data.login.uuid == id);
    if (arrUsers && arrUsers.length) {
      this.allUser = arrUsers[0];
    }
  }
}
