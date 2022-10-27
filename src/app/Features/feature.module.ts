import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuCardComponent } from './pages/menu-card/menu-card.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CardsComponent } from './pages/cards/cards.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuCardComponent,
    UsersComponent,
    AccountsComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    RouterModule
  ]
})
export class FeatureModule { }
