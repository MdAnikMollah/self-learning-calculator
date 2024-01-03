let firstvalue = document.querySelector(".firstvalue");
let secondvalue = document.querySelector(".secondvalue");
let result = document.querySelector(".result");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let multiple = document.querySelector(".multiple");
let divide = document.querySelector(".divide");
let ac = document.querySelector(".ac");
let del = document.querySelector(".del");

minus.addEventListener("click", function () {
    result.value = parseFloat(firstvalue.value) - parseFloat(secondvalue.value);
});

multiple.addEventListener("click", function () {
    result.value = parseFloat(firstvalue.value) * parseFloat(secondvalue.value);
});

divide.addEventListener("click", function () {
    result.value = parseFloat(firstvalue.value) / parseFloat(secondvalue.value);
});

plus.addEventListener("click", function () {
    let num1 = parseFloat(firstvalue.value);
    let num2 = parseFloat(secondvalue.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        result.value = num1 + num2;
    } else {
        result.value = "Invalid Input";
    }
});
ac.addEventListener("click", function () {
    firstvalue.value = "";
    secondvalue.value = "";
    result.value = "";
});

del.addEventListener("click", function () {
    let currentValue = result.value;
    result.value = currentValue.slice(0, -1);
});