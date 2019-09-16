import { Component, OnInit } from '@angular/core';
// import { IParams } from '../../../../node_modules/angular-particle/lib/index';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent implements OnInit {

  constructor() { }

    myStyle: object = {};
    myParams: object = {};
    Interactivity: object = {};
    width: number = 100;
    height: number = 100;

    ngOnInit() {
      this.myStyle = {
          'position': 'absolute',
          'width': '100%',
          'height': 'auto',
          'z-index': -1,
          'top': 0,
          'left': 0,
          'right': 0,
          'bottom': 0,
      };
      this.myParams = {
        particles: {
          number: {
            value: 100,
          },
          color: {
            value: '#b2b2b2'
          },
          shape: {
            type: 'edge',
          },
          move: {
            enable: 'true',
            speed: 1,
            direction: 'none',
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
            distance: '250',
            color: '#ccc',
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
          },
        }
      };
    }

}