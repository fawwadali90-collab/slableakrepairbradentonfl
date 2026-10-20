// Mobile menu + FAQ accordion
document.addEventListener('DOMContentLoaded',function(){
var b=document.querySelector('.burger'),n=document.querySelector('.nav');
if(b&&n){
b.addEventListener('click',function(){n.classList.toggle('open');document.body.classList.toggle('menu-open')});
n.querySelectorAll('a').forEach(function(a){if(a.parentElement.classList.contains('has-drop'))return;a.addEventListener('click',function(){n.classList.remove('open');document.body.classList.remove('menu-open')})});
n.querySelectorAll('.has-drop>a').forEach(function(a){a.addEventListener('click',function(e){if(window.innerWidth<=1100){e.preventDefault();a.parentElement.classList.toggle('open')}})});
}
document.querySelectorAll('.faq h3').forEach(function(h){
h.addEventListener('click',function(){h.parentElement.classList.toggle('open')});
});
});
// Theme 12 motion: scroll reveal
(function(){
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(reduce||!('IntersectionObserver' in window))return;
var els=document.querySelectorAll('.sec-head,.feat,.svc-card,.tier,.sym,.step,.habit,.post-card,.qa,.qa-ink,.qcard,.faq-split,.zip-box,.media-row');
els.forEach(function(el){el.setAttribute('data-reveal','');});
document.querySelectorAll('.feat3,.svc-grid,.tiers,.sym-grid,.post-grid').forEach(function(grid){
Array.prototype.forEach.call(grid.children,function(child,i){
child.style.transitionDelay=Math.min(i*0.07,0.5)+'s';
});
});
var io=new IntersectionObserver(function(entries){
entries.forEach(function(e){
if(e.isIntersecting){e.target.classList.add('revealed');io.unobserve(e.target);}
});
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){io.observe(el);});
})();
// Theme 12 motion: hero live pill + marquee band (homepage only)
(function(){
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var path=location.pathname;
if(path!=='/'&&path!=='/index.html')return;
var heroIn=document.querySelector('.hero-in');
if(heroIn){
var pill=document.createElement('div');
pill.className='hero-live';
pill.innerHTML='<span class="live-dot"></span> Technicians on call now';
heroIn.insertBefore(pill,heroIn.firstChild);
}
if(reduce)return;
var hero=document.querySelector('.hero');
if(!hero)return;
var items=['Emergency Slab Leak Repair','Slab Leak Detection','Pipe Rerouting','Epoxy Pipe Lining','Serving Bradenton and Manatee County','Call (941) 307-1712'];
function group(){
var g='<div class="marquee-group" aria-hidden="true">';
items.forEach(function(t,i){g+='<span>'+t+'</span>';if(i<items.length-1)g+='<span class="m-dot">\u2022</span>';});
return g+'</div>';
}
var band=document.createElement('div');
band.className='marquee-band';
band.setAttribute('aria-hidden','true');
band.innerHTML='<div class="marquee-track">'+group()+group()+'</div>';
hero.after(band);
})();
