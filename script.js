// TABS
let tabsHeader = document.querySelector('.tabs-header'),
   tabsHeaderItem = document.getElementsByClassName('tabs-header-item'),
   tabsBodyItem = document.getElementsByClassName('tabs-body-item');

tabsHeader.addEventListener('click', function (event) {
   if (event.target.className == 'tabs-header-item') {
      let dataTab = event.target.getAttribute('data-tab');
   
      for (let i = 0; i < tabsHeaderItem.length; i++) {
         tabsHeaderItem[i].classList.remove('active');
      }
      event.target.classList.add('active');
      
      for (let i = 0; i < tabsBodyItem.length; i++) {
         if (dataTab == i) {
            tabsBodyItem[i].style.display = 'block';
         } else {
            tabsBodyItem[i].style.display = 'none';
         }
      }
   }
})

// RANDOMIZER
const buttonRandomizer = document.querySelector('.button-randomizer'),
      randomNumber = document.querySelector('.result-text-randomizer'),
      inputFrom = document.querySelector('.input-from'),
      inputTo = document.querySelector('.input-to');

function getRandomElement(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min)) + min;
}

buttonRandomizer.addEventListener('click', function () {
   let randomElement = getRandomElement(inputFrom.value, inputTo.value);
   smoothly(randomNumber, 'textContent', randomElement)
});

// CALCULATOR PPI
let buttonPpiCalc = document.querySelector('.button-ppi-calc');

buttonPpiCalc.addEventListener('click', function () {
	let inch = document.querySelector('.inch').value,
		 x = document.querySelector('.width').value,
		 y = document.querySelector('.height').value,
		 result = document.querySelector('.result-text-ppi'),
		 sqroot = +(x*x) + +(y*y);

   function ppiResult() {
      return `~${Math.round((Math.sqrt(sqroot) / inch))}`
   }

   const ppiResultFn = ppiResult();
   smoothly(result, 'textContent', ppiResultFn)
})
