
export function initNavigation(){
   let navigation = document.querySelector("nav");

   if(navigation === undefined) return;
   if(navigation === null) return;

   window.addEventListener("scroll", ()=>{
      navigation.classList.toggle("header", window.scrollY === 0);
   });
}