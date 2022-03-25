const calc = (price = 100) => {
   const calc = document.getElementById('calc');
   const calcType = document.querySelector('select[name="calc-type"]');
   const calcTypeMaterial = document.querySelector('select[name="calc-type-material"]');
   const calcInput = document.querySelector('input[name="calc-input"]');
   const calcTotal = document.querySelector('input[name="calc-total"]');

   const countCalc = () => {
      const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
      const calcMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
      const calcInputValue = +calcInput.value;

      let calcSquare = 1;

      if (calcInput.value && calcInput.value > 1) {
         calcSquare = calcInputValue;
      }

      if (calcType.value && calcTypeMaterial.value) {
         return price * calcTypeValue * calcMaterialValue * calcSquare;
      }
   };

   if (!calc) return;

   calc.addEventListener('change', (e) => {
      calcTotal.value = countCalc();
   });
};

export default calc;