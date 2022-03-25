'use strict';

import popup from './modules/popup';
import slider from './modules/slider';
import timer from './modules/timer';
import zoom from './modules/zoom';
import scroll from './modules/scroll';
import validation from './modules/validation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

popup('#header .btn', '.header-modal', '.header-modal__close');
popup('.service-button .btn', '.services-modal', '.services-modal__close');
slider('benefits', '.benefits__item', '.benefits__arrow--right img', '.benefits__arrow--left img', 3);
slider('services', '.service-block', '.services__arrow--right img', '.services__arrow--left img',  2);
timer('30 March 2022');
zoom();
scroll();
validation();
calc(100);
sendForm(
   {
      element: [
         {
            type: 'input',
            id: 'calc-total'
         }
      ]
   }
);