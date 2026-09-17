'use strict';
const menu=document.querySelector('#menu');
const nav=document.querySelector('#nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';nav.classList.toggle('open',!expanded);menu.setAttribute('aria-expanded',String(!expanded));});
nav.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
window.matchMedia('(max-width: 720px)').addEventListener('change',closeMenu);
document.querySelector('#year').textContent=String(new Date().getFullYear());
