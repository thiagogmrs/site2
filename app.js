//back-to-top
const btnTop = document.getElementById('back-to-top')
btnTop.addEventListener('click', ()=>{
   window.scrollTo(0,0);
});
/*email*/
const form = document.querySelector('.link1');
form.addEventListener('click', function(){document.querySelector('.emailPage').classList.add('ds-grid')});

//depoimentos
const depoimentos = document.querySelector('.link2');
depoimentos.addEventListener('click', function(){document.querySelector('.depoimentos').classList.add('ds-grid')});

//vantagens
const vantagens = document.querySelector('.link3');
vantagens.addEventListener('click', function(){document.querySelector('.vantagensPage').classList.add('ds-grid')});

