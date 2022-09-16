import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { users } from 'src/app/tests/mocks/user.mock';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let userService: jasmine.SpyObj<UserService>;
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    userService = jasmine.createSpyObj('UserService', ['getUser']);
    userService.getUser.and.returnValue(of(users));
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TableComponent],
      providers: [{ provide: UserService, useValue: userService }],
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
