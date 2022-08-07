
const btn = document.getElementById('BurgerID');
const Brightness=document.querySelector('.Brightness');
const CloseBurgers = document.querySelectorAll('#CloseBurger');
console.log(60);
btn.onclick = function() {
    document.getElementById('BurgerMenuId').style.top = '0px';
      Brightness.style.display='block';
      
  }
  CloseBurgers.forEach(CloseBurger=>{
    CloseBurger.onclick=function(){
      document.getElementById('BurgerMenuId').style.top = '-300px';
        Brightness.style.display='none';       
    }
  })