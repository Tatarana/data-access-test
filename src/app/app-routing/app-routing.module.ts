import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UserListComponent } from '../user-list/user-list.component';
import { BuiltInStrDirComponent } from '../built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from '../built-in-attr-dir/built-in-attr-dir.component';


const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'userDetail', component: UserDetailComponent },
  { path: 'str-dir', component: BuiltInStrDirComponent },
  { path: 'attr-dir', component: BuiltInAttrDirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 