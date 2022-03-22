import { animate } from './_helpers';

const slider = (id, items, right, left, num) => {
   const slider = document.getElementById(id);
   const slides = slider.querySelectorAll(items);

   let numSlides = num;
   let prevSlides = 0;

   const resizeWidth = () => {
      if(window.innerWidth < 576) {
         num = 1;
         numSlides = num;
      }
   };

   const startSlider = () => {
      slides.forEach((slide, index) => {

         slide.style.display = 'none';
         slide.style.opacity = 0;

         if (index >= prevSlides && index < numSlides) {
            slide.style.display = 'block';

            animate({
               duration: 500,
               timing(timeFraction) {
                  return timeFraction;
               },
               draw(progress) {
                  slide.style.opacity = progress;
               }
            });
         }
      });
   };

   const nextSlide = () => {
      prevSlides += num;
      numSlides += num;
      startSlider();
   };

   const prevSlide = () => {
      prevSlides -= num;
      numSlides -= num;
      startSlider();
   };
   
   slider.addEventListener('click', (e) => {
      if (e.target.matches(right)) {
         if (numSlides < slides.length) {
            nextSlide();
         }
      }
      if (e.target.matches(left)) {
         if (prevSlides > 0) {
            prevSlide();
         }
      }
   });

   resizeWidth();
   startSlider();
};

export default slider;