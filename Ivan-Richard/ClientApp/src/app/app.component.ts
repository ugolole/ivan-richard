import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from '@angular/router';

import { slider, fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ //create animations array to allow user to select the prefared animation
    fader,
  ]
})
export class AppComponent{
  title = 'app';

  //create a prepare router method to pass-in the dynamic data
  prepareRoute(outlet: RouterOutlet){
    //allows you to pass outlet to the animation directly in the html
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
