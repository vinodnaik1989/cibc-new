import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShown:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  class:string = 'hide';

  changeClass($event){
    this.class = $event.type == 'mouseover' ? 'open' : 'hide';
  }
  @HostListener('window:scroll', ['$event'])
  changeHeaderFontColor(e){

  }
}
