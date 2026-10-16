
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".but button");

let input = "";
let first = null;
let op = "";

buttons.forEach(button => {
    button.onclick = () => {
        let value = button.textContent.trim();

        if (value === "AC") {
            input = "";
            first = null;
            op = "";
            display.textContent = "0";
        } 
        else if (["+", "-", "×", "÷"].includes(value)) {
            first = Number(input || 0);
            op = value;
            input = "";
            display.textContent = first + op;
        } 
        else if (value === "=") {
            let second = Number(input);
            let result;

            if (op === "+") result = first + second;
            if (op === "-") result = first - second;
            if (op === "×") result = first * second;
            if (op === "÷") result = second === 0 ? "Error" : first / second;

            input = String(result ?? 0);
            display.textContent = input;
            first = null;
            op = "";
        } 
        else if (value === "%") {
            input = String(Number(input || 0) / 100);
            display.textContent = input;
        } 
        else {
            if (value === "." && input.includes(".")) return;
            input += value;
            display.textContent = op ? first + op + input : input;
        }
    };
});
