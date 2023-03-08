const handleMouseEnter = (el,e) => {
  // console.log(e,'event')
  // console.log(el,'el3m3n')
  el.classList.add('animated');
}
const handleMouseLeave = (el,e) => {
  // console.log(e,'event')
  // console.log(el,'el3m3n')
  el.classList.remove('animated');
}


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("animatenavitem", {
    mounted: (el) => {
      console.log(el,'el');
      el.addEventListener('mouseenter',handleMouseEnter.bind(this,el))
      el.addEventListener('mouseleave',handleMouseLeave.bind(this,el))
    },
    unmounted:(el) => {

    }
  }) 
})