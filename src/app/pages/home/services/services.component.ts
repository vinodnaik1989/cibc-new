import { Component, OnInit } from '@angular/core';
import {Portfolio} from '../../../models/portfolio';
import {Services} from '../../../models/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  portfolio: any[] = [
    {
      image:'../../assets/images/FX_Exchange.jpg',
      subtitle:'WEB DEVELOPMENT',
      title:"FX Exchange Web Application",
      content:'Learn more'
    },
    {
      image:'../../assets/images/mobile-development.jpg',
      subtitle:'MOBILE DEVELOPMENT',
      title:"Flutter: Structured Notes App",
      content:'Learn more'
    }
  ];

  services: any[] = [
    {
      image:'../../../assets/images/services.png',
      title:'CMTS - Capital Market (Security) Token Services',
      content:"CMTS is CIBC Capital Market secure Token Service which is responsible for issuing security tokens within CIBC network. The security tokens issued by CMTS can then be used to identify the holder of the token"
    },
    {
      image:'../../../assets/images/services.png',
      title:'CMAS - Capital Market Authentication Services',
      content:"CMAS is CIBC Capital Market Authentication Services is a system that securely creates, maintains, and manages identity information for CIBC Capital Market external users. CMAS is a trusted provider that lets users use single-sign-on to access other websites."
    },
    {
      image:'../../../assets/images/services.png',
      title:"DCMS - Capital Market Distributed Content Manager",
      content:'DCMS is the technology that support storing, managing, and publishing of digital contents in any form or medium.'
    },
    {
      image:'../../../assets/images/services.png',
      title:"Public Facing Web Analytics",
      content:'This is tool for measurement, collection, analysis and reporting of web data for purposes of understanding and optimizing web usage.'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
