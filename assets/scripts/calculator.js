function operationDisplay(
  inputKey,
  outputNum = ".numerator",
  outputOperator = ".operator",
  outputDen = ".denominator"
) {
  let inputEl = document.querySelector(inputKey);

  inputEl.addEventListener("click", function (event) {
    event.preventDefault();
    let num = document.querySelector(outputNum);
    let den = document.querySelector(outputDen);
    let oper = document.querySelector(outputOperator);
    if (!isNaN(inputEl.textContent)) {
      if (!oper.textContent) {
        if (num.textContent.length <= 5) {
          num.textContent += inputEl.textContent;
        }
      } else {
        if (den.textContent.length <= 5) {
          den.textContent += inputEl.textContent;
        }
      }
    }
  });
}
operationDisplay("#key-one");
