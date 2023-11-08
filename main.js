function execute() {
  //BUTTONS
  const displayBox = document.getElementById("display");
  const backspace = document.getElementById("backspace");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const divide = document.getElementById("divide");
  const multiply = document.getElementById("multiply");
  const equals = document.getElementById("equals");
  const clear = document.getElementById("clear");
  const calculator = document.getElementById("calculator");
  //FUNCTIONS

  let i = 0;
  let array1 = [0];
  let operation = "";
  let array2 = [];

  //DISPLAY NUMBER
  function renderDisplay(array) {
    displayBox.innerHTML = array.join("");
  }
  renderDisplay(array1);

  //NUMBER BUTTON ENTRY
  calculator.addEventListener("click", (event) => {
    const id = event.target.id;
    if (i === 0) {
      if (
        id === "1" ||
        id === "2" ||
        id === "3" ||
        id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9"
      ) {
        i++;
        array1[0] = id;
        renderDisplay(array1);
      }
    } else if (i === 1) {
      if (
        id === "0" ||
        id === "1" ||
        id === "2" ||
        id === "3" ||
        id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9"
      ) {
        array1.push(id);
        renderDisplay(array1);
      }
    } else if (i === 2) {
      if (
        id === "1" ||
        id === "2" ||
        id === "3" ||
        id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9"
      ) {
        i++;
        array2[0] = id;
        renderDisplay(array2);
      }
    } else if (i === 3) {
      if (
        id === "0" ||
        id === "1" ||
        id === "2" ||
        id === "3" ||
        id === "4" ||
        id === "5" ||
        id === "6" ||
        id === "7" ||
        id === "8" ||
        id === "9"
      ) {
        array2.push(id);
        renderDisplay(array2);
      }
    }
  });

  //OPERATIONS BUTTONS
  clear.addEventListener("click", () => {
    array1 = [0];
    array2 = [0];
    operation = "";
    i = 0;
    renderDisplay(array1);
  });

  backspace.addEventListener("click", () => {
    if (i === 1) {
      const index = array1.length - 1;
      array1.splice(index);
      if (array1.length === 0) {
        array1[0] = 0;
        i = 0;
      }
      renderDisplay(array1);
    } else if (i > 2) {
      const index = array2.length - 1;
      array2.splice(index);
      renderDisplay(array2);
    }
  });

  plus.addEventListener("click", () => {
    if (i === 1) {
      operation = "+";
      i++;
    } else if (i > 2) {
      result2("+");
    }
  });

  minus.addEventListener("click", () => {
    if (i === 1) {
      operation = "-";
      i++;
    } else if (i > 2) {
      result2("-");
    }
  });

  divide.addEventListener("click", () => {
    if (i === 1) {
      operation = "/";
      i++;
    } else if (i > 2) {
      result2("/");
    }
  });

  multiply.addEventListener("click", () => {
    if (i === 1) {
      operation = "*";
      i++;
    } else if (i > 2) {
      result2("*");
    }
  });

  equals.addEventListener("click", () => {
    result();
  });

  //CALCULATE RESULT
  function result() {
    if (i > 2) {
      const result = eval(array1.join("") + operation + array2.join(""));
      displayBox.innerHTML = result;
      array1 = [];
      array1 = Array.from(String(result), Number);
      array2 = [];
      i = 1;
    }
  }

  //CALCULATE WITHOUT PRESSING EQUAL BUTTON
  function result2(oldOperation) {
    if (i > 2) {
      const result = eval(array1.join("") + operation + array2.join(""));
      displayBox.innerHTML = result;
      operation = oldOperation;
      array1 = [];
      array1 = Array.from(String(result), Number);
      array2 = [0];
      i = 2;
    }
  }
}
execute();
