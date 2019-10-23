import {Component, OnInit, HostListener, Host} from '@angular/core';
import {SubMenu, SharedServices, Training, Knowledge, Contact} from '../../../models/submenu';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  changeClasses() {
    $('.menu-close').addClass('nav-test').toggleClass('open');
    $('#menu').toggleClass('open');
    $('body').toggleClass('scroll');
  }

  opened = false;

  toggle() {
    this.opened = !this.opened;
  }

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

  isShown: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  // class:string = 'hide';

  // changeClass($event){
  //   this.class = $event.type == 'mouseover' ? 'open' : 'hide';
  // }
  public navIsFixed: boolean = false;

  /*@HostListener('window:scroll', ['$event'])
  stickyHeader(e) {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const element = document.getElementById('header');
    if ((document.body.classList.contains('home2'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('home2b'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('home2c'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('home2d'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('home2e'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('home2f'))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('shared-services'))) {
      var sec3 = document.getElementById('sec-one').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec3 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec3 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('news'))) {
      var sec4 = document.getElementById('section-one').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec4 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec4 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    } else if ((document.body.classList.contains('technology'))) {
      var sec4 = document.getElementById('section-one').offsetHeight;
      if (number > 200) {
        element.classList.add('sticky');
      } else if (number < 200) {
        element.classList.remove('sticky');
      }
      // if (number > sec4 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec4 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    }
    else if (!(document.body.classList.contains(''))) {
      var sec2 = document.getElementById('01').offsetHeight;
      if (number > 200) {
        // element.classList.add('header-bg');
        element.classList.add('sticky');
      }
      else if (number < 200) {
        // element.classList.remove('header-bg');
        element.classList.remove('sticky');
      }
      // if (number > sec2 ) {
      //   this.navIsFixed = true;
      //   const element = document.getElementById('header');
      //   element.classList.add('sticky');
      // } else if ((this.navIsFixed) && number < sec2 ) {
      //   this.navIsFixed = false;
      //   const element = document.getElementById('header');
      //   element.classList.remove('sticky');
      // }
    }
  };*/

  // @HostListener('click', ['$event'])
  // changeClass($event){
  //   $('.menu-close').on('click',function(){
  //     $(this).addClass("nav-test").toggleClass("open");
  //     if($('#menu').hasClass('open')){
  //       $('#menu').removeClass('open');
  //     } else{
  //       $("#menu").addClass('open');
  //     }
  //   });
  // }
  // subMenuClass(){
  //   $('.dropdown').on('touchstart click',function(){
  // $('.dropdown-menu').toggleClass('submenu');
  //   })
  // }

}
