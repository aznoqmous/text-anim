import TextAnim from './text-anim'

document.addEventListener('DOMContentLoaded', ()=>{
  let elements = [...document.querySelectorAll('b')]
  elements.map(element => {
    new TextAnim(element, {
      onBuildChar: (charEl)=>{
        let clone = document.createElement('i')
        clone.innerHTML = charEl.innerHTML
        charEl.appendChild(clone)
      },

      mouseEnter: ()=>{
        let children = [...element.children]
        children.map((el, i)=>{
          setTimeout(()=>{
            el.style.transform = 'translate(0, -100%)'
          }, i * 100)
        })
      },

      mouseLeave: ()=>{
        let children = [...element.children]
        children.map((el, i)=>{
          setTimeout(()=>{
            el.style.transform = 'translate(0, 0)'
          }, i * 100)
        })
      }

    })
  })
})
