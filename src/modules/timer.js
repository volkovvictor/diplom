const timer = (deadline) => {
   const timers = document.querySelectorAll('.countdown');
   let idInterval;

   const getTime = () => {
      const stopDate = new Date(deadline).getTime();
      const nowDate = new Date().getTime();
      const timeRemainig = (stopDate - nowDate) / 1000;
      const days = Math.floor(timeRemainig / 60 / 60 / 24);
      const hours = Math.floor(timeRemainig / 60 / 60) % 24;
      const minutes = Math.floor(timeRemainig / 60) % 60;
      const seconds = Math.floor(timeRemainig % 60);

      return {timeRemainig, days, hours, minutes, seconds};
   };

   const addZero = (num) => {
      if (num >= 0 && num < 10) {
         return '0' + num;
      } 

      return num;
   };

   const updateTime = () => {
      timers.forEach(timer => {
         const days = timer.querySelector('.count_1 span');
         const hours = timer.querySelector('.count_2 span');
         const minutes = timer.querySelector('.count_3 span');
         const seconds = timer.querySelector('.count_4 span');

         if(getTime().timeRemainig <= 0) {
            days.textContent = '00';
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';

            clearInterval(idInterval);

            return;
         }

         days.textContent = addZero(getTime().days);
         hours.textContent = addZero(getTime().hours);
         minutes.textContent = addZero(getTime().minutes);
         seconds.textContent = addZero(getTime().seconds);
      });
   };

   idInterval = setInterval(updateTime, 1000);
};

export default timer;