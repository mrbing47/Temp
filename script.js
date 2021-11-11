const input = document.getElementById("input");
const variance = document.getElementById("var");
const square = document.getElementById("sqr");
const mean = document.getElementById("mean");
const output = document.getElementById("output");

variance.addEventListener("click", () => {
	const value = input.value.split(" ").map((e) => parseInt(e));
	const mean = value.reduce((a, c) => a + c) / value.length;
	output.innerText = value.reduce((a, c) => a + Math.pow(mean - c, 2), 0) / (value.length - 1);
});

square.addEventListener("click", () => {
	let value = input.value.split(" ").map((e) => parseInt(e));
	output.innerText = value.reduce((a, c) => a + Math.pow(c, 2)) / value.length;
});

mean.addEventListener("click", () => {
	let value = input.value.split(" ").map((e) => parseInt(e));
	console.log(value);
	output.innerText = value.reduce((a, c) => a + c) / value.length;
});
