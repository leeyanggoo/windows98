(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))d(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const b of e.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&d(b)}).observe(document,{childList:!0,subtree:!0});function u(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(r){if(r.ep)return;r.ep=!0;const e=u(r);fetch(r.href,e)}})();function se(){window.onload=function(){window.addEventListener("mousemove",u=>{gsap.to(".cursor",{duration:.1,left:u.pageX-5,top:u.pageY-10})})},$(document).ready(function(){$(".icon__box > div").on("mousedown",function(){$(this).find("img").addClass("sepia"),$(this).find("span").addClass("selected")}),$(".icon__box > div").on("mouseup",function(){$(this).find("img").removeClass("sepia"),$(this).find("span").removeClass("selected")}),$(".icon__box > div").on("mouseleave",function(){$(this).find("img").removeClass("sepia"),$(this).find("span").removeClass("selected")})}),$(".icon1").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info").html("현재 Music Box를 드래그 중입니다."),$("header").css("background-color","rgba(255,0,0,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".icon2").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info").html("현재 Tetris 폴더를 드래그 중입니다."),$("header").css("background-color","rgba(0,0,255,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".icon3").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info").html("현재 3번 폴더를 드래그 중입니다."),$("header").css("background-color","rgba(0,255,0,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".icon4").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info").html("현재 4번 폴더를 드래그 중입니다."),$("header").css("background-color","rgb(255,255,0, 0.6)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".icon5").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info").html("현재 5번 폴더를 드래그 중입니다."),$("header").css("background-color","rgba(255,105,180,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".icon6").draggable({containment:".icon__box",scroll:!1,drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info    ").html("현재 6번 폴더를 드래그 중입니다."),$("header").css("background-color","rgba(255,255,255,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info    ").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".music__inner").draggable({scroll:!1,handle:".music__title",drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info    ").html("뮤직 플레이어를 드래그 중입니다."),$("header").css("background-color","rgba(0,0,255,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info    ").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".music__list").draggable({scroll:!1,handle:".music__list__title",drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info    ").html("뮤직 리스트를 드래그 중입니다."),$("header").css("background-color","rgba(0,0,255,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info    ").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}}),$(".tetris__wrap").draggable({scroll:!1,handle:".tetris__title",drag:function(){$(".cursor img").attr("src","images/w98move.cur"),$(".info    ").html("Tetris를 드래그 중입니다."),$("header").css("background-color","rgba(0,0,255,0.4)"),$("header").css("transition","all 0.5s")},stop:function(){$(".cursor img").attr("src","images/w98normal.cur"),$(".info    ").html("드래그가 끝났습니다."),$("header").css("background-color",""),setTimeout(t,5e3)}});function i(){let u=new Date;u.getFullYear(),u.getMonth()+1,u.getDate();let d=u.getHours().toString().padStart(2,"0"),r=u.getMinutes().toString().padStart(2,"0");u.getSeconds().toString().padStart(2,"0");let e=d>=12?"오후":"오전";d=d%12,d=d||12,$(".time").html(`${e} ${d}:${r}`)}i(),setInterval(i,6e4);const t=()=>{let u=navigator.userAgent.toLocaleLowerCase(),d=window.screen.width,r=window.screen.height;u.indexOf("windows")!==-1?$(".info").html(`현재 윈도우(Windows)를 사용하고 있으며, 화면 크기는 ${d} X ${r} 입니다.`):u.indexOf("mac")!==-1?$(".info").html(`현재 맥(Mac)을 사용하고 있으며, 화면 크기는 ${d} X ${r} 입니다.`):u.indexOf("linux")!==-1?$(".info").html(`현재 리눅스(Linux)를 사용하고 있으며, 화면 크기는 ${d} X ${r} 입니다.`):$(".info").html(`화면 크기는 ${d} X ${r} 입니다.`)};t(),document.querySelector(".start-button").addEventListener("click",()=>{document.querySelector(".start-menu-wrapper").classList.toggle("show")})}function re(){const i=[{name:"1. Ice & Fire",artist:"King Canyon",img:"music_view01",audio:"music_audio01"},{name:"2. Blue Dream",artist:"Cheel",img:"music_view02",audio:"music_audio02"},{name:"3. Lazy Walk",artist:"Cheel",img:"music_view03",audio:"music_audio03"},{name:"4. Soft Feeling",artist:"Cheel",img:"music_view04",audio:"music_audio04"},{name:"5. We Cruisin'",artist:"Otis McDonald",img:"music_view05",audio:"music_audio05"},{name:"6. Knowpe",artist:"Noir Et Blanc Vie",img:"music_view06",audio:"music_audio06"},{name:"7. Smokey Eye",artist:"Cheel",img:"music_view07",audio:"music_audio07"},{name:"8. Sunday Rain",artist:"Cheel",img:"music_view08",audio:"music_audio08"},{name:"9. Goestories",artist:"Noir Et Blanc Vie",img:"music_view09",audio:"music_audio09"},{name:"10. Papov",artist:"Yung Logos",img:"music_view10",audio:"music_audio10"}],t=document.querySelector(".music__wrap"),u=t.querySelector(".music__control .title h3"),d=t.querySelector(".music__control .title p"),r=t.querySelector(".music__contents .image img"),e=t.querySelector("#main-audio"),b=t.querySelector("#control-play"),R=t.querySelector("#control-pause"),Y=t.querySelector("#control-stop"),X=t.querySelector("#control-prev"),B=t.querySelector("#control-next"),y=t.querySelector("#control-repeat"),z=t.querySelector(".progress"),E=t.querySelector(".progress .bar"),F=t.querySelector(".timer .current"),P=t.querySelector(".timer .duration"),G=t.querySelector("#control-list"),K=t.querySelector(".music__list"),x=t.querySelector(".music__list ul"),M=t.querySelector(".music__list .close");document.querySelector(".icon__box");const D=document.querySelector(".icon__box .icon1"),T=t.querySelector(".music__title button");let h=document.querySelector("#control-vol"),f=document.querySelector("#control-sound"),l=1;e.volume=1;const a=o=>{u.innerText=i[o-1].name,d.innerText=i[o-1].artist,r.src=`images/${i[o-1].img}.gif`,r.alt=i[o-1].name,e.src=`audio/${i[o-1].audio}.mp3`};b.addEventListener("click",()=>{e.play()}),R.addEventListener("click",()=>{e.pause()}),Y.addEventListener("click",()=>{e.currentTime=0,e.pause()}),X.addEventListener("click",()=>{if(y.getAttribute("class")=="shuffle"){let n=Math.floor(Math.random()*i.length+1);do n=Math.floor(Math.random()*i.length+1);while(l==n);l=n,V()}else V()}),B.addEventListener("click",()=>{if(y.getAttribute("class")=="shuffle"){let n=Math.floor(Math.random()*i.length+1);do n=Math.floor(Math.random()*i.length+1);while(l==n);l=n,N()}else N()});const V=()=>{l==1?l=i.length:l--,a(l),e.play(),k()},N=()=>{l==i.length?l=1:l++,a(l),e.play(),k()};y.addEventListener("click",()=>{switch(y.getAttribute("class")){case"repeat":y.setAttribute("class","repeat_one"),y.setAttribute("title","한 곡 반복");break;case"repeat_one":y.setAttribute("class","shuffle"),y.setAttribute("title","랜덤 반복");break;case"shuffle":y.setAttribute("class","repeat"),y.setAttribute("title","전체 반복");break}}),e.addEventListener("timeupdate",o=>{const n=o.target.currentTime,p=o.target.duration;let L=n/p*100,I=z.offsetWidth,C=I*L;E.style.left=`${(C-I)/100-10}px`,e.addEventListener("loadeddata",()=>{let j=e.duration,H=Math.floor(j/60),U=Math.floor(j%60).toString().padStart(2,"0");P.innerText=`${H}:${U}`});let _=Math.floor(n/60),A=Math.floor(n%60).toString().padStart(2,"0");F.innerText=`${_}:${A}`}),z.addEventListener("click",o=>{let n=z.clientWidth,p=o.offsetX,L=e.duration;e.currentTime=p/n*L}),e.addEventListener("ended",()=>{switch(y.getAttribute("class")){case"repeat":N();break;case"repeat_one":e.play();break;case"shuffle":let n=Math.floor(Math.random()*i.length+1);do n=Math.floor(Math.random()*i.length+1);while(l==n);l=n,a(l),e.play();break}k()}),G.addEventListener("click",()=>{K.classList.add("show")}),M.addEventListener("click",()=>{K.classList.remove("show")});for(let o=0;o<i.length;o++){let n=`
            <li data-index="${o+1}">
                <div class="list__img">
                    <img src="images/${i[o].img}.gif" alt="${i[o].name}">
                </div>
                <div class="list__title">
                    <strong>${i[o].name}</strong>
                    <em>${i[o].artist}</em>
                    <audio class="${i[o].audio}" src="audio/${i[o].audio}.mp3"></audio>
                </div>
                <span class="audio-duration" id="${i[o].audio}"></span>
            </li>
        `;x.insertAdjacentHTML("beforeend",n);let p=x.querySelector(`#${i[o].audio}`),L=x.querySelector(`.${i[o].audio}`);L.addEventListener("loadeddata",()=>{let I=L.duration,C=Math.floor(I/60),_=Math.floor(I%60);_<10&&(_=`0${_}`),p.innerText=`${C}:${_}`,p.setAttribute("data-duration",`${C}:${_}`)})}let w=1;h.addEventListener("input",function(){w=e.volume,e.volume=this.value,e.volume==0?f.setAttribute("class","mute"):f.setAttribute("class","on")}),f.addEventListener("click",()=>{f.classList.contains("on")?(w=e.volume,e.volume=0,h.value=0,f.setAttribute("class","mute")):(e.volume=w,h.value=w,f.setAttribute("class","volume on"))});function k(){const o=x.querySelectorAll("li");for(let n=0;n<o.length;n++){let p=o[n].querySelector(".audio-duration");if(o[n].addEventListener("click",function(){O(this)}),o[n].classList.contains("playing")){o[n].classList.remove("playing");let L=p.getAttribute("data-duration");p.innerText=L}o[n].getAttribute("data-index")==l&&(o[n].classList.add("playing"),p.innerText="재생중")}}k();function O(o){l=o.getAttribute("data-index"),a(l),e.play(),k()}window.addEventListener("load",()=>{a(l),k()}),D.addEventListener("dblclick",()=>{t.classList.add("show")}),T.addEventListener("click",()=>{e.currentTime=0,e.pause(),t.classList.remove("show")})}function ne(){let i=!1;const t=document.querySelector(".tetris__play .view ul"),u=document.querySelector(".tetris__score span"),d=document.querySelector(".tetris__level span"),r=document.querySelector(".tetris__next ul");let e=null;const b=document.querySelector(".tetris__wrap"),R=document.querySelector(".icon__box .icon2"),Y=document.querySelector(".tetris__title button"),X=document.querySelector(".tetris__modal"),B=document.querySelector("#tetris-audio"),y=document.querySelector("#tetris-complete"),z=document.querySelector("#tetris-over"),E=document.querySelector(".tetris__music button"),F=document.querySelector(".tetris__ending"),P=document.querySelector(".tetris__pause__btn"),G=20,K=12,x={Tmino:[[[2,1],[0,1],[1,0],[1,1]],[[0,0],[0,1],[0,2],[1,1]],[[0,0],[1,0],[2,0],[1,1]],[[1,2],[0,1],[1,0],[1,1]]],Imino:[[[0,0],[1,0],[2,0],[3,0]],[[0,0],[0,1],[0,2],[0,3]],[[0,0],[1,0],[2,0],[3,0]],[[0,0],[0,1],[0,2],[0,3]]],Omino:[[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]],[[0,0],[1,0],[0,1],[1,1]]],Zmino:[[[0,0],[1,0],[1,1],[2,1]],[[1,0],[0,1],[1,1],[0,2]],[[0,0],[1,0],[1,1],[2,1]],[[1,0],[0,1],[1,1],[0,2]]],Smino:[[[0,1],[1,1],[1,0],[2,0]],[[0,0],[0,1],[1,1],[1,2]],[[0,1],[1,1],[1,0],[2,0]],[[0,0],[0,1],[1,1],[1,2]]],Jmino:[[[0,1],[1,1],[2,1],[0,0]],[[0,0],[0,1],[0,2],[1,0]],[[0,0],[1,0],[2,0],[2,1]],[[1,0],[1,1],[1,2],[0,2]]],Lmino:[[[0,0],[1,0],[2,0],[0,1]],[[0,0],[1,0],[1,1],[1,2]],[[0,1],[1,1],[2,1],[2,0]],[[0,0],[0,1],[0,2],[1,2]]]};let M=0,D=1,T=500,h,f,l;const a={type:"",direction:0,top:0,left:4};function V(){f={...a},k(G,K),N()}function N(){B.currentTime=0,l=setInterval(()=>{B.play()},B.duration),E.setAttribute("title","일시정지"),E.setAttribute("class","tetris__music__pause")}function w(){B.pause(),clearInterval(l),E.setAttribute("title","재생"),E.setAttribute("class","tetris__music__play")}E.addEventListener("click",()=>{E.classList.contains("tetris__music__pause")?w():N()});function k(c,s){for(let m=0;m<c;m++){const g=document.createElement("li"),v=document.createElement("ul");for(let q=0;q<s;q++){const S=document.createElement("li");v.prepend(S)}g.prepend(v),t.prepend(g)}}function O(c=""){const{type:s,direction:m,top:g,left:v}=f;i&&(document.querySelectorAll(".moving").forEach(S=>{S.classList.remove(s,"moving")}),x[s][m].some(S=>{const W=S[0]+v,Q=S[1]+g,ee=t.childNodes[Q]?t.childNodes[Q].childNodes[0].childNodes[W]:null;if(L(ee))ee.classList.add(s,"moving");else return f={...a},setTimeout(()=>{O(),c==="top"&&o()},1),!0})),a.left=v,a.top=g,a.direction=m}function o(){document.querySelectorAll(".moving").forEach(s=>{s.classList.remove("moving"),s.classList.add("seized")}),n()}function n(){const c=t.childNodes;let s=0;for(let m=c.length-1;m>=0;m--){let g=!0;c[m].children[0].childNodes.forEach(v=>{v.classList.contains("seized")||(g=!1)}),g&&(s++,U(s),c[m].remove(),y.play())}k(s,K),p(),oe()}function p(){clearInterval(h),h=setInterval(()=>{A("top",1)},T);const c=Object.entries(x);let s;e===null&&(s=Math.floor(Math.random()*c.length),e=c[s][0]),a.type=e,a.top=0,a.left=4,a.direction=0,f={...a},O(),s=Math.floor(Math.random()*c.length),e=c[s][0],ie()}function L(c){return!(!c||c.classList.contains("seized"))}function I(c){if(i)switch(c.code){case"ArrowRight":A("left",1);break;case"ArrowLeft":A("left",-1);break;case"ArrowDown":A("top",1);break;case"Space":H();break;case"ArrowUp":j();break}}function C(){document.addEventListener("keydown",I)}function _(){document.removeEventListener("keydown",I)}function A(c,s){f[c]+=s,O(c)}function j(){f.direction===3?f.direction=0:f.direction+=1,O()}function H(){clearInterval(h),h=setInterval(()=>{A("top",1)},10)}function U(c){var s=M;M+=c*10,u.textContent=M,Math.floor(s/100)<Math.floor(M/100)&&te()}function te(){D+=1,d.textContent=D,T>50&&(T-=50),clearInterval(h),h=setInterval(()=>{A("top",1)},T)}function J(){t.querySelectorAll("li").forEach(s=>{s.remove()})}async function oe(){const c=[...t.childNodes[0].childNodes[0].childNodes],s=t.childNodes;if(c.some(m=>m.classList.contains("seized"))){clearInterval(h),w(),_(),z.play();let m=[];for(let g=s.length-1;g>=0;g--){let v=new Promise(q=>{setTimeout(()=>{let S=s[g].children[0].childNodes;for(let W=S.length-1;W>=0;W--)S[W].classList.add("End");q()},(s.length-1-g)*100)});m.push(v)}await Promise.all(m),F.style.display="block",document.addEventListener("keydown",function(g){g.key==="Enter"&&(C(),Z(),J(),w(),b.classList.contains("show")&&i&&(p(),F.style.display="none",V()))})}}function ie(){for(;r.firstChild;)r.removeChild(r.firstChild);for(let s=0;s<3;s++){const m=document.createElement("li"),g=document.createElement("ul");for(let v=0;v<4;v++){const q=document.createElement("li");g.prepend(q)}m.prepend(g),r.prepend(m)}x[e][0].forEach(s=>{const[m,g]=s,v=m,q=g;r.children[q].firstChild.children[v].classList.add("block",e)})}P.addEventListener("click",()=>{i?(i=!1,_(),clearInterval(h),w(),P.querySelector("img").src="images/yoshi-stop.png"):(i=!0,C(),h=setInterval(()=>{A("top",1)},T),N(),P.style.animationPlayState="running",P.querySelector("img").src="images/yoshi-run.gif")});function Z(){M=0,D=1,T=500,e=null,a.type="",a.direction=0,a.top=0,a.left=4,f={...a},u.textContent=M,d.textContent=D}R.addEventListener("dblclick",()=>{C(),b.classList.add("show"),X.style.display="block",F.style.display="none"}),document.addEventListener("keydown",function(c){c.key==="Enter"&&b.classList.contains("show")&&!i&&(i=!0,p(),X.style.display="none",V())}),Y.addEventListener("click",()=>{_(),i=!1,b.classList.remove("show"),clearInterval(h),J(),X.style.display="none",w(),Z()})}se();re();ne();