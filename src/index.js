'use strict';

import popup from './modules/popup';
import slider from './modules/slider';

popup('#header .btn', '.header-modal', '.header-modal__close');
popup('.service-button .btn', '.services-modal', '.services-modal__close');
slider('benefits', '.benefits__item', '.benefits__arrow--right img', '.benefits__arrow--left img', 3);
slider('services', '.service-block', '.services__arrow--right img', '.services__arrow--left img',  2);