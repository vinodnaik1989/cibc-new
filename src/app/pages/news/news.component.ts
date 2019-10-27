import { Component, OnInit } from '@angular/core';
import { BlogData } from '../../models/reusable';
import {Blog} from '../../models/blog';
import {News} from '../../models/news';

const BLOG_DATA_1: BlogData[] = [
  {
    // bgImage:'computer.jpg',
    bgImage:'https://images.unsplash.com/photo-1526566762798-8fac9c07aa98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1593&q=80',
    title:'Main title',
    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    userImg:'user.svg',
    userName:'CIBC User',
    postedDate:'Oct 19',
    postedTime:'1 day ago'
  }
];

const BLOG_DATA_2: BlogData[] = [
  {
    // bgImage:'graph.jpg',
    bgImage:'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
    title:'Main title',
    shortDesc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    userImg:'user.svg',
    userName:'CIBC User',
    postedDate:'Oct 20',
    postedTime:'3 hours ago'
  }
];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  blog: any[] = [
    {
      image:'../../assets/images/blog1.jpg',
      title:"CIBC Expands the leadership team",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image:'../../assets/images/blog2.jpg',
      title:"CIBC Expands the leadership team",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      image:'../../assets/images/blog3.jpg',
      title:"CIBC Expands the leadership team",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }

  ];

  news: any[] = [
    {
      title:"Menu 1",
    },
    {
      title:"Menu 2",
    },
    {
      title:"Menu 3",
    },
    {
      title:"Menu 4",
    },
    {
      title:"Menu 5",
    },

  ];

  blogData1 = BLOG_DATA_1;
  blogData2 = BLOG_DATA_2;

  toggleSearch: boolean = false;
  onToggleSearch() {
    this.toggleSearch = !this.toggleSearch;
  }

  constructor() { }

  ngOnInit() {
  }

  selected = false;

  select(item) {
    this.selected = item;
  };
  isActive(item) {
      return this.selected === item;
  };

}
