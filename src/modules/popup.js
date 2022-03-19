import { animate } from './_helpers';

const popup = (btn, popup, close) => {
   const body = document.querySelector('body');
   const headerModal = document.querySelector(popup);
   const overlay = document.querySelector('.overlay');

   overlay.style.opacity = 0;
   headerModal.style.transform = 'translate(-50%, -50%) scale(0)';

   const openPopup = () => {
      overlay.style.display = "block";
      headerModal.style.display = "block";
      animate({
         duration: 500,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            overlay.style.opacity = progress;
            headerModal.style.transform = `translate(-50%, -50%) scale(${progress})`;
         }
      });
   }

   const closePopup = () => {
      overlay.style.display = "none";
      headerModal.style.display = "none";
   }

   body.addEventListener('click', (e) => {
      if(e.target.matches(btn)) {
         openPopup();
      }
      if(e.target.matches(close) ||
         e.target.classList.contains("overlay")) {
         closePopup();
      }
   });
};

export default popup;