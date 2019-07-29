import {Component, Inject} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector:"projects",
  templateUrl:"./projects.component.html",
  styleUrls:['./projects.component.css']
})

export class ProjectsComponent{
  constructor(private router: Router, @Inject('BASE_URL') private baseUrl: string){

  }
}
