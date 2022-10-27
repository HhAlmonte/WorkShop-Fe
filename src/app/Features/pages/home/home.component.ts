import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Shared/models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'WorkShop-Fe';
  menus:Menu[] =[
    {title:'Home', img:'assets/images/Users.png', route:'users'},
    {title:'Accounts', img:'assets/images/Users.png', route:'accounts'},
    {title: 'Cards', img: 'assets/images/Card.png' , route: 'cards'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
