import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
} from '@angular/animations';

//basic use case is a standard animation that get applied to every route change
export const fader =
  trigger('routeAnimations',[ //the trigger must match what you placed in the html
    //this determins how to apply styles from one animation to the next
    //star arrow syntax '* <=> *' defines a wild card that will apply to very single route transition
    transition('* <=> *', [
      //angular animations will apply 2 sudo selector to the elements that we are animating
      //one called enter and the other called leave
      //enter is the new page leave is the older page
      //query allows us to select these elements from the dom
      //this query also allows us to animate both the leave and enter
      query(':enter, :leave', [
        //first step in the transition is to prepare these elements so they can be animated
        //to do that effectively we will position them as absoule
        //here we are creating a sytle which will be used to animate in the new page
        //and imediately hide the old page.
        style({
          position:'absolute',
          left:0,
          width:'100%',
          opacity:0,
          transform:'scale(0) translateY(100%)'
        })
      ]),

      //to animate in the new page as it enters
      query(':enter', [
        animate('600ms ease',
        style({opacity: 1, transform: 'scale(1) translate(0)'})),
      ])
    ]),
  ]);


  export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

  export function slideTo(direction:any) {
    const optional = { optional: true };

    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),

      query(':enter', [
        style({ [direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({ [direction]: '100%'}))
        ], optional),
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%'}))
        ])
      ]),
    ];
  }
