document.documentElement.classList.add('js');
const menuToggle=document.querySelector('.menu-toggle');
const siteNav=document.querySelector('#site-nav');
if(menuToggle&&siteNav){menuToggle.addEventListener('click',()=>{const open=siteNav.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.querySelector('span').textContent=open?'×':'☰'});siteNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{siteNav.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.querySelector('span').textContent='☰'}))}
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}})},{threshold:.12});reveals.forEach(item=>observer.observe(item))}else reveals.forEach(item=>item.classList.add('is-visible'));
const countdownParts={hours:document.querySelector('#count-hours'),minutes:document.querySelector('#count-minutes'),seconds:document.querySelector('#count-seconds')};
function updateCountdown(){const now=new Date();const next=new Date(now);next.setHours(24,0,0,0);let remaining=Math.max(0,next-now);const hours=Math.floor(remaining/3600000);remaining-=hours*3600000;const minutes=Math.floor(remaining/60000);remaining-=minutes*60000;const seconds=Math.floor(remaining/1000);if(countdownParts.hours){countdownParts.hours.textContent=String(hours).padStart(2,'0');countdownParts.minutes.textContent=String(minutes).padStart(2,'0');countdownParts.seconds.textContent=String(seconds).padStart(2,'0')}}
updateCountdown();setInterval(updateCountdown,1000);
document.querySelector('#year').textContent=new Date().getFullYear();
