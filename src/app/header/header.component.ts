import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
