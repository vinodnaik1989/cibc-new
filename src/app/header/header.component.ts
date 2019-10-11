import { Component, OnInit, HostListener, Host } from '@angular/core';
import { SubMenu } from "../models/submenu";
import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  submenu: any[] = [
    {
      title:'CMTS',
      abbr: 'Capital Market Token Services',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title:'CMAS',
      abbr: 'Capital Market Authentication Services',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title:'DCMS',
      abbr: 'Distributed Content Management System',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      title:'Public Facing Web Analytics',
      abbr: '',
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    }

  ]

  isShown:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  // class:string = 'hide';

  // changeClass($event){
  //   this.class = $event.type == 'mouseover' ? 'open' : 'hide';
  // }
  public navIsFixed: boolean = false;
  @HostListener('window:scroll', ['$event'])
  stickyHeader(e){
    var sec2 = document.getElementById("01").offsetHeight;
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > sec2) {
      this.navIsFixed = true;
      const element = document.getElementById('header');
      element.classList.add('sticky');
    } else if (this.navIsFixed && number < sec2) {
      this.navIsFixed = false;
      const element = document.getElementById('header');
      element.classList.remove('sticky');
    }
    const element = document.getElementById('header');
    if(number > 200){
      element.classList.add('header-bg');
    } else if (number < 200) {
      element.classList.remove('header-bg');
    }
  };
  @HostListener('click', ['$event'])
  changeClass($event){
    $('.menu-close').click(function(){
      $(this).addClass("nav-test").toggleClass("open");
      $("#menu").toggleClass("open");
    });
  }
}
