webpackJsonp([0],{"+c9E":function(e,t){},AhPL:function(e,t){},Bh8E:function(e,t){},JVsj:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=a("/ocq"),r=a("cVxw"),o=a.n(r),s={name:"Projects",data:function(){return{projects:o.a}},mounted:function(){document.title="James Mitchell — Digital Product Designer",document.getElementsByTagName("body")[0].className="inverted"},beforeDestroy:function(){document.getElementsByTagName("body")[0].classList.remove("inverted"),document.getElementsByTagName("body")[0].style.backgroundColor=null}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e._m(0),e._v(" "),e._l(e.projects,function(t){return 0==t.archive?a("router-link",{key:t.id,staticClass:"image",attrs:{"data-aos":"fade",tag:"div",to:"/projects/"+t.id,data:t}},[a("img",{attrs:{"data-aos":"fade",src:"/static/img/"+t.id+"0.png",alt:t.client}}),e._v(" "),a("h2",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),a("p",{domProps:{innerHTML:e._s(t.client)}})]):e._e()}),e._v(" "),e._m(1)],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"intro"},[t("h1",{attrs:{"data-aos":"fade"}},[this._v("Shaping the brands and digital experiences of tomorrow")]),this._v(" "),t("p",{attrs:{"data-aos":"fade"}},[this._v("From elevating brand perceptions to forging more meaningful bonds with customers, I’ve spent the past six years helping companies realise their potential. The digital economy is a forest of complex, interconnected ideas, and design is our compass; a catalyst for positive change. Only through an iterative process of enquiry, empathy and challenge, can we expect to answer tomorrow’s needs.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"footnote",attrs:{"data-aos":"fade"}},[this._v("Feel free to "),t("a",{attrs:{href:"mailto:hello@jamesmitchell.info"}},[this._v("drop me a line")])])}]};var c=a("VU/8")(s,l,!1,function(e){a("+c9E")},"data-v-0da780fa",null).exports,d={name:"App",data:function(){return{projects:0}},mounted:function(){var e=document.getElementsByTagName("main")[0],t=window.pageYOffset;!function a(){var n=window.pageYOffset,i=n-t,r=1*(2/(1+Math.exp(-3*i))-1);e.style.transform="skewY("+r+"deg)",t=n,requestAnimationFrame(a)}()}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view",{key:this.$route.path})],1)},staticRenderFns:[]};var m=a("VU/8")(d,u,!1,function(e){a("JVsj")},null,null).exports,p={name:"ProjectDetail",data:function(){return{projects:o.a}},props:["id"],computed:{currentProject:function(){for(var e=this.projects,t=0;t<e.length;t++){if(t+1>e.length-1)var a=0;else if(t-1<0)a=t+1;else a=t+1;e[t].next={id:e[a].id,title:e[a].title}}var n=this.id;return e.filter(function(e){return e.id===n})}},mounted:function(){for(var e=this.projects,t=0;t<e.length;t++)e[t].id===this.id&&(document.title="James Mitchell — "+e[t].client)}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[e._l(e.currentProject,function(t){return a("div",[a("div",{staticClass:"intro"},[a("h1",{attrs:{"data-aos":"fade"},domProps:{innerHTML:e._s(t.title)}}),e._v(" "),a("div",{staticClass:"meta"},["nieuwebeelding"!=t.id?a("p",{attrs:{"data-aos":"fade"}},[a("span",[e._v("Client:")]),a("span",{domProps:{innerHTML:e._s(t.client)}})]):e._e(),e._v(" "),a("p",{attrs:{"data-aos":"fade"}},[a("span",[e._v("Role:")]),a("span",{domProps:{innerHTML:e._s(t.role)}})])]),e._v(" "),null!=t.desc?a("p",{attrs:{"data-aos":"fade"},domProps:{innerHTML:e._s(t.desc)}}):e._e()]),e._v(" "),e._l(t.img.length,function(n,i){return a("div",{staticClass:"image"},[a("img",{attrs:{"data-aos":"fade",src:"/static/img/"+t.id+i+".png",alt:t.img[i].alt,title:t.img[i].alt}}),e._v(" "),null!=t.img[i].commentary?a("p",{attrs:{"data-aos":"fade"},domProps:{innerHTML:e._s(t.img[i].commentary)}}):e._e()])})],2)}),e._v(" "),e._l(e.currentProject,function(t){return a("router-link",{key:t.next.id,staticClass:"next",attrs:{"data-aos":"fade",tag:"div",to:"/projects/"+t.next.id,data:t}},[a("p",{staticClass:"sub"},[e._v("Next")]),e._v(" "),a("h2",{domProps:{innerHTML:e._s(t.next.title)}})])})],2)},staticRenderFns:[]};var h=a("VU/8")(p,g,!1,function(e){a("tnEe")},"data-v-3f0ff859",null).exports;n.a.use(i.a);var f=new i.a({routes:[{path:"*",redirect:"/projects"},{path:"/projects",name:"Projects",component:c},{path:"/projects/:id",name:"ProjectDetail",component:h,props:!0}],scrollBehavior:function(e,t,a){return{x:0,y:0}}}),v=a("RInU"),y=a.n(v),b=(a("AhPL"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("router-link",{attrs:{tag:"nav",to:"/projects"}},[t("h2",[this._v("James Mitchell")]),this._v(" "),t("p",{staticClass:"sub"},[this._v("Product Designer")])]),this._v(" "),t("a",{attrs:{href:"mailto:hello@jamesmitchell.info"}},[t("svg",{staticStyle:{"enable-background":"new 0 0 330.001 330.001"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 330.001 330.001","xml:space":"preserve"}},[t("g",[t("path",{attrs:{d:"M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602\n  \t\tL0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"}}),t("polygon",{attrs:{points:"165.001,146.4 310.087,40.001 19.911,40 \t"}})]),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g"),t("g")])])],1)},staticRenderFns:[]});var w=a("VU/8")(null,b,!1,function(e){a("Bh8E")},"data-v-ef445eb4",null).exports;n.a.component("app-header",w),n.a.component("app",m),new n.a({created:function(){y.a.init()},el:"#app",router:f,components:{App:m},template:"<app/>"})},cVxw:function(e,t){e.exports=[{id:"livingdna",title:"Bringing ancestry to&nbsp;life",client:"Living DNA",role:"Information Architecture, User Research, UI/UX",date:"2019",desc:"With a simple swab test, Living DNA illustrates not only your regional ancestry results, but how all we are all related at some point in time. While founded on a noble premise, the product was shrouded in intimidating, scientific jargon. Together with the wider Product team, our first challenge was to liberate the experience of opaque terminology and make test results simple to&nbsp;understand.",img:[{alt:"Dashboard",commentary:"Alongside an overhaul of the existing navigation, which we incrementally deployed, we also developed a dynamic dashboard. This served as the hub of all in-app activity, reporting on order statuses, test results, new user matches and prompts for users to engage with the product on a deeper&nbsp;level."},{alt:"Activation & Upload",commentary:"The onboarding experience was cumbersome and technically unreliable, and so while migrating between engineering stacks, we rethought the login, registration, testing kit activation and DNA upload processes. The new flows tested positively and saw a reduction in customer service&nbsp;tickets."},{alt:"DNA Profiles",commentary:"The product allows account holders to upload multiple DNA profiles, belonging to different people, so that results can be compared. The new navigation affords quick toggling between results, now available globally rather than buried in a settings menu. The DNA Profiles module quickly summarises information in a tabular format, and provides tools to update a wealth of information and preferences, relating specifically to a&nbsp;profile."},{alt:"Ancestry",commentary:"Ancestry results have long been the core of the product, but also where much of the confusion with users arose. Having crafted and tested a new suite of nomenclature to narrate the results, we set about to improve the storytelling. The experience is divided into purchasable units, that a user can unlock via an express checkout. Working with a third-party map service, we were able to achieve dual-synchronicity between peripheral UI controls and the map itself. In this case, the technology allowed for a cleaner, digestible, and fully navigable mobile&nbsp;experience."},{alt:"Wellbeing",commentary:"Finally, we introduced an entirely new offering that reported on health-related traits. The Wellbeing module allows users to select a facet of their wellbeing that they wish to improve, and recieve tailored recommendations based on DNA test results. In the product development process, we distilled our prospective user base into three varied personas, used to model much of our design&nbsp;decisions."}],color:"#173673",archive:!1},{id:"legalzoom",title:"Making incorporation easy",client:"LegalZoom",role:"Visual Design, UI/UX",date:"2018",desc:"LegalZoom is a disruptive online startup, providing legal services including Limited Liability Company (LLC) creation. User&nbsp;research&mdash;led by LegalZoom’s R&D department&mdash;uncovered deficiencies in their LLC landing page. The&nbsp;following proposal sought to communicate key benefits more succinctly and encourage Express Gold subscriptions, among&nbsp;other&nbsp;KPIs.",img:[{alt:"Landing Page Hero Area",commentary:null},{alt:"Checkout Process",commentary:null},{alt:"Landing Page Comparison Table",commentary:null},{alt:"Restructured Footer Component",commentary:null}],color:"#1c70e1",archive:!1},{id:"ibm",title:"Building a community",client:"IBM",role:"Visual Identity, UI/UX",date:"2018",desc:"IBM required a central platform for sharing their Storage division activities with Business Partners. It&nbsp;was aptly named Storage Zone and attributed a bold, vibrant identity. A&nbsp;componentised UI library was developed specifically for the platform, leveraging the IBM Design Language to ensure experiential continuity with other IBM&nbsp;products.",img:[{alt:"Personalised Portal Dashboard",commentary:null},{alt:"Marketing Material",commentary:null},{alt:"Logo Variants",commentary:null},{alt:"Portal Login",commentary:null}],color:"#352969",archive:!1},{id:"hpe",title:"Accelerating life sciences",client:"Hewlett Packard Enterprise",role:"Visual Design, Digital Development",date:"2017",desc:"As part of a strategic focus on high-performance computing, this HPE and NVIDIA campaign was directed at scientists with outdated simulation hardware. Display&nbsp;advertising was used across LinkedIn and ResearchGate, with these touchpoints leading to a microsite that captured data from gated&nbsp;content.",img:[{alt:"Microsite Data Capture",commentary:null},{alt:"Display Advertising",commentary:null},{alt:"Microsite Introduction",commentary:null},{alt:"ResearchGate Article",commentary:null}],color:"#2f8a8a",archive:!1},{id:"hillbrush",title:"Distilling a brand",client:"Hillbrush",role:"Brand Strategy, Visual Identity, Catalogue Design, UI/UX",date:"2016",desc:"First established in 1922, Hillbrush is a cleaning tool manufacturer, now exporting to over 95 countries worldwide. The&nbsp;outcome of a strategic rebrand was a robust <a href='//brand.hillbrush.com' target='_blank'>identity&nbsp;system</a>, using monolithic brand architecture to gel a diverse portfolio. Immediate results were simpler product navigation across eCommerce, a 63% reduction in catalogue length and a clear relationship between previously abstract&nbsp;brands.",img:[{alt:"Brand Portal",commentary:null},{alt:"Master Brand",commentary:null},{alt:"Product Brands",commentary:null},{alt:"Multilingual Product Catalogue",commentary:null}],color:"#0098bc",archive:!1},{id:"lexonis",title:"Humanising resources",client:"Lexonis",role:"Brand Development, Marketing Collateral",date:"2017",desc:"Lexonis is a HR software house focused on competency management. After&nbsp;refreshing their identity, Lexonis required support with brand implementation, including a series of product leaflets and email&nbsp;communications.",img:[{alt:"Reverse of Essentials Product Leaflet",commentary:null},{alt:"Email Communications",commentary:null},{alt:"TalentScape Product Leaflet",commentary:null},{alt:"Product Brand Configuration",commentary:null}],color:"#76b72a",archive:!1},{id:"nieuwebeelding",title:"Painting a typeface",client:"Nieuwe Beelding",role:"Type Design, UI, Digital Development",date:"2014",desc:"Nieuwe Beelding was a self-initiated type design project inspired by painter Piet Mondrian. The&nbsp;typeface is geometric, adopting the strict visual language of Nieuwe Beelding (translated as Neoplasticism). Five&nbsp;weights were produced, ranging from Thin to Black, and presented using a foldout specimen booklet and range of creative posters. A&nbsp;microsite was later developed as a point of sale, allowing users to trial custom content in Nieuwe&nbsp;Beelding.",img:[{alt:"Foldout Specimen Booklet",commentary:null},{alt:"Booklet Spread",commentary:null},{alt:"Sketches",commentary:null},{alt:"Trial Interface",commentary:null}],color:"#81181e",archive:!1}]},tnEe:function(e,t){}},["NHnr"]);