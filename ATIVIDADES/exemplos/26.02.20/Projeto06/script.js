function soma() {
		var n1 = document.getElementById("n1").value;
		var n2 = document.getElementById("n2").value;
		var tt = +n1 + +n2 //ou usar Number(n1)
		document.getElementById("escrever").innerHTML = n1 + " + " + n2 + " = " + tt;
}