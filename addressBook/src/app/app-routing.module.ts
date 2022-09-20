import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';

import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'user-details/:id', component: UserDetailComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
