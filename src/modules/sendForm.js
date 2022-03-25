const sendForm = ({element = []}) => {
   const forms = document.querySelectorAll('form');

   const validate = (inputs) => {
      let success = true;

      inputs.forEach(input => {
         input.classList.add('success');
         
         if (input.getAttribute('type') !== 'hidden' && input.value.trim() === '') {
            input.classList.remove('success');
         }

         if(!input.classList.contains('success')) {
            success = false;
         }
      });

      return success;
   };

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json());
   };

   const submitForm = (form) => {
      const inputs = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((value, key) => {
         formBody[key] = value;
      });

      element.forEach(item => {
         const elem = document.getElementById(item.id);

         if (!elem) return;

         if(item.type === 'block') {
            formBody[elem.id] = elem.textContent;
         }
   
         if(item.type === 'input') {
            formBody[item.id] = elem.value;
         }
      });

      if (validate(inputs)) {
         sendData(formBody).then(data => {
            inputs.forEach(input => input.value = '');
         });
      }
   };

   forms.forEach(form => {
      form.addEventListener('submit', (e) => {
         e.preventDefault();

         submitForm(form);
      });
   });
};

export default sendForm;