import {Component, HostListener, Renderer2} from '@angular/core';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {Timeline} from './models/timeline';
import {BlogData} from './models/reusable';
import {filter} from 'rxjs/operators';

const BLOG_DATA_1: BlogData[] = [
  {
    bgImage: 'computer.jpg',
    title: 'Main title',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    userImg: 'user.svg',
    userName: 'user one',
    postedDate: 'Oct 19',
    postedTime: '1 day ago'
  }
];

const BLOG_DATA_2: BlogData[] = [
  {
    bgImage: 'graph.jpg',
    title: 'Main title',
    shortDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    userImg: 'user.svg',
    userName: 'user two',
    postedDate: 'Oct 20',
    postedTime: '3 hours ago'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  blogData1 = BLOG_DATA_1;
  blogData2 = BLOG_DATA_2;

  timeline: any[] = [
    {
      id: '01',
      title: 'Welcome',
    },
    {
      id: '02',
      title: 'Collaborate',
    },
    {
      id: '03',
      title: 'Technologies',
    },
    {
      id: '04',
      title: 'Talk to us',
    },
    {
      id: '05',
      title: 'Services',
    },
    {
      id: '06',
      title: 'Solutions',
    },
    {
      id: '07',
      title: 'News & Blog',
    }
  ];

  selectActive: Number;
  setActive: Function;
  previousUrl: string;
  title = 'cibc';

  constructor(private renderer: Renderer2, private router: Router) {
    // this.selectActive = 0;
    this.setActive = function (index) {
      this.selectActive = 0;
      this.selectActive = index;
      ``
    }
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    if (window.pageYOffset > 120) {
      const element = document.getElementById('header');
      element.classList.add('sticky');
      // document.getElementById('menu-row').classList.add('header-sticked');
    } else {
      const element = document.getElementById('header');
      element.classList.remove('sticky');
      // document.getElementById('menu-row').classList.remove('header-sticked');
    }
  }

}

