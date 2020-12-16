export default class TextAnim {
  constructor(element, options={}){
    this.options = Object.assign({
      transition: 'all 0.5s ease',
      display: 'inline-block'
      //mouseEnter: ()=>{},
      //mouseLeave: ()=>{},
      //onBuildChar: ()=>{},
    }, options)

    this.element = element

    this.build()
    this.bind()
  }

  build(){
    let chars = this.element.innerText.split('')
    this.element.innerHTML = ''
    chars.map(char => {
      let charEl = document.createElement('span')
      charEl.style.transition = this.options.transition
      charEl.style.display = this.options.display
      charEl.innerHTML = char
      this.element.appendChild(charEl)
      if(this.options.onBuildChar) this.options.onBuildChar(charEl)
    })
  }

  bind(){
    this.element.addEventListener('mouseenter', ()=>{
      if(this.options.mouseEnter) this.options.mouseEnter(this.element)
    })
    this.element.addEventListener('mouseleave', ()=>{
      if(this.options.mouseLeave) this.options.mouseLeave(this.element)
    })
  }

  static setStyles(element, styles){
    for(let key in styles) element.style[key] = styles[key]
  }

}
