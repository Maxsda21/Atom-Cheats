//Do not copy this comment: This is a open-source calculator do whatever you want with it do not need no credit

javascript:(function() {  let calculatorWindow = window.open("", "Calculator", "height=300,width=250");  let calculatorBody = calculatorWindow.document.body;  calculatorBody.style.fontFamily = "Arial, sans-serif";  calculatorBody.style.fontSize = "16px";  calculatorBody.style.padding = "10px";  let calculatorDisplay = calculatorWindow.document.createElement("input");  calculatorDisplay.type = "text";  calculatorDisplay.style.width = "100%";  calculatorDisplay.style.marginBottom = "10px";  calculatorDisplay.style.padding = "5px";  calculatorBody.appendChild(calculatorDisplay);  let calculatorButtons = ["7","8","9","+","4","5","6","-","1","2","3","*","0",".","=","/","C"];  calculatorButtons.forEach(function(buttonValue) {    let button = calculatorWindow.document.createElement("input");    button.type = "button";    button.value = buttonValue;    button.style.width = "23%";    button.style.margin = "2px";    button.addEventListener("click", function() {      if (buttonValue === "=") {        calculatorDisplay.value = eval(calculatorDisplay.value);      } else if (buttonValue === "C") {        calculatorDisplay.value = "";      } else {        calculatorDisplay.value += buttonValue;      }    });    calculatorBody.appendChild(button);    if ((calculatorButtons.indexOf(buttonValue) + 1) % 4 === 0) {      calculatorBody.appendChild(calculatorWindow.document.createElement("br"));    }  });})();
