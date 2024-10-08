//
function operationDisplay(
  inputKey,
  outputNum = ".numerator",
  outputOperator = ".operator",
  outputDen = ".denominator"
) {
  let inputEl = document.querySelector(inputKey);
  let resultEl = document.querySelector(".result");

  inputEl.addEventListener("click", function (event) {
    event.preventDefault();
    let num = document.querySelector(outputNum);
    let den = document.querySelector(outputDen);
    let oper = document.querySelector(outputOperator);

    if (!isNaN(inputEl.textContent)) {
      if (!oper.textContent) {
        if (num.textContent.length < 6) {
          num.textContent += inputEl.textContent;
        }
      } else {
        if (den.textContent.length < 6) {
          den.textContent += inputEl.textContent;
        }
      }
    } else if (
      ["/", "*", "-", "+"].includes(inputEl.textContent) &&
      num.textContent
    ) {
      if (!oper.textContent) {
        oper.textContent = inputEl.textContent;
      } else {
        alert("Operator already set");
      }
    } else if (inputEl.textContent === "C") {
      if (oper.textContent) {
        den.textContent = den.textContent.slice(0, -1);
      } else {
        num.textContent = num.textContent.slice(0, -1);
      }
    } else if (inputEl.textContent === "DEL") {
      den.textContent = "";
      num.textContent = "";
      oper.textContent = "";
      resultEl.textContent = "";
    } else if (inputEl.textContent === "%") {
      if (!oper.textContent && num.textContent !== "0") {
        num.textContent = parseInt(num.textContent, 10);
        resultEl.textContent = num.textContent / 100;
      }
    } else if (inputEl.textContent === ".") {
      if (oper.textContent) {
        if (den.textContent.length < 4 && !den.textContent.includes(".")) {
          if (den.textContent === "") {
            den.textContent = "0.";
          } else {
            den.textContent += inputEl.textContent;
          }
        }
      } else if (!oper.textContent) {
        if (num.textContent.length < 4 && !num.textContent.includes(".")) {
          if (num.textContent === "") {
            num.textContent = "0.";
          } else {
            num.textContent += inputEl.textContent;
          }
        }
      }
    } else if (inputEl.textContent === "=") {
      if (num.textContent && den.textContent && oper.textContent) {
        if (oper.textContent === "+") {
          let numerator = parseFloat(num.textContent, 10);
          let denominator = parseFloat(den.textContent, 10);
          resultEl.textContent = numerator + denominator;
        } else if (oper.textContent === "-") {
          let numerator = parseFloat(num.textContent, 10);
          let denominator = parseFloat(den.textContent, 10);
          resultEl.textContent = numerator - denominator;
        } else if (oper.textContent === "/") {
          let numerator = parseFloat(num.textContent, 10);
          let denominator = parseFloat(den.textContent, 10);
          let result = (numerator / denominator).toFixed(4);
          resultEl.textContent = result;
        } else if (oper.textContent === "*") {
          let numerator = parseFloat(num.textContent, 10);
          let denominator = parseFloat(den.textContent, 10);
          resultEl.textContent = numerator * denominator;
        }
      }
    }
  });
}
operationDisplay("#key-zero");
operationDisplay("#key-one");
operationDisplay("#key-two");
operationDisplay("#key-three");
operationDisplay("#key-four");
operationDisplay("#key-five");
operationDisplay("#key-six");
operationDisplay("#key-seven");
operationDisplay("#key-eight");
operationDisplay("#key-nine");
operationDisplay("#add");
operationDisplay("#subtract");
operationDisplay("#multiply");
operationDisplay("#divide");
operationDisplay("#key-c");
operationDisplay("#delete");
operationDisplay("#percent");
operationDisplay("#key-point");
operationDisplay("#equals");
