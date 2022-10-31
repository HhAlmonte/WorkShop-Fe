import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent,
    UserDetailsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
