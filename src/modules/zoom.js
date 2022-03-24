import { animate } from './_helpers';

const zoom = () => {
   const documents = document.getElementById('documents');
   const overlay = document.querySelector('.overlay');

   const zoomImage = (el) => {
      overlay.innerHTML = '';
         
      const href = el.getAttribute('href');
      const blockImg = document.createElement('div');
      const img = document.createElement('img');
      
      img.setAttribute('src', href);
      img.style.maxHeight = '100%';
      blockImg.append(img);
      blockImg.style.transform = 'scale(0)';

      overlay.append(blockImg);
      overlay.style.cssText = `
         display: flex;
         justify-content: center;
         align-item: center;
      `;

      animate({
         duration: 500,
         timing(timeFraction) {
            return timeFraction;
         },
         draw(progress) {
            overlay.style.opacity = progress;
            blockImg.style.transform = `scale(${progress})`;
         }
      });
   };

   documents.addEventListener('click', (e) => {
      if (e.target.classList.contains('document-overlay')) {
         e.preventDefault();
         const sertificate = e.target.parentNode;
         zoomImage(sertificate);
      }
   });


   documents.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('document-overlay')) {
         animate({
            duration: 200,
            timing(timeFraction) {
               return timeFraction;
            },
            draw(progress) {
               e.target.style.opacity = progress;
            }
         });
      }
   });

   documents.addEventListener('mouseout', (e) => {
      if (e.target.classList.contains('document-overlay')) {
         e.target.style.opacity = 0;
      }
   });
};

export default zoom;