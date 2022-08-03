
const btn = document.getElementById('BurgerID');
const Brightness=document.querySelectorAll('.Brightness');
const CloseBurger = document.querySelectorAll('#CloseBurger');
btn.onclick = function() {
    document.getElementById('BurgerMenuId').style.left = '225px';
    Brightness.forEach(Elem=>{
      Elem.style.filter='brightness(60%)'; 
    })
  }
  CloseBurger.forEach(CloseBurger=>{
    CloseBurger.onclick=function(){
      document.getElementById('BurgerMenuId').style.left = '600px';
      Brightness.forEach(Elem=>{
        Elem.style.filter='brightness(100%)'; 
      })
    }
  })