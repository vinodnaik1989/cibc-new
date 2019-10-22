import { Component, OnInit } from '@angular/core';
import 'lodash';
import {Portfolio} from '../../models/portfolio';
import {Services} from '../../models/services';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {

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

  myStyle: object = {};
  myParams: object = {};
  Interactivity: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    // particles
    this.myStyle = {
      'position': 'absolute',
      'width': '100vw',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = {
      particles: {
        number: {
          value: 30,
        },
        color: {
          value: '#fff'
        },
        shape: {
          type: 'circle',
        },
        move: {
          enable: 'true',
          speed: 2,
          direction: 'random',
        },
        opacity: {
          value: 1,
          random: 'false'
        },
        size: {
          value: '5',
          random: 'true',
        },
        line_linked: {
          enable: 'false',
          distance: '260',
          color: '#333',
          width: '1',
          opacity: '0.2'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover:{
            enable: 'false',
            mode: 'grab',
          },
          resize: true
        },
      }
    };
  }

}
