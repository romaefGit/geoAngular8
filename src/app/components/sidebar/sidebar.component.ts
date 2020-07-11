import { Component, OnInit } from '@angular/core';
declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    active:boolean;
}
export const ROUTES: RouteInfo[] = [
    { path: '/map-stats', title: 'Map statistics',  icon:'fa-plane', class: '', active:true},
    { path: '/dashboard', title: 'dashboard',  icon:'fa-plane', class: '', active:false},
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  title = 'Angular MapBox';

  classApplied = false;
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  activeClass(indice){
    for (let index = 0; index < ROUTES.length; index++) {
      if(index == indice){
        ROUTES[index].active = true;
      }else{
        ROUTES[index].active = false;
      }
    }
  }
}
