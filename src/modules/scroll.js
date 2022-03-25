const scroll = () => {
   const offer = document.getElementById('offer');
   const scrollTopBtn = document.querySelector('.smooth-scroll');

   scrollTopBtn.style.display = 'none';

   window.addEventListener('scroll', () => {
      const top = offer.offsetTop + offer.offsetHeight;

      if (window.scrollY >= top) {
         scrollTopBtn.style.display = 'block';
      } else {
         scrollTopBtn.style.display = 'none';
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
