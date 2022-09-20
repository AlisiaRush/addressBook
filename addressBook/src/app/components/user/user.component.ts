import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public users$!: Observable<User>;
  public user!: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUser();
    this.users$.subscribe((result) => {
      this.user = result.results;
      this.userService.arrUsers = result.results;
      localStorage.setItem('data_table', JSON.stringify(result.results));
    });
  }
}
