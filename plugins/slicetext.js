


export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("slicetext", {
    mounted: (el) => {
      // console.log(el,'el');
      const text = el.textContent;;
      // console.log({text});
      let refined;
      console.log(el.style,'s')
      
      if(text.length >= 100){

        refined = text.slice(0,100) + '...';
      }else if (text <= 70){
        el.style.marginBlock = '1.5rem';
        refined = text.padEnd(20,"&nbsp;")
      }else{
        refined = text;
      }
      // console.log(refined);
      el.textContent = refined;
    },
    unmounted:(el) => {

    }
  }) 
})