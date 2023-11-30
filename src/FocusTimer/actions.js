import state from "./state.js"
import * as timer from "./timer.js"
import * as backgrounds from "./backgrounds.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
  sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function increaseTheCount() {
  timer.increase()
  sounds.buttonPressAudio.play()
}

export function decreaseTheCount() {
  timer.decrease()
  sounds.buttonPressAudio.play()
}

export function ModeForest() {
  backgrounds.forest()

  sounds.buttonForestAudio.play()
  
  sounds.buttonCampfireAudio.pause()
  sounds.buttonRainstornAudio.pause()
  sounds.buttonCoffeShopAudio.pause()
}

export function ModeCampfire() {
  backgrounds.campFire()

  sounds.buttonCampfireAudio.play()
  
  sounds.buttonForestAudio.pause()
  sounds.buttonRainstornAudio.pause()
  sounds.buttonCoffeShopAudio.pause()
}

export function ModeLightning() {
  backgrounds.rainstorn()
  
  sounds.buttonRainstornAudio.play()
  
  sounds.buttonCampfireAudio.pause()
  sounds.buttonForestAudio.pause()
  sounds.buttonCoffeShopAudio.pause()
}

export function ModeStorefront() {
  backgrounds.coffeshop()
  sounds.buttonCoffeShopAudio.play()


  sounds.buttonCoffeShopAudio.play()
  
  sounds.buttonCampfireAudio.pause()
  sounds.buttonForestAudio.pause()
  sounds.buttonRainstornAudio.pause()
}