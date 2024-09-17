let btnEl = document.querySelector("button");
let numEl = document.querySelector(".numerator");
let denEl = document.querySelector(".denominator");
let operatorEl = document.querySelector(".operator");
let resultEl = document.querySelector(".result");
let operationEl = document.querySelector(".operation");

function keyAction(btnEl) {
  selectedBtn = btnEl.textContent;
  charCount = 0;
  if (!isNaN(selectedBtn)) {
    if (!operatorEl.textContent) {
      numEl.textContent += selectedBtn;
      charCount += 1;
    } else {
      denEl.textContent += selectedBtn;
      charCount += 1;
    }
  } else if (["/", "*", "-", "+"].includes(selectedBtn)) {
    if (numEl.textContent) {
      operatorEl.textContent = selectedBtn;
      charCount += 1;
    }
  } else if (selectedBtn === "C") {
    // resultEl.textContent = "";
    numEl.textContent = "";
    denEl.textContent = "";
    operatorEl.textContent = "";
  
  }
}
