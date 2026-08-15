let calculator_input = document.querySelector(".calculator .text_input");

function button(number) {
	calculator_input.value = calculator_input.value + number;
}

function back() {
	calculator_input.value = calculator_input.value.substring(0, calculator_input.value.length - 1);
}

function clean() {
	calculator_input.value = "";
}

function ev() {
	(calculator_input.value.length != 0) ? calculator_input.value = eval(calculator_input.value) : calculator_input.value = "";
}