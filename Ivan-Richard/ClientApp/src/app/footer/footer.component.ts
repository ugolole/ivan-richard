import {Component, Inject} from "@angular/core";
import {Router } from "@angular/router";

@Component({
  selector:'footer-tab',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})

export class FooterComponent {
  constructor(private router : Router, @Inject('BASE_URL') private baseUrl: string ){

  }
}
