import { animate } from './_helpers';

const popup = (btn, popup, close) => {
   const body = document.querySelector('body');
   const popup = document.querySelector(popup);
   const overlay = document.querySelector('.overlay');

   overlay.style.opacity = 0;
   popup.style.transform = 'translate(-50%, -50%) scale(0)';

   const openPopup = () => {
      overlay.style.display = "block";
      popup.style.display = "block";
      animate({
         duration: 500,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            overlay.style.opacity = progress;
            popup.style.transform = `translate(-50%, -50%) scale(${progress})`;
         }
      });
   }

   const closePopup = () => {
      overlay.style.display = "none";
      popup.style.display = "none";
   }

   body.addEventListener('click', (e) => {
      if(e.target.matches(btn)) {
         e.preventDefault();
         openPopup();
      }
      if(e.target.matches(close) ||
         e.target.classList.contains("overlay")) {
            e.preventDefault();
         closePopup();
      }
   });
};

export default popup;