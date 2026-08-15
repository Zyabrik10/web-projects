import{E as e,F as t,K as n,N as r,R as i,S as a,U as o,W as s,a as c,c as l,h as u,l as d,o as f,q as p,u as m,x as h,y as g}from"./DbM86tG2.js";import{s as _}from"./BpF5HABT.js";import"./DEDqjojZ.js";import{t as v}from"./D7TJ78Ag.js";var y=h(`<a><!></a>`);function b(t,n){s(n,!0);let a=f(n,[`$$slots`,`$$events`,`$$legacy`,`children`,`href`]),c=i(()=>v.url.pathname.split(`/`).filter(e=>e)),l=i(()=>new URL(v.url.origin+n.href).pathname);var h=y();m(h,(e,t)=>({...a,href:e,class:`link`,[d]:t}),[()=>_(n.href),()=>({active:n.href===`/`?!0:e(c).some(t=>e(l).includes(t))})],void 0,void 0,`svelte-1jt144g`),u(r(h),()=>n.children),p(h),g(t,h),o()}var x=h(`<header class="flex flex-col"><div class="up flex items-center justify-center p-10 svelte-1elxaub"><div style="
                min-width: 100px;
                width: 100%; 
                max-width: 150px;
                border-radius: 50%;
                position: relative;
                "><div style="
                    top: 50%;
                    left: 50%;
                    position:absolute; 
                    width: 100%;
                    height: 100%;
                    
                    transform: translate(-50%, -50%);


                    border-radius: 50%; 
                    background: radial-gradient(
                        closest-side,
                        transparent,
                        rgb(55, 55, 55, 0.4) 95%,
                        rgb(50, 50, 50, 0.9) 100%);

                    backdrop-filter: blur(0.5px);
                "></div> <img style="
                display: block;
                height: auto;
                width: 100%; 
                border-radius: 50%;
                opacity: 0.5;
                " src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a8ec71c8-8e5a-431e-8f76-e0d41ccd94c6/diew8ea-fe5306d3-6457-49ce-94e0-9f7ef18b82f1.png" alt=""/></div></div> <nav class="nav w-full svelte-1elxaub"><ul class="flex w-full items-center justify-center" style="
            background: 
	        linear-gradient(rgba(0, 0, 0, 1) 0%, rgb(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 1)),
            url(https://images6.alphacoders.com/339/thumb-1920-339517.jpg);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

        "><li><!></li> <li><!></li></ul></nav></header>`);function S(e){var i=x(),o=t(r(i),2),s=r(o),c=r(s);b(r(c),{class:`link`,href:`/`,children:(e,t)=>{n(),g(e,a(`Current polls`))},$$slots:{default:!0}}),p(c);var l=t(c,2);b(r(l),{class:`link`,href:`/add-new-poll`,children:(e,t)=>{n(),g(e,a(`Add new poll`))},$$slots:{default:!0}}),p(l),p(s),p(o),p(i),g(e,i)}var C=h(`<input/>`);function w(e,t){s(t,!0);let n=c(t,`value`,15),r=c(t,`type`,3,`text`),i=f(t,[`$$slots`,`$$events`,`$$legacy`,`value`,`type`]);var a=C();m(a,()=>({...i,type:r(),class:`input`}),void 0,void 0,void 0,`svelte-8ff5h4`,!0),l(a,n),g(e,a),o()}var T=h(`<button><!></button>`);function E(e,t){let n=f(t,[`$$slots`,`$$events`,`$$legacy`,`children`]);var i=T();m(i,()=>({...n,class:`button`}),void 0,void 0,void 0,`svelte-18sv61c`),u(r(i),()=>t.children),p(i),g(e,i)}var D=h(`<div><!></div>`);function O(e,t){let n=c(t,`className`,3,``),i=c(t,`style`,3,``),a=c(t,`items`,3,`3`),o=c(t,`itemsGap`,3,`10px`),s=c(t,`dir`,3,`row`),l=c(t,`wrap`,3,`wrap`),d=f(t,[`$$slots`,`$$events`,`$$legacy`,`children`,`className`,`style`,`items`,`itemsGap`,`dir`,`wrap`]);var h=D();m(h,()=>({...d,class:[`grid`,n()],style:`--grid-items:${a()};--grid-items-gap:${o()};--grid-direction:${s()};--grid-wrap:${l()};${i()}`}),void 0,void 0,void 0,`svelte-1308fwv`),u(r(h),()=>t.children),p(h),g(e,h)}export{S as i,E as n,w as r,O as t};