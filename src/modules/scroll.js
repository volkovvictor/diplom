import { animate } from './_helpers';

const scroll = () => {
   const offer = document.getElementById('offer');
   const scrollTopBtn = document.querySelector('.smooth-scroll');

   scrollTopBtn.style.display = 'none';
   scrollTopBtn.style.opacity = '0';

   window.addEventListener('scroll', () => {
      const top = offer.offsetTop + offer.offsetHeight;

      scrollTopBtn.style.display = 'none';

      if (window.scrollY >= top) {
         scrollTopBtn.style.display = 'block';
         animate({
            duration: 200,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               scrollTopBtn.style.opacity = progress;
            }
         });
      }
   });

   scrollTopBtn.addEventListener('click', () => {
      document.body.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};

export default scroll;
