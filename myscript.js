
function calculate(){
	let a = document.getElementById("a").value;
	a = parseInt(a);
	let b = document.getElementById("b").value;
	b = parseInt(b);
	let c = Math.sqrt((a * a) + (b * b));

	document.getElementById("hipo").innerHTML = c;
}