const input = document.getElementById("input");
const variance = document.getElementById("var");
const square = document.getElementById("sqr");
const mean = document.getElementById("mean");
const output = document.getElementById("output");

variance.addEventListener("click", () => {
	const value = input.value.split(" ").map((e) => parseFloat(e));
	const mean = value.reduce((a, c) => a + c) / value.length;
	const deno = document.querySelector('input[name="denominator"]:checked').value === "Sample" ? 1 : 0;
	output.innerText = value.reduce((a, c) => a + Math.pow(mean - c, 2), 0) / (value.length - deno);
});

square.addEventListener("click", () => {
	let value = input.value.split(" ").map((e) => parseFloat(e));
	output.innerText = value.reduce((a, c) => a + Math.pow(c, 2)) / value.length;
});

mean.addEventListener("click", () => {
	let value = input.value.split(" ").map((e) => parseFloat(e));
	console.log(value);
	output.innerText = value.reduce((a, c) => a + c) / value.length;
});
