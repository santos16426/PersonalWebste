(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Juyh:function(t,n,e){"use strict";e.r(n);var a=e("q1tI"),i=e.n(a),r=e("G9T2"),o=e("2REe"),l=e("h4VS"),s=e("vOnD");function c(){var t=Object(l.a)(["\n\tmargin: 10px auto 0 auto;\n\twidth: 150px;\n\theight: 150px;\n\tbox-sizing: border-box;\n\tborder: 5px white solid;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tbox-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n\ttransform: translatey(0px);\n\t&:hover {\n\t\tanimation: float 1s ease-in-out infinite;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n\t@keyframes float {\n\t\t0% {\n\t\t\tbox-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n\t\t\ttransform: translatey(0px);\n\t\t}\n\t\t50% {\n\t\t\tbox-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);\n\t\t\ttransform: translatey(-20px);\n\t\t}\n\n\t\t100% {\n\t\t\tbox-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n\t\t\ttransform: translatey(0px);\n\t\t}\n\t}\n"]);return c=function(){return t},t}var p=s.b.div(c()),d=i.a.createElement,u=function(t){var n=t.imgUrl;return d(p,null,d("a",{href:"#"},d("img",{src:n,alt:"avatar"})))};function g(){var t=Object(l.a)([""]);return g=function(){return t},t}function m(){var t=Object(l.a)(["\n\tsection {\n\t\tpadding: 50px;\n\t\tdisplay: flex !important;\n\t\tflex-direction: column;\n\t\tfont-size: 0.8em;\n\t}\n\t.page {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\ttransition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);\n\t\t-webkit-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);\n\t\t-moz-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);\n\t\t-o-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);\n\t\tcolor: #fff;\n\t\toverflow: hidden;\n\t}\n\t.page {\n\t\tposition: absolute;\n\t}\n\n\t#p1 {\n\t\tleft: 0;\n\t}\n\n\t#p2,\n\t#p3,\n\t#p4,\n\t#p5 {\n\t\tleft: 200%;\n\t}\n\n\t#p1 {\n\t\tbackground: #111111;\n\t}\n\t#p2 {\n\t\tbackground: #333333;\n\t}\n\t#p3 {\n\t\tbackground: #555555;\n\t}\n\t#p4 {\n\t\tbackground: #777777;\n\t}\n\n\t#t2:target #p2,\n\t#t3:target #p3,\n\t#t4:target #p4,\n\t#t5:target #p5 {\n\t\ttransform: translateX(-190%);\n\t\t-webkit-transform: translateX(-190%);\n\t\t-moz-transform: translateX(-190%);\n\t\t-o-transform: translateX(-190%);\n\t\ttransition-delay: 0.4s !important;\n\t}\n\n\t#t2:target #p1,\n\t#t3:target #p1,\n\t#t4:target #p1,\n\t#t5:target #p1 {\n\t\tbackground: black;\n\t}\n\n\t#t2:target #p1 .icon,\n\t#t3:target #p1 .icon,\n\t#t4:target #p1 .icon,\n\t#t5:target #p1 .icon {\n\t\tfilter: blur(3px);\n\t}\n\n\t.icon {\n\t\tcolor: #fff;\n\t\tfont-size: 2em;\n\t\tdisplay: block;\n\t}\n\n\tul .icon:hover {\n\t\topacity: 0.5;\n\t}\n\n\t.page .icon .title {\n\t\tline-height: 2;\n\t}\n\n\t#t2:target ul .icon,\n\t#t3:target ul .icon,\n\t#t4:target ul .icon,\n\t#t5:target ul .icon {\n\t\ttransform: scale(0.6);\n\t\t-webkit-transform: scale(0.6);\n\t\t-moz-transform: scale(0.6);\n\t\t-o-transform: scale(0.6);\n\t\ttransition-delay: 0.25s;\n\t}\n\n\t#t2:target #dos,\n\t#t3:target #tres,\n\t#t4:target #cuatro,\n\t#t5:target #cinco {\n\t\ttransform: scale(0.8) !important;\n\t\t-webkit-transform: scale(0.8) !important;\n\t\t-moz-transform: scale(0.8) !important;\n\t\t-o-transform: scale(0.8) !important;\n\t}\n\tul {\n\t\tposition: absolute;\n\t\tfloat: right;\n\t\tz-index: 1;\n\t\ttop: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tmargin: auto;\n\t\theight: 100%;\n\t\twidth: 10%;\n\t\tpadding: 0;\n\t\ttext-align: center;\n\t\tjustify-content: center;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\tli {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tdiv {\n\t\t\tfont-size: 0.3em !important;\n\t\t}\n\t}\n\n\t#menu .icon {\n\t\tmargin: 30px 0;\n\t\ttransition: all 0.5s ease-out !important;\n\t\t-webkit-transition: all 0.5s ease-out;\n\t\t-moz-transition: all 0.5s ease-out;\n\t\t-o-transition: all 0.5s ease-out;\n\t}\n\n\ta {\n\t\ttext-decoration: none;\n\t}\n\n\t.title,\n\t.hint {\n\t\tdisplay: block;\n\t}\n\n\t.title {\n\t\tfont-size: 38px;\n\t}\n\n\t.hint {\n\t\tfont-size: 13px;\n\t}\n\n\t#p4 .hint {\n\t\tdisplay: inherit !important;\n\t}\n\n\t.hint a {\n\t\tcolor: yellow;\n\t\ttransition: all 250ms ease-out;\n\t\t-webkit-transition: all 250ms ease-out;\n\t\t-moz-transition: all 250ms ease-out;\n\t\t-o-transition: all 250ms ease-out;\n\t}\n\n\t.hint a:hover {\n\t\tcolor: #fff;\n\t}\n\n\t.line-trough {\n\t\ttext-decoration: line-through;\n\t}\n\n\t.page#p1 .icon {\n\t\theight: 220px;\n\t}\n\n\t.page#p1 .icon {\n\t\ttransform: translateX(10%) !important;\n\t}\n\n\t#t2:target .page#p2 .icon,\n\t#t3:target .page#p3 .icon,\n\t#t4:target .page#p4 .icon,\n\t#t5:target .page#p5 .icon {\n\t\ttransform: translateX(0) !important;\n\t\t-webkit-transform: translateX(0) !important;\n\t\t-moz-transform: translateX(0) !important;\n\t\t-o-transform: translateX(0) !important;\n\t\ttransition-delay: 1s;\n\t}\n"]);return m=function(){return t},t}var f=s.b.div(m()),b=s.b.div(g()),h=i.a.createElement,x=function(){return h(b,null,h("h1",null,"hello"))},v=e("CtXQ");function k(){var t=Object(l.a)(["\n\tmargin-top: 10px;\n\n\t.skill-lockup {\n\t\tmax-width: 450px;\n\t\twidth: 100%;\n\t\tfloat: left;\n\t\tmargin-right: 40px;\n\t}\n\n\t.skill-info {\n\t\tdisplay: block;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.skill-name {\n\t\tfloat: left;\n\t\tcolor: white;\n\t\tfont-size: 0.5em;\n\t}\n\n\t.skill-bar {\n\t\tdisplay: block;\n\t\tmax-width: 450px;\n\t\twidth: 100%;\n\t\theight: 10px;\n\t\tbackground: #e3e3e5;\n\t\tclear: both;\n\t\tborder-radius: 10px;\n\t\tmargin: 20px 0;\n\t}\n\n\t.skill-level {\n\t\tdisplay: table;\n\t\theight: 10px;\n\t\tbackground: red;\n\t\tborder-radius: 10px;\n\t}\n\t.skill-percentage {\n\t\twidth: ",";\n\t\t-webkit-animation: progress 2s linear;\n\t\tanimation: progress 2s linear;\n\t}\n\t@keyframes progress {\n\t\tfrom {\n\t\t\twidth: 0%;\n\t\t}\n\t\tto {\n\t\t\twidth: ",";\n\t\t}\n\t}\n"]);return k=function(){return t},t}var w=s.b.div(k(),(function(t){return t.percentage}),(function(t){return t.percentage})),y=i.a.createElement,z=function(t){var n=t.skill,e=t.percentage;return y(w,{percentage:e,className:"skillset"},y("div",{className:"skill-lockup"},y("span",{className:"skill-name"},n),y("span",{className:"skill-bar"},y("span",{className:"skill-level skill-percentage"}))))},N=i.a.createElement,X=function(){return N(f,null,N("div",{id:"t1"},N("div",{id:"t2"},N("div",{id:"t3"},N("div",{id:"t4"},N("div",{id:"t5"},N("ul",{id:"menu"},N("a",{href:"#t1"},N("li",{class:"icon fa fa-bolt",id:"uno"},N(v.a,{type:"code"}),N("div",null,"Skills"))),N("a",{href:"#t2"},N("li",{class:"icon fa fa-keyboard-o",id:"dos"},N(v.a,{type:"laptop"}),N("div",null,"Work"))),N("a",{href:"#t3"},N("li",{class:"icon fa fa-rocket",id:"tres"},N(v.a,{type:"laptop"}),N("div",null,"Education"))),N("a",{href:"#t4"},N("li",{class:"icon fa fa-dribbble",id:"cuatro"},N(v.a,{type:"laptop"}),N("div",null,"Hobbies")))),N("div",{class:"page",id:"p1"},N("section",{class:"icon fa fa-bolt"},N("div",null,N(o.a,{className:"h1",string:"Skills"}),N(z,{skill:"Frontend Development",percentage:"80%"}),N(z,{skill:"Mobile Development",percentage:"40%"}),N(z,{skill:"Backend Development",percentage:"50%"})),N(x,null))),N("div",{class:"page",id:"p2"},N("section",{class:"icon fa fa-keyboard-o"},N(o.a,{className:"h1",string:"Work"}))),N("div",{class:"page",id:"p3"},N("section",{class:"icon fa fa-rocket"},N(o.a,{className:"h1",string:"Education"}))),N("div",{class:"page",id:"p4"},N("section",{class:"icon fa fa-dribbble"},N(o.a,{className:"h1",string:"Hobbies"})))))))))};function E(){var t=Object(l.a)(["\n\tposition: relative;\n\t/* overflow: scroll; */\n\t.content {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tposition: absolute;\n\t\theight: 100vh;\n\t\tz-index: 111;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\t@media screen and (max-width: ",") {\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n\t.left-side {\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\tpadding: 50px 0;\n\n\t\t* {\n\t\t\tjustify-content: center;\n\t\t}\n\n\t\t.skills {\n\t\t\tmax-width: 600px;\n\t\t\tmargin: 0 auto;\n\t\t\tpadding: 5px 20px;\n\t\t\tbackground: rgba(255, 255, 255, 0.5);\n\t\t\tborder-radius: 5px;\n\t\t\tbox-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n\t\t\t* {\n\t\t\t\tjustify-content: start;\n\t\t\t}\n\t\t}\n\t}\n\t.right-side {\n\t\tposition: relative;\n\t\toverflow: hidden;\n\t\twidth: 100%;\n\t\theight: 100vh;\n\t\t@media screen and (max-width: ",") {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\t.bg-img {\n\t\theight: 100vh;\n\t\t-webkit-filter: blur(5px);\n\t\tfilter: blur(5px);\n\t\tbackground-image: url(",");\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tbackground-size: cover;\n\t}\n\t.description {\n\t\tpadding: 30px;\n\t\tcolor: white;\n\t\tfont-size: 1.5em;\n\t\tmax-width: 600px;\n\t\tmargin: 0 auto;\n\t}\n"]);return E=function(){return t},t}var j=s.b.div(E(),(function(t){return t.theme.tablet}),(function(t){return t.theme.tablet}),(function(t){return t.bgUrl?t.bgUrl:""})),J=i.a.createElement;n.default=function(){return J(r.a,null,J(j,{bgUrl:"/images/bg2.jpg"},J("div",{className:"bg-img"}),J("div",{className:"content"},J("div",{className:"left-side"},J(o.a,{className:"h2",string:"Hi there!"}),J(u,{imgUrl:"/images/avatar.png"}),J("p",{className:"description"},"I am Billy Joe, software engineer from Philippines. I have experience with ReactJS, React Naitve, NodeJS, ExpressJS and SuiteScript. Worked in a team with emphasis on Agile Methodologies",J("br",null))),J("div",{className:"right-side"},J(X,null)))))}},rB5V:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return e("Juyh")}])}},[["rB5V",0,2,4,1,3]]]);