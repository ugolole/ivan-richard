import{Component, Inject } from "@angular/core";
import {Route, Router } from "@angular/router";

@Component({
  selector:"about",
  templateUrl:"./about.component.html",
  styleUrls: ['./about.component.css']
})

export class AboutComponent{

  constructor(private router : Router, @Inject('BASE_URL') private baseUrl: string ){

  }

}
