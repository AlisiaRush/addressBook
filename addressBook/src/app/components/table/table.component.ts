import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // public variables
  // public users$!: Observable<any[]>;

  public users$!: Observable<User>;
  public user!: User;

  // #end

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUser();
    this.users$.subscribe((result) => {
      this.user = result;
    });
  }
}
