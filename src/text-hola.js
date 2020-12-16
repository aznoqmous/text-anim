import TextAnim from './text-anim'

export default class TextHola extends TextAnim {
  constructor(element, options){
    options = Object.assign({
      timing: 100
    }, options)

    super(element, {
      onBuildChar: (charEl)=>{
        this.setStyles(charEl, {
          position: 'relative'
        })
        let clone = document.createElement('i')
        clone.innerHTML = charEl.innerHTML
        this.setStyles(clone, {
          position: 'absolute',
          left: 0,
          top: '100%'
        })
        charEl.appendChild(clone)
      },

      mouseEnter: ()=>{
        let children = [...element.children]
        children.map((el, i)=>{
          setTimeout(()=>{
            el.style.transform = 'translate(0, -100%)'
          }, i * options.timing)
        })
      },

      mouseLeave: ()=>{
        let children = [...element.children]
        children.map((el, i)=>{
          setTimeout(()=>{
            el.style.transform = 'translate(0, 0)'
          }, i * options.timing)
        })
      }

    })

    this.setStyles(this.element, {
      display: 'inline-block',
      marginBottom: '-0.25rem',
      overflow: 'hidden'
    })
  }
}
