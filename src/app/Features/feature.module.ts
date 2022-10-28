import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuCardComponent } from './pages/menu-card/menu-card.component';
import { RouterModule } from '@angular/router';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CardsComponent } from './pages/cards/cards.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    HomeComponent,
    MenuCardComponent,
    AccountsComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    RouterModule,
    PagesModule
  ]
})
export class FeatureModule { }
