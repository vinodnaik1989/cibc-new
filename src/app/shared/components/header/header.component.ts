import {Component, OnInit, HostListener, Host} from '@angular/core';
import {SubMenu, SharedServices, Training, Knowledge, Contact} from '../../../models/submenu';
import * as $ from 'jquery';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  opened = false;
  submenu: any[] = [
    {
      title: 'CMTS',
      abbr: 'Capital Market Token Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      icon: '../../assets/icons/award.svg',
      iconPink: '../../assets/icons/award-pink.svg',
      iconBlue: '../../assets/blue-icons/award-blue.svg',
      link: 'technology'
    },
    {
      title: 'CMAS',
      abbr: 'Capital Market Authentication Services',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      icon: '../../assets/icons/key.svg',
      iconPink: '../../assets/icons/key-pink.svg',
      iconBlue: '../../assets/blue-icons/key-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'DCMS',
      abbr: 'Distributed Content Management System',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      icon: '../../assets/icons/globe.svg',
      iconPink: '../../assets/icons/globe-pink.svg',
      iconBlue: '../../assets/blue-icons/globe-blue.svg',
      link: 'news'
    },
    {
      title: 'Public Facing Web Analytics',
      abbr: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      icon: '../../assets/icons/monitor.svg',
      iconPink: '../../assets/icons/monitor-pink.svg',
      iconBlue: '../../assets/blue-icons/monitor-blue.svg',
      link: 'technology'
    }

  ];
  sharedservices: any[] = [
    {
      title: 'Messaging',
      icon: '../../assets/icons/message-square.svg',
      iconPink: '../../assets/icons/message-square-pink.svg',
      iconBlue: '../../assets/blue-icons/message-square-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'Integration',
      icon: '../../assets/icons/link.svg',
      iconPink: '../../assets/icons/link-pink.svg',
      iconBlue: '../../assets/blue-icons/link-blue.svg',
      link: 'news'
    },
    {
      title: 'Web Development',
      icon: '../../assets/icons/layout.svg',
      iconPink: '../../assets/icons/layout-pink.svg',
      iconBlue: '../../assets/blue-icons/layout-blue.svg',
      link: 'technology'
    },
    {
      title: 'Mobile Development',
      icon: '../../assets/icons/smartphone.svg',
      iconPink: '../../assets/icons/smartphone-pink.svg',
      iconBlue: '../../assets/blue-icons/smartphone-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'Micro services and API Development (Java – GO Lang)',
      icon: '../../assets/icons/terminal.svg',
      iconPink: '../../assets/icons/terminal-pink.svg',
      iconBlue: '../../assets/blue-icons/terminal-blue.svg',
      link: 'news'
    },
    {
      title: 'Docker Containerization and OpenShift deployment',
      icon: '../../assets/icons/package.svg',
      iconPink: '../../assets/icons/package-pink.svg',
      iconBlue: '../../assets/blue-icons/package-blue.svg',
      link: 'technology'
    },
    {
      title: 'Cloud setup and Deployment',
      icon: '../../assets/icons/cloud.svg',
      iconPink: '../../assets/icons/cloud-pink.svg',
      iconBlue: '../../assets/blue-icons/cloud-blue.svg',
      link: 'shared-services'
    }
  ];

  training: any[] = [
    {
      title: 'Open Source Web and Mobile Framework',
      icon: '../../assets/icons/codepen.svg',
      iconPink: '../../assets/icons/codepen-pink.svg',
      iconBlue: '../../assets/blue-icons/codepen-blue.svg',
      link: 'news'
    },
    {
      title: 'OpenShift Framework',
      icon: '../../assets/icons/shuffle.svg',
      iconPink: '../../assets/icons/shuffle-pink.svg',
      iconBlue: '../../assets/blue-icons/shuffle-blue.svg',
      link: 'technology'
    },
    {
      title: 'Solace Messaging Libraries (Java, .Net, GO)',
      icon: '../../assets/icons/message-circle.svg',
      iconPink: '../../assets/icons/message-circle-pink.svg',
      iconBlue: '../../assets/blue-icons/message-circle-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'Infrastructure Reference Implementation',
      icon: '../../assets/icons/bookmark.svg',
      iconPink: '../../assets/icons/bookmark-pink.svg',
      iconBlue: '../../assets/blue-icons/bookmark-blue.svg',
      link: 'news'
    },
    {
      title: 'Architectural and Design Patterns Reference Implementation',
      icon: '../../assets/icons/grid.svg',
      iconPink: '../../assets/icons/grid-pink.svg',
      iconBlue: '../../assets/blue-icons/grid-blue.svg',
      link: 'technology'
    }
  ];

  knowledge: any[] = [
    {
      title: 'Training Materials',
      icon: '../../assets/icons/book.svg',
      iconPink: '../../assets/icons/book-pink.svg',
      iconBlue: '../../assets/blue-icons/book-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'White papers',
      icon: '../../assets/icons/file.svg',
      iconPink: '../../assets/icons/file-pink.svg',
      iconBlue: '../../assets/blue-icons/file-blue.svg',
      link: 'news'
    },
    {
      title: 'Videos',
      icon: '../../assets/icons/video.svg',
      iconPink: '../../assets/icons/video-pink.svg',
      iconBlue: '../../assets/blue-icons/video-blue.svg',
      link: 'technology'
    },
    {
      title: 'Documents',
      icon: '../../assets/icons/layers.svg',
      iconPink: '../../assets/icons/layers-pink.svg',
      iconBlue: '../../assets/blue-icons/layers-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'Blogs',
      icon: '../../assets/icons/bold.svg',
      iconPink: '../../assets/icons/bold-pink.svg',
      iconBlue: '../../assets/blue-icons/bold-blue.svg',
      link: 'news'
    },
    {
      title: 'News',
      icon: '../../assets/icons/book-open.svg',
      iconPink: '../../assets/icons/book-open-pink.svg',
      iconBlue: '../../assets/blue-icons/book-open-blue.svg',
      link: 'news'
    }
  ];

  contact: any[] = [
    {
      title: 'Message',
      icon: '../../assets/icons/send.svg',
      iconPink: '../../assets/icons/send-pink.svg',
      iconBlue: '../../assets/blue-icons/send-blue.svg',
      link: 'shared-services'
    },
    {
      title: 'Live Chat',
      icon: '../../assets/icons/smile.svg',
      iconPink: '../../assets/icons/smile-pink.svg',
      iconBlue: '../../assets/blue-icons/smile-blue.svg',
      link: 'news'
    },
    {
      title: 'Service and Product Engagement',
      icon: '../../assets/icons/thumbs-up.svg',
      iconPink: '../../assets/icons/thumbs-up-pink.svg',
      iconBlue: '../../assets/blue-icons/thumbs-up-blue.svg',
      link: 'technology'
    }
  ];

  public navIsFixed: boolean = false;
  isShown: boolean = false;
  menuOpened = false;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe(x => {
      this.menuOpened = false;
      console.log(this.router.url);
    });
  }

  ngOnInit() {
  }

  menuOpen() {
    this.menuOpened = true;
  }


  menuClose() {
    this.menuOpened = false;
  }


  // changeClasses() {
  //   if ($(window).width() <= 1024) {
  //     $('.menu-close').addClass('nav-test').toggleClass('open');
  //     $('#menu').toggleClass('open');
  //     $('body').toggleClass('scroll');
  //   }
  // }

  changeClasses() {
    if ($(window).width() <= 1024) {
      $('.menu-close').addClass('nav-test').toggleClass('open');
      $('#mobile-menu').toggleClass('open');
      $('body').toggleClass('scroll');
    }
  }

  toggle() {
    this.opened = !this.opened;
  }


}
