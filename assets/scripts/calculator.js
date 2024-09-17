// numEl = document.querySelector(".numerator");
// operatorEl = document.querySelector(".operator");
// denEl = document.querySelector(".denominator");
// sevenEl = document.querySelector(".keys");



// function numAction() {
//   if (operatorEl.textContent) {
//     denEl.textContent += sevenEl.textContent;
//   } else {
//     numEl.textContent += sevenEl.textContent;
//   }
//   return numEl.textContent
// }
numEl = document.querySelector(".numerator")
operatorEl = document.querySelector(".operator")
denEl = document.querySelector(".denominator")

function keyAction(button) {
  let entry = button.textContent
  // 
  if (entry == '.') {
    if (!operatorEl.textContent && !denEl.textContent && !numEl.textContent) {
      numEl.textContent = '0.'
    } else if (operatorEl.textContent && numEl.textContent && !denEl.textContent){
      denEl.textContent = '0.'
    };
  }


  if (!isNaN(entry) || entry == '.') {
    if (!operatorEl.textContent) {
      numEl.textContent += entry
    } else{
      denEl.textContent += entry
    };    
  } else if (['*', '/', '-', '+'].includes(entry) ) {
    operatorEl.textContent = entry
  };  
}

