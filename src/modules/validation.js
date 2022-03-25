const validation = () => {
   const inputs = document.querySelectorAll('input');

   inputs.forEach(input => {
      input.addEventListener('input', () => {
         if (input.getAttribute('name') === 'fio') {
            input.value = input.value.replace(/[^А-Яа-яA-Za-z\s]/g, '');
         }

         if (input.getAttribute('name') === 'phone') {
            input.value = input.value.replace(/[^\+\d]/g, '').slice(0, 16);
         }

         if (input.getAttribute('name') === 'calc-input') {
            input.value = input.value.replace(/[^\d]/g, '');
         }
      });
   });
};

export default validation;