
export function initParallax(){
   let parallaxes = Array.from(document.querySelectorAll("[data-parallax]")) as HTMLElement[];

   let update = () => {
      let scrollPos = window.scrollY;

      parallaxes.forEach(parallax => {
         let selfPos = parallax.offsetTop;
         let p = parseFloat(parallax.getAttribute("data-parallax"));

         parallax.style.transform = "translateY(" + (scrollPos - selfPos) / p + "px)";
      });
   };

   window.addEventListener("scroll", update);
   update();
}