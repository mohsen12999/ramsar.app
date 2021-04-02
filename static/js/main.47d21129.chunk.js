(this["webpackJsonpramsar.app"]=this["webpackJsonpramsar.app"]||[]).push([[0],{43:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(17),i=a.n(s),o=(a(43),a(2));!function(e){e.HomePage="/",e.Register="/register",e.About="/about"}(n||(n={}));var l,d=a(16),j=a(12),h=a(15),m=a(1),b=function(e){var t=e.children,a=c.a.useState(!1),r=Object(d.a)(a,2),s=r[0],i=r[1],o=c.a.useState(null),l=Object(d.a)(o,2),j=l[0],b=l[1];c.a.useEffect((function(){var e=function(e){e.preventDefault(),i(!0),b(e)};return window.addEventListener("beforeinstallprompt",e),function(){return window.removeEventListener("transitionend",e)}}),[]);return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("main",{children:t}),Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"py-4 flex",children:Object(m.jsxs)("ul",{className:"menu items-stretch px-3 shadow-lg bg-base-100 bg-neutral-focus horizontal rounded-box m-auto vazir-font",children:[Object(m.jsx)("li",{children:Object(m.jsxs)(h.a,{to:"/ramsar.app"+n.HomePage,children:[Object(m.jsxs)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"inline-block w-6 h-6 ml-2",children:[Object(m.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(m.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})]}),"\u0635\u0641\u062d\u0647 \u0646\u062e\u0633\u062a"]})}),Object(m.jsx)("li",{children:Object(m.jsxs)(h.a,{to:"/ramsar.app"+n.About,children:[Object(m.jsxs)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"inline-block w-6 h-6 ml-2",children:[Object(m.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(m.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"})]}),"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"]})}),s&&Object(m.jsx)("li",{children:Object(m.jsxs)("button",{onClick:function(){return j?j.prompt():Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'))},children:[Object(m.jsxs)("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"inline-block w-6 h-6 ml-2",children:[Object(m.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(m.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})]}),"\u0646\u0635\u0628 \u0628\u0631\u0646\u0627\u0645\u0647"]})})]})})})]})},p=Object(j.c)((function(e){return{categories:e.data?e.data.categories:[]}}),{})((function(e){var t=e.categories,a=c.a.useState(),n=Object(d.a)(a,2),r=n[0],s=n[1];return Object(m.jsxs)(b,{children:[Object(m.jsxs)("div",{className:"flex "+(r?"flex-row":"flex-col"),children:[Object(m.jsxs)("div",{className:"max-w-xs m-auto",children:[Object(m.jsx)("figure",{children:Object(m.jsx)("img",{src:"/ramsar.app/img/national-park.png",alt:"\u0631\u0627\u0645\u0633\u0631 \u0627\u067e"})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h2",{className:"card-title text-center vazir-font",children:"\u0631\u0627\u0645\u0633\u0631 \u0627\u067e"})})]}),Object(m.jsx)("div",{className:"w-2/3 md:max-w-sm m-auto",children:Object(m.jsxs)("div",{className:"form-control",children:[Object(m.jsx)("input",{type:"text",placeholder:"\u062c\u0633\u062a\u062c\u0648",value:r,onChange:function(e){s(e.target.value)},className:"input input-info input-bordered vazir-font"}),Object(m.jsx)("label",{className:"label",children:Object(m.jsx)("span",{className:"label-text-alt vazir-font",children:"\u0645\u062b\u0644 \u06a9\u0644\u06cc\u062f\u0633\u0627\u0632 \u06cc\u0627 \u062a\u0627\u06a9\u0633\u06cc \u06cc\u0627 \u0628\u06cc\u0645\u0627\u0631\u0633\u062a\u0627\u0646"})})]})})]}),Object(m.jsx)("div",{className:"flex flex-wrap justify-evenly",children:t.filter((function(e){return 0===e.parentId})).map((function(e){return Object(m.jsx)(h.a,{className:"max-w-xs m-2",to:"/ramsar.app",children:Object(m.jsxs)("div",{className:"card bordered shadow-2xl hover:shadow-lg",children:[Object(m.jsx)("figure",{children:Object(m.jsx)("img",{src:"/ramsar.app"+e.img,alt:e.name})}),Object(m.jsx)("div",{className:"card-body",children:Object(m.jsx)("h2",{className:"card-title text-center vazir-font",children:e.name})})]})},e.id)}))})]})})),u=function(){return Object(m.jsx)(b,{children:Object(m.jsx)("div",{className:"hero bg-base-200 main",children:Object(m.jsxs)("div",{className:"flex-col hero-content lg:flex-row-reverse",children:[Object(m.jsx)("img",{src:"/ramsar.app/img/national-park.png",alt:"\u0631\u0627\u0645\u0633\u0631 \u0627\u067e",className:"max-w-sm rounded-lg shadow-2xl"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"mb-5 text-5xl font-bold vazir-font",children:"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0627"}),Object(m.jsx)("p",{className:"mb-5 vazir-font",children:"\u0645\u0646 \u0645\u062d\u0633\u0646 \u0634\u0639\u0628\u0627\u0646\u06cc\u0627\u0646 \u0633\u0627\u0632\u0646\u062f\u0647 \u0627\u06cc\u0646 \u0627\u067e \u0647\u0633\u062a\u0645. \u0631\u0627\u0645\u0633\u0631 \u0627\u067e \u06cc\u06a9 \u067e\u0631\u0648\u0698\u0647 \u0634\u062e\u0635\u06cc \u0647\u0633\u062a \u0648 \u06a9\u0647 \u0628\u062f\u0648\u0646 \u0647\u06cc\u0686 \u0686\u0634\u0645\u200c\u062f\u0627\u0634\u062a \u0645\u0627\u0644\u06cc \u0628\u0631\u0627\u06cc \u06a9\u0645\u06a9 \u0628\u0647 \u0634\u0646\u0627\u062e\u062a \u0648 \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u062f\u0631 \u0633\u0637\u062d \u0634\u0647\u0631 \u0628\u0627 \u06a9\u0645\u06a9 \u062e\u0648\u062f \u0647\u0645\u0634\u0647\u0631\u06cc\u0627\u0646 \u0633\u0627\u062e\u062a\u0647 \u0634\u062f\u0647."}),Object(m.jsx)("p",{className:"mb-5 vazir-font",children:"\u0637\u0631\u062d \u0633\u0627\u062e\u062a \u0627\u06cc\u0646 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0648 \u0646\u0645\u0648\u0646\u0647\u200c\u0647\u0627\u06cc \u0628\u0647\u062a\u0631 \u0648 \u0628\u0627 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0628\u06cc\u0634\u062a\u0631 \u0633\u0627\u0644\u200c\u0647\u0627\u0633\u062a \u0628\u0627 \u0628\u062f\u0642\u0648\u0644\u06cc \u0648 \u067e\u06cc\u0645\u0627\u0646 \u0634\u06a9\u0646\u06cc\u200c\u0647\u0627\u06cc \u0645\u0633\u0626\u0648\u0644\u06cc\u0646 \u0634\u0647\u0631\u06cc \u0628\u0647 \u06a9\u0646\u0627\u0631\u06cc \u0627\u0641\u062a\u0627\u062f\u0647\u200c\u0627\u0646\u062f. \u0627\u06cc\u0646 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u0633\u0627\u062f\u0647 \u0622\u062e\u0631\u06cc\u0646 \u062a\u0644\u0627\u0634\u0645 \u0647\u0633\u062a \u062a\u0627 \u0628\u0647 \u0635\u0648\u0631\u062a \u0645\u0633\u062a\u0642\u0644 \u0648 \u0628\u0627 \u06a9\u0645\u06a9 \u0647\u0645\u0634\u0647\u0631\u06cc\u0627\u0646 \u0648 \u0639\u0644\u0627\u0642\u0647\u200c\u0645\u0646\u062f\u0627\u0646 \u0627\u06cc\u0646 \u067e\u0631\u0648\u0698\u0647 \u0631\u0627 \u0628\u0647 \u0633\u0631\u0627\u0646\u062c\u0627\u0645 \u0628\u0631\u0633\u0627\u0646\u06cc\u0645."}),Object(m.jsx)("p",{className:"mb-5 vazir-font",children:"\u0628\u0647 \u0634\u062f\u062a \u0645\u0646\u062a\u0638\u0631 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u0627\u062a\u060c \u0627\u0646\u062a\u0642\u0627\u062f\u0627\u062a \u0648 \u0645\u0639\u0631\u0641\u06cc \u0645\u06a9\u0627\u0646 \u062c\u062f\u06cc\u062f \u0627\u0632 \u0637\u0631\u0641 \u0634\u0645\u0627 \u0647\u0633\u062a\u06cc\u0645."}),Object(m.jsxs)("p",{className:"mb-2 vazir-font",children:[Object(m.jsxs)("a",{href:"https://instagram.com/ramsarapp",dir:"ltr",className:"btn btn-sm btn-outline btn-secondary mr-2",children:[Object(m.jsxs)("svg",{width:"24",height:"24",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 mr-1 stroke-current",children:[Object(m.jsx)("title",{children:"Instagram icon"}),Object(m.jsx)("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"})]}),"@RamsarApp"]}),Object(m.jsxs)("a",{href:"https://t.me/RamsarApp",target:"_blank",dir:"ltr",className:"btn btn-sm btn-outline btn-primary mr-2",children:[Object(m.jsxs)("svg",{width:"24",height:"24",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 mr-1 stroke-current",children:[Object(m.jsx)("title",{children:"Telegram icon"}),Object(m.jsx)("path",{d:"M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"})]}),"@RamsarApp"]}),Object(m.jsxs)("a",{href:"mailto:info@Ramsar.App",target:"_blank",dir:"ltr",className:"btn btn-sm btn-outline btn-accent mr-2",children:[Object(m.jsxs)("svg",{width:"24",height:"24",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",className:"inline-block w-4 h-4 mr-1 stroke-current",children:[Object(m.jsx)("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),Object(m.jsx)("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),"info@Ramsar.App"]})]})]})]})})})},g=function(){return Object(m.jsx)("div",{children:"Notfound"})},f=function(){return Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/ramsar.app"+n.About,component:u}),Object(m.jsx)(o.a,{path:"/ramsar.app"+n.HomePage+":text?",component:p}),Object(m.jsx)(o.a,{component:g})]})},x=a(18),v=a(8),O=a(6),w=a(13),N=a(36),E=a(33);a(37);!function(e){e.INIT="INIT",e.IDLE="IDLE",e.LOADING="LOADING",e.SUCCEEDED="SUCCEEDED",e.FAILED="FAILED"}(l||(l={}));var A,D="Data",S=[{id:1,name:"\u0645\u0631\u0627\u06a9\u0632 \u062f\u0631\u0645\u0627\u0646\u06cc",img:"/img/ambulance.png",parentId:0},{id:2,name:"\u062e\u062f\u0645\u0627\u062a \u0641\u0646\u06cc",img:"/img/maintenance.png",parentId:0},{id:3,name:"\u0645\u0648\u0633\u0633\u0627\u062a \u0647\u0646\u0631\u06cc",img:"/img/classroom.png",parentId:0},{id:4,name:"\u0648\u0633\u0627\u06cc\u0644 \u0646\u0642\u0644\u06cc\u0647",img:"/img/car.png",parentId:0},{id:5,name:"\u063a\u0630\u0627 \u0648 \u0646\u0648\u0634\u06cc\u062f\u0646\u06cc",img:"/img/coffee.png",parentId:0},{id:6,name:"\u0633\u0627\u06cc\u0631 \u0645\u0631\u0627\u06a9\u0632",img:"/img/library.png",parentId:0}],C=[];!function(e){e.DATA_REQUEST="DATA_REQUEST",e.DATA_SUCCESS="DATA_SUCCESS ",e.DATA_FAILURE="DATA_FAILURE "}(A||(A={}));var I={data:function(e,t){if(void 0===e)return{status:l.INIT,categories:S,facilities:C};var a=t;switch(a.type){case A.DATA_REQUEST:var n=JSON.parse(localStorage.getItem(D));return n?Object(O.a)(Object(O.a)({},n),{},{status:l.LOADING}):Object(O.a)(Object(O.a)({},e),{},{status:l.LOADING});case A.DATA_FAILURE:return Object(O.a)(Object(O.a)({},e),{},{status:l.FAILED});case A.DATA_SUCCESS:if(a.payload&&a.payload.data){var r=a.payload.data,c=Object(O.a)({},e);return r.categories&&(c.categories=r.categories),r.facilities&&(c.facilities=r.facilities),Object(O.a)(Object(O.a)({},c),{},{status:l.SUCCEEDED})}return Object(O.a)(Object(O.a)({},e),{},{status:l.SUCCEEDED});default:return e}}};var z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},T=Object(v.a)(),_=function(e,t){var a=[N.a,Object(E.a)(e)],n=Object(w.c)(Object(O.a)(Object(O.a)({},I),{},{router:Object(x.b)(e)})),r=[],c="undefined"===typeof window?null:window;return c&&c.__REDUX_DEVTOOLS_EXTENSION__&&r.push(c.__REDUX_DEVTOOLS_EXTENSION__()),Object(w.e)(n,t,w.d.apply(void 0,[w.a.apply(void 0,a)].concat(r)))}(T);i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(j.a,{store:_,children:Object(m.jsx)(x.a,{history:T,children:Object(m.jsx)(f,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ramsar.app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ramsar.app","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):k(t,e)}))}}(),L()}},[[73,1,2]]]);
//# sourceMappingURL=main.47d21129.chunk.js.map