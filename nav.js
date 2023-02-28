let menu = document.querySelector('.nav-toggle');
let list = document.querySelector('.links');

menu.addEventListener('click',()=>{
   list.classList.toggle('hide');
})