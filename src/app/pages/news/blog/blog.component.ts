import { Component, OnInit, Input } from '@angular/core';
import { BlogData } from '../../../models/reusable';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blogData: any[];

  constructor() { }

  ngOnInit() {
  }

}
