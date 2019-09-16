import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-cont-right-image',
  templateUrl: './left-cont-right-image.component.html',
  styleUrls: ['./left-cont-right-image.component.scss']
})
export class LeftContRightImageComponent implements OnInit {

  @Input() left_title: string;
  @Input() left_content: string;
  @Input() right_image: string;

  constructor() { }

  ngOnInit() {
  }

}
