import { TextHola } from './lib'

document.addEventListener('DOMContentLoaded', ()=>{
  let elements = [...document.querySelectorAll('b')]
  elements.map(element => {
    new TextHola(element)
  })
})
