import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
