var c = parseInt(document.getElementById('amount').innerHTML);
var t = parseInt(document.getElementById('total').innerHTML);
var p = c/t*100;
document.getElementById('myBar').style.width = `${p}%`;
console.log(p);