"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{6070:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var i=a(5893),n=a(7294),r=a(6333),t=a(907),c=function(e){var s=e.img;return(0,i.jsx)("img",{src:s,alt:"Project Image"})},o=function(e){var s=e.playing,a=(0,n.useRef)(null);return(0,n.useEffect)((function(){null==s&&a.current.pause()}),[s]),(0,i.jsx)("video",{ref:a,src:"img/projects/video.mp4",id:"video",className:"responsive-video",controls:"controls",autoPlay:!1,poster:"img/projects/project-6.jpg"})},l=function(e){var s=e.playing;return(0,n.useEffect)((function(){var e=document.querySelector(".youtube-video");null==s&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}),[s]),(0,i.jsx)("div",{className:"videocontainer",children:(0,i.jsx)("iframe",{className:"youtube-video",src:"https://www.youtube.com/embed/7e90gBu4pas?enablejsapi=1&version=3&playerapiid=ytplayer"})})},m=function(){return(0,i.jsx)("div",{id:"slider",className:"carousel slide portfolio-slider","data-ride":"carousel",children:(0,i.jsxs)(t.Z,{className:"carousel-inner",prevIcon:(0,i.jsx)("a",{className:"carousel-control-prev",href:"#slider","data-slide":"prev",children:(0,i.jsx)("span",{className:"fa fa-chevron-left carousel-controls"})}),nextIcon:(0,i.jsx)("a",{className:"carousel-control-next",href:"#slider","data-slide":"next",children:(0,i.jsx)("span",{className:"fa fa-chevron-right carousel-controls"})}),prevLabel:"",nextLabel:"",indicators:!1,children:[(0,i.jsx)(t.Z.Item,{className:"carousel-item",interval:1e3,children:(0,i.jsx)("img",{src:"img/projects/project-8.jpg",alt:"slide 1"})}),(0,i.jsx)(t.Z.Item,{className:"carousel-item",interval:1e3,children:(0,i.jsx)("img",{src:"img/projects/project-7.jpg",alt:"slide 2"})}),(0,i.jsx)(t.Z.Item,{className:"carousel-item",interval:1e3,children:(0,i.jsx)("img",{src:"img/projects/project-5.jpg",alt:"slide 3"})})]})})},j=[{img:"img/projects/project-1.jpg",name:"F\xeate Votive d'Ard\xe8che",format:"img",project:"Site d'informations",client:"Projet Personnel",duration:"1 semaine",technologies:["REACTjs"," / TAILWINDCSS"],lien:"https://fetevotive.fr"},{img:"img/projects/project-2.jpg",name:"Trading-IA",format:"img",project:"Site d'informations",client:"Trading-IA",duration:"2 ans",technologies:["Wordpress"],lien:""},{img:"img/projects/project-3.jpg",name:"Gite le Cade",format:"img",project:"Location d'un g\xeete",client:"LMNP Le Cade",duration:"3 Jours",technologies:["Wordpress"],lien:"https://gitelecade.fr"},{img:"img/projects/project-4.jpg",name:"Age Calculator",format:"img",project:"Calculateur d'age",client:"projet personnel",duration:"1 journ\xe9e",technologies:["React"," / tailwind"],lien:"https://marco-vassal.github.io/age-calculator/"},{img:"img/projects/project-5.jpg",name:"Projet API",format:"img",project:"Interaction avec une API",client:"Projet d'\xe9tudes",duration:"2 Semaines",technologies:["HTML"," / JAVASCRIPT"," / CSS"],lien:"https://jojo-jrd.github.io/m4103c-projet-josseraj-guicluca-vassalm/"},{img:"img/projects/project-6.jpg",name:"E-commerce",format:"img",project:"Challenge Front end mentor",client:"Projet personnel",duration:"1/2 journ\xe9e",technologies:["HTML"," / css"],lien:"https://marco-vassal.github.io/product-preview-card-component-main/"}],d=function(){var e=(0,n.useContext)(r.Z).nav,s=(0,n.useState)(null),a=s[0],t=s[1];return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsxs)("section",{id:"portfolio",className:"".concat("portfolio"===e?"active":""),children:[(0,i.jsxs)("div",{className:"portfolio-container ".concat(a?"slide-out overflow-hidden":""),children:[(0,i.jsxs)("div",{className:"container page-title text-center",children:[(0,i.jsxs)("h2",{className:"text-center",children:["mon ",(0,i.jsx)("span",{children:"portfolio"})]}),(0,i.jsx)("span",{className:"title-head-subtitle",children:"Quelques projets r\xe9cents que j'ai r\xe9alis\xe9s."})]}),(0,i.jsx)("div",{className:"portfolio-section",children:(0,i.jsx)("div",{className:"container cd-container",children:(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:"row",id:"portfolio-items",children:j.map((function(e,s){return(0,i.jsx)("li",{className:"col-12 col-md-6 col-lg-4",children:(0,i.jsxs)("a",{href:"#","data-type":"project-1",onClick:function(){return t(s+1)},children:[(0,i.jsx)("img",{src:e.img,alt:"Project",className:"img-fluid"}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{children:e.name})})]})},s)}))})})})}),(0,i.jsx)("div",{className:"portfolio-overlay",onClick:function(){return t(null)}})]}),j.map((function(e,s){return(0,i.jsxs)("div",{className:"project-info-container project-1 ".concat(a===s+1?"slide-in":""),children:[(0,i.jsx)("div",{className:"project-info-main-content",children:"img"==e.format?(0,i.jsx)(c,{img:e.img}):"youtube"==e.format?(0,i.jsx)(l,{playing:a}):"slider"==e.format?(0,i.jsx)(m,{}):(0,i.jsx)(o,{playing:a})}),(0,i.jsxs)("div",{className:"projects-info row",children:[(0,i.jsxs)("div",{className:"col-12 col-sm-6 p-none",children:[(0,i.jsx)("h3",{className:"font-weight-600 uppercase",children:e.name}),(0,i.jsxs)("ul",{className:"project-details",children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-file-text-o"}),(0,i.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Project"," "]}),":"," ",(0,i.jsx)("span",{className:"font-weight-600 uppercase",children:e.project})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-user-o"}),(0,i.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Client"," "]}),":"," ",(0,i.jsx)("span",{className:"font-weight-600 uppercase",children:e.client})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-hourglass-o"}),(0,i.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Temps de r\xe9alisation"," "]}),":"," ",(0,i.jsx)("span",{className:"font-weight-600 uppercase",children:e.duration})]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fa fa-code"})," ",(0,i.jsxs)("span",{className:"font-weight-400 project-label",children:[" ","Technologies"]})," ",":"," ",(0,i.jsx)("span",{className:"font-weight-600 uppercase",children:e.technologies.map((function(e,s){return(0,i.jsx)(n.Fragment,{children:e},s)}))})]})]}),""!==e.lien&&(0,i.jsx)("a",{href:e.lien,target:"_blank",rel:"noreferrer",className:"btn",children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fa fa-external-link"}),"aper\xe7u"]})})]}),(0,i.jsx)("div",{className:"col-6 p-none text-right",children:(0,i.jsx)("a",{href:"#",className:"btn btn-secondary close-project",onClick:function(){return t(null)},children:(0,i.jsxs)("span",{children:[(0,i.jsx)("i",{className:"fa fa-close"}),"Fermer"]})})})]})]},s)}))]}),a&&(0,i.jsx)("span",{className:"back-mobile ".concat(a?"is-visible":""),onClick:function(){return t(null)},children:(0,i.jsx)("i",{className:"fa fa-arrow-left"})})]})}}}]);