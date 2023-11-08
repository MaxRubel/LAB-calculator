//BUTTONS
const displayBox = document.getElementById("display");
const backspace = document.getElementById("backspace");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const num3 = document.getElementById("num3");
// const num4 = document.getElementById("num4");
// const num5 = document.getElementById("num5");
// const num6 = document.getElementById("num6");
// const num7 = document.getElementById("num7");
// const num8 = document.getElementById("num8");
// const num9 = document.getElementById("num9");
const calculator = document.getElementById("calculator");
//FUNCTIONS

let i = 0;
let array1 = [0];
let operation = "";
let array2 = [];

function renderDisplay(array) {
  displayBox.innerHTML = array.join("");
  console.log("i = " + i);
  console.log(array1 + operation + array2);
}

renderDisplay(array1);

const ners = document.getElementById("houseButtons");
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
    renderDisplay(array1);
  } else if (i === 3) {
    const index = array2.length - 1;
    array2.splice(index);
    renderDisplay(array2);
  }
});

plus.addEventListener("click", () => {
  if (i === 1) {
    operation = "+";
    i++;
    console.log(operation);
    console.log(i);
  }
});

minus.addEventListener("click", () => {
  if (i === 1) {
    operation = "-";
    i++;
    console.log(operation);
  }
});

divide.addEventListener("click", () => {
  if (i === 1) {
    operation = "/";
    i++;
    console.log(operation);
  }
});

divide.addEventListener("click", () => {
  if (i === 1) {
    operation = "*";
    i++;
    console.log(operation);
  }
});

equals.addEventListener("click", () => {
  const result = array1.join("") + operation + array2.join("");
  displayBox.innerHTML = result;
});
