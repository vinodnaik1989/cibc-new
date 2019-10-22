import { Component, OnInit } from '@angular/core';
import {Technologies} from '../../../models/model'

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologies: any[] = [
    {
      image:'../../../assets/images/Web1.svg',
      image1:'../../../assets/images/Web1-blue.svg',
      title:'Messaging and integration : (Solace)',
      content:"The Solace platform is an advanced event broker technology that supports pub/sub, queuing, request/reply, streaming and replay, and that's available through a purpose-built hardware and a managed services.",
      techicons:[],
    },
    {
      image:'../../../assets/images/Web2.svg',
      image1:'../../../assets/images/Web2-blue.svg',
      title:'Microservices and API design and Development (Java / Spring boot, GoLang)',
      content:"Microservices are a software development technique that structures an application as a collection of loosely coupled services. API is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service. Our dedicated teams design, develop and deploy API's. Learn more:",
      techicons:[
        {icons:'../../../assets/images/java-icon.png'},
        {icons:'../../../assets/images/spring.png'},
        {icons:'../../../assets/images/golang_white.png'},
      ],
    },
    {
      image:'../../../assets/images/Web3.svg',
      image1:'../../../assets/images/Web3-blue.svg',
      title:'Middle Tier design and Development (Java / Spring boot)',
      content:'',
      techicons:[
        {icons:'../../../assets/images/java-icon.png'},
        {icons:'../../../assets/images/spring.png'},
      ],
    },
    {
      image:'../../../assets/images/Web4.svg',
      image1:'../../../assets/images/Web4-blue.svg',
      title:'Web Development (Angular / HTML / CSS)',
      content:"Angular is an open-source framework (not a library!) that uses MVVM pattern as a basis for dynamic single-page web applications. Created by Google and backed by a large community, Angular is centered on delivering a perfect dynamic user experience. With Angular's help, developers can launch apps on any level of complexity and easily maintain them.",
      techicons:[
        {icons:'../../../assets/images/angular.png'},
      ],
    },
    {
      image:'../../../assets/images/Web5.svg',
      image1:'../../../assets/images/Web5-blue.svg',
      title:'Mobile Development (Flutter)',
      content:"Flutter is an open-source mobile application development framework created by Google. It is used to develop applications for Android and iOS, as well as being the primary method of creating applications for Google Fuchsia",
      techicons:[
        {icons:'../../../assets/images/flutter.png'},
      ],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
