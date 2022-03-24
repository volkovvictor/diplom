const scroll = () => {
   const scrollTop = document.querySelector('.smooth-scroll');

   scrollTop.addEventListener('click', () => {
      document.body.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};

export default scroll;
