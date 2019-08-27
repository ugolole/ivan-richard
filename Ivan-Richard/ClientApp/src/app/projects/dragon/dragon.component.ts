import {Component, Inject, OnInit} from "@angular/core";
import { Router } from "@angular/router";

declare var $:any;
declare const Environment:any;
declare var dat:any;

@Component({
  selector: 'dragon',
  templateUrl : './dragon.component.html',
  styleUrls : ['./dragon.component.css']
})

export class Dragon implements OnInit{

  ngOnInit(){

    var artifact = 'assets/fbx/DragonFinal.fbx';
    var container = 'dragonEnv';
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
    var dragonEnv = new Environment(
        artifact,
        textures,
        $('#'+container).width(),
        $('#'+container).height(),
        container,0,-70,0);

    //run the environment.
    dragonEnv.run();

    //creating a list of parameters
    var params = {
        animation : 0,
        texture: 0,
        paused : false,
        wireframe: false
    };

    //adding the animation switcher
    datGUI.add(params, 'animation').min(0).max(3).step(1).onFinishChange(function(){
      dragonEnv.update({animation: params.animation});
    });

    //adding the texture slider
    datGUI.add(params, 'texture').min(0).max(7).step(1).onFinishChange(function(){
      dragonEnv.update({texture : params.texture});
    });

    //adding the pause button
    datGUI.add(params, 'paused').onFinishChange(function(){
      if(params.paused)
        dragonEnv.pauseAnimation();
      else
        dragonEnv.resumeAnimation();
    });


    //adding the wireframe option
    datGUI.add(params, 'wireframe').onFinishChange(function(){
      dragonEnv.update({texture : params.texture});
      dragonEnv.update({wireframe : params.wireframe});
    });


    // //add datGUI to the dom Element
    $(datContainer).append($(datGUI.domElement));

  }

  constructor(private router: Router, @Inject('BASE_URL') private baseUrl: string){
    if(this.router.navigated != true){

    }
  }
}
