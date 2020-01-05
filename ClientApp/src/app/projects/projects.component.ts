import {Component, OnInit, Inject} from "@angular/core";
import {Router} from "@angular/router";

declare var $:any;

@Component({
  selector:"projects",
  templateUrl:"./projects.component.html",
  styleUrls:['./projects.component.css']
})

export class ProjectsComponent implements OnInit{

  ngOnInit(){
    // $('#index').click(function(){
    //    alert("jquery work fine!");

    // });

    // $(document).ready(function() {
    //   $(".fancybox").fancybox();
    // });
  }

  constructor(private router: Router, @Inject('BASE_URL') private baseUrl: string){

  }
}
