import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {BasicSphere} from './projects/basicSphere/basicSphere.component';
import {Dragon} from './projects/dragon/dragon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    FooterComponent,
    BasicSphere,
    Dragon
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      //the prepare method created earlier will look for that property 'isRight' and
      //add the correct animation
      { path: 'projects', component: ProjectsComponent, data: {animation: 'isLeft'}},
      { path: 'about', component: AboutComponent, data : {animation: 'isRight'}},
      { path: 'basicSphere', component: BasicSphere, data : {animation: 'isRight'}},
      { path: 'dragon', component : Dragon, data : {animation : 'isRight'}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
