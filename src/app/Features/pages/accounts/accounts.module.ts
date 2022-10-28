import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsFormComponent } from './accounts-form/accounts-form.component';
import { AccountsDetailsComponent } from './accounts-details/accounts-details.component';


@NgModule({
  declarations: [
    AccountsListComponent,
    AccountsFormComponent,
    AccountsDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule
  ]
})
export class AccountsModule { }
