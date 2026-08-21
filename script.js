window.addEventListener('load',function(){
   setTimeout(function(){
    document.querySelector('.container').classList.add('loaded')
   },100)
});
function login(){
   alert("smile and arrive:)")
   window.location.href="pizza.html"
}
function orderrecipe(){
   alert("order seccesfull")
   window.location.href="pizza.html"
}
function register(){
   alert("thank you for login")
   window.location.href="pizza.html"
}