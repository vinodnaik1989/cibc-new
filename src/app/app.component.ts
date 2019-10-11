import { Component, HostListener, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Timeline } from './models/timeline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  timeline: any[] = [
    {
      id:'01',
      title:"Welcome",
    },
    {
      id:'02',
      title:"Collaborate",
    },
    {
      id:'03',
      title:"Technologies",
    },
    {
      id:'04',
      title:"Talk to us",
    },
    {
      id:'05',
      title:"Services",
    },
    {
      id:'06',
      title:"Solutions",
    },
    {
      id:'07',
      title:"News & Blog",
    }
  ];

  selectActive : Number;
  setActive : Function;
  previousUrl: string;
  title = 'cibc';
  constructor(private renderer: Renderer2, private router: Router){
    // this.selectActive = 0;
    this.setActive = function(index){
      this.selectActive = 0;
      this.selectActive = index;
  ``}
  this.router.events
  .subscribe((event) => {
    if (event instanceof NavigationStart) {
        if (this.previousUrl) {
          this.renderer.removeClass(document.body, this.previousUrl);
        }
        let currentUrlSlug = event.url.slice(1)
        if (currentUrlSlug) {
          this.renderer.addClass(document.body, currentUrlSlug);
        }
        this.previousUrl = currentUrlSlug;
      }
    });
  }


}

