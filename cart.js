//alert("1")
//var but = document.getElementsByTagName('button');
//var num = document.
//var price = 
function mt(btn){
	var td = btn.parentNode;
	var span = td.getElementsByTagName('span')[0];
	var n =span.innerHTML;
	span.innerHTML = parseInt(prompt("输入数量"));
	if (span.innerHTML>=9999 || span.innerHTML<=0) {
		alert("数量只能在1-9999之间")
		span.innerHTML = 1;
	}
	var tr = td.parentNode;
	var tds = tr.getElementsByTagName("td");
	var price = parseInt(tds[1].innerHTML.slice(1));
	var subTotal = span.innerHTML*price;
	console.log(subTotal);
	tds[3].innerHTML = subTotal.toFixed(2);
}
function cartAdd(btn){
	// body...
	var td = btn.parentNode;
	var span = td.getElementsByTagName('span')[0];
	var n =span.innerHTML;
	n++;
	span.innerHTML=n;
	if(n >= 9999){
		alert("最多只能是9999个")
		span.innerHTML=9999;}
	var tr = td.parentNode;
	var tds = tr.getElementsByTagName("td");
	var price = parseInt(tds[1].innerHTML.slice(1));
	var subTotal = n*price;
	tds[3].innerHTML = subTotal.toFixed(2);

	


}
function cartSub(btn){
	var td = btn.parentNode;
	var span = td.getElementsByTagName('span')[0];
	var n = span.innerHTML;
	n--;
	span.innerHTML=n;
	if(n <= 0){
		alert("最低只能是一个")
		span.innerHTML=1;

	}
	var tr = td.parentNode;
	var tds = tr.getElementsByTagName("td");
	var price = parseInt(tds[1].innerHTML.slice(1));
	if(n>0){var subTotal = n*price;}else{
		var subTotal = 1*price;
	}
	tds[3].innerHTML = subTotal.toFixed(2);
}