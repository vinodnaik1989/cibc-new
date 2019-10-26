import {Component, OnInit, HostListener, Host} from '@angular/core';
import {SubMenu} from '../../../models/submenu';
import * as $ from 'jquery';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbAccordionConfig]
})
export class HeaderComponent implements OnInit {

  opened = false;
  submenu: any[] = [
    {
      main_title:'Products',
      submenu_img:'../../assets/images/products-blue.png',
      submenu_title:'Products',
      submenu_desc:'Explore our suite of Shared Services',
      submenu:[
        {
          title: 'CMTS',
          abbr: 'Capital Market Token Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          icon: '../../assets/icons/award.svg',
          link: 'technology'
        },
        {
          title: 'CMAS',
          abbr: 'Capital Market Authentication Services',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          icon: '../../assets/icons/key.svg',
          link: 'shared-services'
        },
        {
          title: 'DCMS',
          abbr: 'Distributed Content Management System',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          icon: '../../assets/icons/globe.svg',
          link: 'news'
        },
        {
          title: 'Public Facing Web Analytics',
          abbr: '',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          icon: '../../assets/icons/monitor.svg',
          link: 'technology'
        }
      ],
    },
    {
      main_title:'Shared Services',
      submenu_img:'../../assets/images/shared-serives-blue.png',
      submenu_title:'Shared Services',
      submenu_desc:'Explore our suite of Shared Services',
      submenu:[
        {
          title: 'Messaging',
          icon: '../../assets/icons/message-square.svg',
          link: 'shared-services'
        },
        {
          title: 'Integration',
          icon: '../../assets/icons/link.svg',
          link: 'news'
        },
        {
          title: 'Web Development',
          icon: '../../assets/icons/layout.svg',
          link: 'technology'
        },
        {
          title: 'Mobile Development',
          icon: '../../assets/icons/smartphone.svg',
          link: 'shared-services'
        },
        {
          title: 'Micro services and API Development (Java – GO Lang)',
          icon: '../../assets/icons/terminal.svg',
          link: 'news'
        },
        {
          title: 'Docker Containerization and OpenShift deployment',
          icon: '../../assets/icons/package.svg',
          link: 'technology'
        },
        {
          title: 'Cloud setup and Deployment',
          icon: '../../assets/icons/cloud.svg',
          link: 'shared-services'
        }
      ],
    },
    {
      main_title:'Training & Support',
      submenu_img:'../../assets/images/training-support-blue.png',
      submenu_title:'Training and Support',
      submenu_desc:'Explore our suite Training and Support',
      submenu:[
        {
          title: 'Open Source Web and Mobile Framework',
          icon: '../../assets/icons/codepen.svg',
          link: 'news'
        },
        {
          title: 'OpenShift Framework',
          icon: '../../assets/icons/shuffle.svg',
          link: 'technology'
        },
        {
          title: 'Solace Messaging Libraries (Java, .Net, GO)',
          icon: '../../assets/icons/message-circle.svg',
          link: 'shared-services'
        },
        {
          title: 'Infrastructure Reference Implementation',
          icon: '../../assets/icons/bookmark.svg',
          link: 'news'
        },
        {
          title: 'Architectural and Design Patterns Reference Implementation',
          icon: '../../assets/icons/grid.svg',
          link: 'technology'
        }
      ],
    },
    {
      main_title: 'Knowledge Center',
      submenu_img:'../../assets/images/knowledge-center-blue.png',
      submenu_title:'Knowledge Center',
      submenu_desc:'Explore our suite of Knowledge Center',
      submenu:[
        {
          title: 'Training Materials',
          icon: '../../assets/icons/book.svg',
          link: 'shared-services'
        },
        {
          title: 'White papers',
          icon: '../../assets/icons/file.svg',
          link: 'news'
        },
        {
          title: 'Videos',
          icon: '../../assets/icons/video.svg',
          link: 'technology'
        },
        {
          title: 'Documents',
          icon: '../../assets/icons/layers.svg',
          link: 'shared-services'
        },
        {
          title: 'Blogs',
          icon: '../../assets/icons/bold.svg',
          link: 'news'
        },
        {
          title: 'News',
          icon: '../../assets/icons/book-open.svg',
          link: 'news'
        }
      ],
    },
    {
      main_title: 'Contact Us',
      submenu_title:'Contact Us',
      submenu_desc:'Explore our suite of Contact Us',
      submenu:[
        {
          title: 'Message',
          icon: '../../assets/icons/send.svg',
          link: 'shared-services'
        },
        {
          title: 'Live Chat',
          icon: '../../assets/icons/smile.svg',
          link: 'news'
        },
        {
          title: 'Service and Product Engagement',
          icon: '../../assets/icons/thumbs-up.svg',
          link: 'technology'
        }
      ]
    }
  ];

  public navIsFixed: boolean = false;
  isShown: boolean = false;
  menuOpened = false;

  constructor(public router: Router, config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';

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


  changeClasses() {
    if ($(window).width() <= 1024) {
      $('.menu-close').addClass('nav-test').toggleClass('open');
      $('#menu').toggleClass('open');
      $('body').toggleClass('scroll');
    }
  }

  // changeClasses() {
  //   if ($(window).width() <= 1024) {
  //     $('.menu-close').addClass('nav-test').toggleClass('open');
  //     $('#mobile-menu').toggleClass('open');
  //     $('body').toggleClass('scroll');
  //   }
  // }

  toggle() {
    this.opened = !this.opened;
  }


}
