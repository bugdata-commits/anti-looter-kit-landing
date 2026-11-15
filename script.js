document.documentElement.classList.add('js');
const menuToggle=document.querySelector('.menu-toggle');
const siteNav=document.querySelector('#site-nav');
if(menuToggle&&siteNav){menuToggle.addEventListener('click',()=>{const open=siteNav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.querySelector('span').textContent=open?'×':'☰'});siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{siteNav.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.querySelector('span').textContent='☰'}))}
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(item=>observer.observe(item))}else reveals.forEach(item=>item.classList.add('is-visible'));
document.querySelector('#year').textContent=new Date().getFullYear();
