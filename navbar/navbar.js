var count = localStorage.getItem('count');
var links = document.querySelector('#links-side');
if (count>0){
      links.innerHTML =         `<div id="mens"><a href="mens.html">Mens</a></div>
      <div id="womens"><a href="womens.html">Womens</a></div>
      <div>Hi</div>
      <div><a href="cart.html">Cart</a></div>`;
}
var nav = document.querySelector('#login>a');
var men = document.querySelector('#mens');
var women = document.querySelector('#womens');
women.addEventListener('click', onclick);
men.addEventListener('click', onclick);
function onclick(){
      if (nav.innerText=='Login'){
            event.preventDefault();
            alert('Please login or create an account');
            window.location.href = "login.html";
      }
}