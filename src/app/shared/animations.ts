import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export let scaleDown = trigger('scaleDown', [
    // state(),
    transition('void => *', [
        style({ transform: "scale(1.2)" }),
        animate(1200)
    ]),//'void => * or :enter
]);

//For mat cards staggering up
//Not giving desired result
export let listStagger = trigger('listStagger', [
    transition('void => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
            animate('1s ease-in', keyframes([
                style({ opacity: 0, transform: "translateY(75px)", offset: 0 }),
                style({ opacity: 0.5, transform: "translateY(32.5px)", offset: 0.5 }),
                style({ opacity: 1, transform: "translateY(0px)", offset: 1 })
            ]))
        ]), {optional: true})
    ])
]);

//For Routing animation
export let moveInOut = trigger('moveInOut', [
    transition('* => *', [
    style({ opacity: 0,/* transform: "translateX(-100%)" */}),
        animate(500)
    ]),
    /*transition('* => void', [
        animate('1.5s', style(
            {
                opacity: 1,
                transform: "translate(100%"
            }
        ))
    ])*/
]) 
/*
export let moveInOut =  trigger('moveInOut', [
      state('void', style({position: 'fixed', width: '100%'}) ),
      state('*', style({position: 'fixed', width: '100%'}) ),
      transition(':enter', [
        style({opacity:'0', transform: 'translateX(100px)'}),
        animate('.6s ease-in-out', style({opacity:'1', transform: 'translateX(0)'}))
      ]),
      transition(':leave', [
        style({opacity:'1', transform: 'translateX(0)'}),
        animate('.3s ease-in-out', style({opacity:'0', transform: 'translateX(-200px)'}))
      ])
    ]);*/
  