document.write('<div id="navbar"><div class="nav-link"><a href="index.html">Home</a></div><div class="nav-link"><a href="comm.html">Committees</a></div><div class="nav-link"><a href="eb.html">Executive Board</a></div><div class="nav-link"><a href="resources.html">Resources</a></div><div class="nav-link"><a href="oc.html">Organising Committee</a></div></div>')
document.write('<div class="footer"><p>Made by Rajat Varma</p><a href="mailto:lexmun20@mail.com">lexmun20@gmail.com</a><br><div class="links"><a href="https://instagram.com/lexmun2020"><img src="https://img.icons8.com/small/32/ffffff/instagram-new.png"/></a><a href="http://bit.ly/2YmCKR7"><img src="https://img.icons8.com/small/32/ffffff/facebook-new.png"/></a></div></div>');
var c = parseInt(document.getElementById('amount').innerHTML);
var t = parseInt(document.getElementById('total').innerHTML);
var p = c/t*100;
document.getElementById('myBar').style.width = `${p}%`;
console.log(p);

