let sign = '';

function signAdd() {
    sign = "add";
}
function signSub() {
    sign = "sub";
}
function signMul() {
    sign = "mul";
}
function signDiv() {
    sign = "div";
}



function calculation(a, b) {
    if (sign === "add") {
        return a + b;
    } else if (sign === "sub") {
        return a - b;
    } else if (sign === "mul") {
        return a * b;
    } else if (sign ==="div") {
        return a / b;
    } else {
        return NaN;
    }
}

function calculate() {
    const a = parseInt(document.getElementById("input_1").value);
    const b = parseInt(document.getElementById("input_2").value);
    const result = calculation(a, b);
    displayResult(result);
}



function displayResult(result) {
    document.getElementById("output").innerHTML = result;
}
