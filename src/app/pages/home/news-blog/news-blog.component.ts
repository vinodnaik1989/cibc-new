import { Component, OnInit } from '@angular/core';
import {Blog} from '../../../models/blog';
@Component({
  selector: 'app-news-blog',
  templateUrl: './news-blog.component.html',
  styleUrls: ['./news-blog.component.scss']
})
export class NewsBlogComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
