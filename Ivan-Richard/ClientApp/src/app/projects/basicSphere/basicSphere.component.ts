import {Component, Inject, OnInit} from "@angular/core";
import { Router } from "@angular/router";

declare var $:any;
declare const Environment:any;
declare var dat:any;
declare var clear;

@Component({
  selector: 'basicSphere',
  templateUrl : './basicSphere.component.html',
  styleUrls : ['./basicSphere.component.css']
})

export class BasicSphere implements OnInit{

  ngOnInit(){

    var artifact = 'assets/fbx/Sphere.fbx';
    var container = 'basicSphereEnv';
    var datContainer = '.datGUI';

    // var gui  = new dat.GUI({ autoPlace: false}); //why default?

    var textures = [
      'assets/Texture/bluecrack.jpg',
      'assets/Texture/Bluefeathers.jpg',
      'assets/Texture/blueOcean.jpg',
      'assets/Texture/blueWaveSkin.jpg',
      'assets/Texture/camoskin.jpg',
      'assets/Texture/darkbear.jpg',
      'assets/Texture/greenleaf.jpg',
      'assets/Texture/icetexture.jpg'
    ];

    var datGUI = new dat.GUI();

    //create the environment variable
    var basicSphereEnv = new Environment(
        artifact,
        textures,
        $('#'+container).width(),
        $('#'+container).height(),
        container);

    //run the environment.
    basicSphereEnv.run();

    //creating a list of parameters
    var params = {
        animation : 0,
        texture: 0,
        paused : false,
        wireframe: false
    };

    //adding the animation switcher
    datGUI.add(params, 'animation').min(0).max(1).step(1).onFinishChange(function(){
        basicSphereEnv.update({animation: params.animation});
    });

    //adding the texture slider
    datGUI.add(params, 'texture').min(0).max(7).step(1).onFinishChange(function(){
        basicSphereEnv.update({texture : params.texture});
    });

    //adding the pause button
    datGUI.add(params, 'paused').onFinishChange(function(){
        if(params.paused)
            basicSphereEnv.pauseAnimation();
        else
            basicSphereEnv.resumeAnimation();
    });


    //adding the wireframe option
    datGUI.add(params, 'wireframe').onFinishChange(function(){
        basicSphereEnv.update({texture : params.texture});
        basicSphereEnv.update({wireframe : params.wireframe});
    });


    // //add datGUI to the dom Element
    $(datContainer).append($(datGUI.domElement));

  }

  constructor(private router: Router, @Inject('BASE_URL') private baseUrl: string){
    if(this.router.navigated != true){

    }
  }
}
