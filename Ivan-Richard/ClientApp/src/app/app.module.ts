import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutComponent} from './about/about.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ProjectsComponent,
    AboutComponent
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
      { path: 'about', component: AboutComponent, data : {animation: 'isRight'} }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
