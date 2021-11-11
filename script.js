const input = document.getElementById("input");
const variance = document.getElementById("var");
const square = document.getElementById("sqr");
const mean = document.getElementById("mean");
const xym = document.getElementById("xymean");
const output = document.getElementById("output");

const toFloat = (arr) => arr.map((e) => parseFloat(e)).filter((e) => !Number.isNaN(e));

variance.addEventListener("click", () => {
	const value = toFloat(input.value.split(" "));
	const mean = value.reduce((a, c) => a + c, 0) / value.length;
	const deno = document.querySelector('input[name="denominator"]:checked').value === "Sample" ? 1 : 0;
	output.innerText = value.reduce((a, c) => a + Math.pow(mean - c, 2), 0) / (value.length - deno);
});

square.addEventListener("click", () => {
	let value = toFloat(input.value.split(" "));
	console.log(value);
	output.innerText = value.reduce((a, c) => a + Math.pow(c, 2), 0) / value.length;
});

mean.addEventListener("click", () => {
	let value = toFloat(input.value.split(" "));
	console.log(value);
	output.innerText = value.reduce((a, c) => a + c, 0) / value.length;
});

xym.addEventListener("click", () => {
	let value = input.value.split(",");
	output.innerText =
		value.reduce((a, c) => {
			const temp = toFloat(c.split(" "));
			return a + temp[0] * temp[1];
		}, 0) / value.length;
});
