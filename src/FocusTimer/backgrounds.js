import { buttonForest } from "./elements.js";

import { backgroundForest, backgroundCampfire, backgroundCoffeshop, backgroundRainstorn  } from "./elements.js";

export function forest() {
    backgroundForest.classList.toggle('hide')
    
    backgroundCampfire.classList.add('hide')
    backgroundCoffeshop.classList.add('hide')
    backgroundRainstorn.classList.add('hide')
}   

export function campFire() {
    backgroundCampfire.classList.toggle('hide')

    backgroundForest.classList.add('hide')
    backgroundCoffeshop.classList.add('hide')
    backgroundRainstorn.classList.add('hide')
}   

export function coffeshop() {
    backgroundCoffeshop.classList.toggle('hide')
    
    backgroundForest.classList.add('hide')
    backgroundCampfire.classList.add('hide')
    backgroundRainstorn.classList.add('hide')
}   

export function rainstorn() {
    backgroundRainstorn.classList.toggle('hide')
    
    backgroundForest.classList.add('hide')
    backgroundCampfire.classList.add('hide')
    backgroundCoffeshop.classList.add('hide')
}   