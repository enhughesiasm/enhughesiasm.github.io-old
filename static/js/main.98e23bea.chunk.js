(this["webpackJsonpenhughesiasm.github.io"]=this["webpackJsonpenhughesiasm.github.io"]||[]).push([[0],{12:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return a}));i(22),i(1);function n(e){var t,i=0;if(0===e.length)return i;for(t=0;t<e.length;t++)i=(i<<5)-i+e.charCodeAt(t),i|=0;return i}function s(e,t,i){var n=i||[];if("object"==typeof e)for(var a in e)s(e[a],t?t+"["+a+"]":a,n);else n.push(t+"="+encodeURIComponent(e));return n.join("&")}function a(e,t,i,n){window.gtag&&window.gtag("event",e,{event_category:t,event_label:i||"",value:n||0})}},15:function(e,t,i){"use strict";i(1);var n=i(0);t.a=function(e){return Object(n.jsx)("i",{className:"fas fa-"+e.icon,style:e.style})}},20:function(e,t,i){"use strict";var n=i(5),s=i(6),a=i(8),c=i(7),r=i(1),o=i.n(r),l=i(26),h=i(0),u=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(e){var s;Object(n.a)(this,r),s=t.call(this,e);var a=i(65);return s.state={helmetData:a},s}return Object(s.a)(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.page||"missing",t=this.state.helmetData[e];return t||(console.error("missing page in helmetcontainer: "+e),t=this.state.helmetData.missing),Object(h.jsxs)(l.Helmet,{titleTemplate:"%s - enhughesiasm",defaultTitle:"The online home of Neil Hughes - enhughesiasm",children:[Object(h.jsx)("title",{children:t.title}),Object(h.jsx)("meta",{name:"description",content:t.description}),t.canonicalUrl&&Object(h.jsx)("link",{rel:"canonical",href:t.canonicalUrl}),Object(h.jsx)("meta",{property:"og:site_name",content:"enhughesiasm"}),Object(h.jsx)("meta",{property:"og:type",content:t.contentType||"website"}),Object(h.jsx)("meta",{property:"og:title",content:t.title}),Object(h.jsx)("meta",{property:"og:description",content:t.description}),t.canonicalUrl&&Object(h.jsx)("meta",{property:"og:url",rel:"og:url",href:t.canonicalUrl}),t.imageUrl&&Object(h.jsx)("meta",{property:"og:image",rel:"og:image",content:t.imageUrl,href:t.imageUrl}),t.imageUrl&&Object(h.jsx)("meta",{property:"og:image:url",content:t.imageUrl,href:t.imageUrl}),t.imageUrl&&Object(h.jsx)("meta",{property:"og:image:secure_url",content:t.imageUrl,href:t.imageUrl}),Object(h.jsx)("link",{rel:"stylesheet",href:"https://indestructibletype-fonthosting.github.io/jost.css",type:"text/css",charset:"utf-8"}),Object(h.jsx)("link",{rel:"stylesheet",href:"https://indestructibletype.com/fonts/Bodoni/Bodoni.css",type:"text/css",charset:"utf-8"}),Object(h.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=VT323&display=swap",rel:"stylesheet"}),Object(h.jsx)("script",{async:!0,defer:!0,src:"https://kit.fontawesome.com/73a247027b.js"}),this.props.children]})}}]),r}(o.a.Component);t.a=u},24:function(e,t,i){"use strict";i(1);var n=i(33),s=i(49),a=i.n(s),c=i(0);t.a=function(e){var t=e.size,i=e.color;return Object(c.jsx)("div",{className:"sweet-loading",style:{display:"inline-block"},children:Object(c.jsx)(a.a,{css:n.css,sizeUnit:"px",size:t||15,color:i||"#123abc",loading:!0})})}},25:function(e,t,i){"use strict";var n={nodePort:6565,nodeServer:"s.enhughesiasm.com",nodeProtocol:"https",recaptchaSiteKey:"6LeoBsgUAAAAAN9yL0uxns-G4Jvl1q2wQz1Ld2cX"};t.a=n},36:function(e,t,i){"use strict";i(1);var n=i(0);t.a=function(e){return Object(n.jsxs)("div",{className:"mb-6 has-text-centered has-text-"+e.color+(e.size+" "||!1)+(e.className+" "||!1),children:[Object(n.jsx)("h2",{className:"title has-text-centered has-text-white has-background-primary p-3",children:e.title}),Object(n.jsx)("h3",{className:"subtitle has-text-grey is-size-6",children:e.subtitle})]})}},37:function(e,t,i){"use strict";i(1);var n=i(15),s=i(0);t.a=function(e){var t=e.position,i=e.success,a=e.bottom;return Object(s.jsx)("span",{className:t+" icon is-small",style:{color:i?"green":"red",top:"auto",bottom:a?"0":"auto",marginRight:".5rem"},children:Object(s.jsx)(n.a,{icon:i?"check":"times"})})}},45:function(e,t,i){"use strict";t.a={lastShown:null,showNextTime:null,submitted:!1,dismissCount:0}},46:function(e,t,i){"use strict";i.d(t,"a",(function(){return h}));var n=i(17),s=i.n(n),a=i(22),c=i(51),r=i(23),o=i(12),l=i(25);function h(e){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(s.a.mark((function e(t){var i,n,r,h,u,m,d,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={},n=Object(c.a)(t.entries());try{for(n.s();!(r=n.n()).done;)h=Object(a.a)(r.value,2),u=h[0],m=h[1],i[u]=m}catch(s){n.e(s)}finally{n.f()}return d=l.a.nodeProtocol+"://"+l.a.nodeServer+":"+l.a.nodePort+"/api/submit-subscribe-popup",b={ok:!1,success:!1,message:"Attempting to reach server."},e.prev=5,e.next=8,fetch(d,{method:"POST",mode:"cors",cache:"no-cache",headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"},body:Object(o.a)(i)}).catch((function(e){throw e}));case 8:if(200===(b=e.sent).status&&b.ok){e.next=13;break}return e.abrupt("return",{ok:!1,success:!1,message:"Communication error with server."});case 13:return e.abrupt("return",b);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(5),e.abrupt("return",{ok:!1,success:!1,message:"Could not reach server."});case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}},65:function(e){e.exports=JSON.parse('{"__comments":{"__comment":""},"default":{"canonicalUrl":"https://enhughesiasm.com/","title":"The online home of Neil Hughes","contentType":"website","description":"Neil Hughes is a comedian, author, speaker and mental health campaigner.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"home":{"canonicalUrl":"https://enhughesiasm.com/","title":"The online home of Neil Hughes","contentType":"website","description":"Neil Hughes is a comedian, author, speaker, software developer and mental health campaigner.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"shop_before_life":{"canonicalUrl":"https://enhughesiasm.com/shop-before-life/","title":"The Shop Before Life - a novel by Neil Hughes","contentType":"website","description":"Before being born, everybody visits a magical shop to choose who they will become on Earth. But the new Apprentice has some questions...","imageUrl":"https://enhughesiasm.com/images/who2_front_none.png"},"speaking":{"canonicalUrl":"https://enhughesiasm.com/speaking/","title":"Speaker on Mental Health & Comedian - Neil Hughes","contentType":"website","description":"Neil Hughes gives funny, hilarious and helpful talks and presentations on anxiety and mental health.","imageUrl":"https://enhughesiasm.com/images/speaker.png"},"now":{"canonicalUrl":"https://enhughesiasm.com/now/","title":"Neil Hughes - Author, Speaker, Comedian - Now","contentType":"website","description":"What is Neil Hughes\u2014comedian, writer, physicist and fool\u2014doing right now?","imageUrl":"https://enhughesiasm.com/images/neil.png"},"books":{"canonicalUrl":"https://enhughesiasm.com/books/","title":"Books by Neil Hughes","contentType":"website","description":"Comedian and author Neil Hughes has written a number of books, including \'Walking on Custard\' and \'The Shop Before Life\'","imageUrl":"https://enhughesiasm.com/images/neil.png"},"anxiety":{"canonicalUrl":"https://enhughesiasm.com/anxiety/","title":"Anxiety Resources - by Neil Hughes","description":"Neil Hughes lived with anxiety for years before writing a funny book about anxiety. Now he helps others with their mental health.","imageUrl":"https://enhughesiasm.com/images/anxiety.png"},"walking_on_custard":{"canonicalUrl":"https://enhughesiasm.com/walking-on-custard/","title":"The Best Funny Book about Anxiety: Walking on Custard","description":"Comedian Neil Hughes lived with anxiety for years. But thinking about custard led to a surprising solution. \\"A must read for anyone suffering from anxiety\\".","imageUrl":"https://enhughesiasm.com/images/custard.png","includeSocialMediaScripts":true},"contact":{"canonicalUrl":"https://enhughesiasm.com/contact/","title":"Contact - Neil Hughes","description":"Get in touch with Neil Hughes about books, comedy, mental health, custard or anything else.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"comedy_writing":{"canonicalUrl":"https://enhughesiasm.com/humour-consultant/","title":"Comedy Consulting - Help writing funny speeches - by Neil Hughes","description":"Need help writing a funny speech? Neil Hughes can help you with jokes and presentations.","imageUrl":"https://enhughesiasm.com/images/consultant.png"},"articles":{"canonicalUrl":"https://enhughesiasm.com/articles/","title":"Articles - by Neil Hughes","description":"Neil Hughes writes helpful articles about life, productivity, multiple interests, mental health and more.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"occasional_email_experience":{"canonicalUrl":"https://enhughesiasm.com/occasional-email-experience/","title":"The Occasional Email Experience","description":"An irregular, funny newsletter about life, by Neil Hughes.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"interactive":{"canonicalUrl":"https://enhughesiasm.com/interactive/","title":"Cool interactive stuff - by Neil Hughes","description":"Neil Hughes is a software developer who creates cool things.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"support":{"canonicalUrl":"https://enhughesiasm.com/support/","title":"Support mental health events in schools - by Neil Hughes","description":"Neil Hughes gives talks about mental health in schools - you can support him here.","imageUrl":"https://enhughesiasm.com/images/speaker.png"},"confirm_signup":{"title":"Please confirm signup - Occasional Email Experience","description":"The Occasional Email Experience is an irregular email newsletter full of funny stories and advice about life.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"signup_confirmed":{"title":"Welcome to the Occasional Email Experience","description":"The Occasional Email Experience is an irregular email newsletter full of funny stories and advice about life.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"privacy_policy":{"canonicalUrl":"https://enhughesiasm.com/privacy/","title":"Privacy Policy","description":"The Privacy Policy for Neil Hughes, Walking on Custard, and Enhughesiasm","imageUrl":"https://enhughesiasm.com/images/neil.png"},"missing":{"title":"404 - PAGE MISSING","description":"This page probably shouldn\'t exist. If you\'re seeing this, let me know, as I probably screwed something up.","imageUrl":"https://enhughesiasm.com/images/neil.png"}}')},86:function(e,t,i){i(87),i(88),i(89),i(90),i(91),i(92)},89:function(e,t,i){},90:function(e,t,i){},91:function(e,t,i){},92:function(e,t,i){},93:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),a=i(28),c=i(3),r=i(5),o=i(6),l=i(8),h=i(7),u=i(0),m=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={hasCaughtError:!1,message:""},n}return Object(o.a)(i,[{key:"componentDidCatch",value:function(e){console.error(e),this.setState({hasCaughtError:!0,message:e.message})}},{key:"render",value:function(){return this.state.hasCaughtError?Object(u.jsxs)("div",{className:"has-text-centered",children:[Object(u.jsx)("p",{children:"Sorry! Something went wrong."}),Object(u.jsx)("p",{className:"smallPrint",children:"(If this persists after refresh, it might help if you let Neil know.)"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"error",style:{color:"red"},children:this.state.message})]}):this.props.children}}]),i}(s.a.Component),d=i(2),b=Object(n.lazy)((function(){return i.e(4).then(i.bind(null,144))})),p=Object(n.lazy)((function(){return i.e(9).then(i.bind(null,136))})),j=Object(n.lazy)((function(){return i.e(7).then(i.bind(null,150))})),g=Object(n.lazy)((function(){return i.e(5).then(i.bind(null,137))})),f=Object(n.lazy)((function(){return i.e(3).then(i.bind(null,145))})),O=Object(n.lazy)((function(){return i.e(6).then(i.bind(null,146))})),x=Object(n.lazy)((function(){return i.e(16).then(i.bind(null,151))})),v=Object(n.lazy)((function(){return i.e(15).then(i.bind(null,147))})),y=Object(n.lazy)((function(){return i.e(8).then(i.bind(null,148))})),N=Object(n.lazy)((function(){return i.e(11).then(i.bind(null,152))})),k=Object(n.lazy)((function(){return i.e(17).then(i.bind(null,138))})),w=Object(n.lazy)((function(){return i.e(14).then(i.bind(null,139))})),C=Object(n.lazy)((function(){return i.e(12).then(i.bind(null,140))})),S=Object(n.lazy)((function(){return i.e(13).then(i.bind(null,141))})),T=[{exact:!0,path:"/",canonical:"/",name:"home",component:b,layoutType:"home"},{path:"/anxiety",canonical:"/anxiety/",component:p,layoutType:"main"},{path:"/woc",canonical:"/walking-on-custard/",component:g,layoutType:"main"},{path:"/walking-on-custard",canonical:"/walking-on-custard/",component:g,layoutType:"main"},{path:"/books",canonical:"/books/",component:j,layoutType:"main"},{path:"/shop-before-life",canonical:"/shop-before-life/",component:f,layoutType:"main"},{path:"/sbl",canonical:"/shop-before-life/",component:f,layoutType:"main"},{path:"/articles",canonical:"/articles/",component:x,layoutType:"main"},{path:"/speaking",canonical:"/speaking/",component:O,layoutType:"main"},{path:"/humour-consultant",canonical:"/humour-consultant/",component:y,layoutType:"main"},{path:"/comedy-writing",canonical:"/humour-consultant/",component:y,layoutType:"main"},{path:"/occasional-email-experience",canonical:"/occasional-email-experience/",component:N,layoutType:"main"},{path:"/mailing",canonical:"/occasional-email-experience/",component:N,layoutType:"main"},{path:"/interactive",canonical:"/interactive/",component:k,layoutType:"main"},{path:"/contact",canonical:"/contact/",component:v,layoutType:"main"},{path:"/support",canonical:"/support/",component:w,layoutType:"main"},{path:"/privacy",canonical:"/privacy/",component:Object(n.lazy)((function(){return i.e(19).then(i.bind(null,142))})),layoutType:"main"},{path:"/now",canonical:"/now/",component:Object(n.lazy)((function(){return i.e(18).then(i.bind(null,143))})),layoutType:"main"},{path:"/coding",canonical:"/coding/",component:Object(n.lazy)((function(){return i.e(10).then(i.bind(null,149))})),layoutType:"main"},{path:"/confirm-signup",canonical:"/confirm-signup/",component:C,layoutType:"main"},{path:"/signup-confirmed",canonical:"/signup-confirmed/",component:S,layoutType:"main"}],U=i(36),_=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)(U.a,{title:"404",subtitle:"Sorry. Can't find what you're looking for.",size:"is-large",color:"is-danger"})})})},z=i(14),E=i(21),H=i(19),M=i(15),L=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={showMobileMenu:!1},n.toggleBurger=n.toggleBurger.bind(Object(H.a)(n)),n.onNavLinkClicked=n.onNavLinkClicked.bind(Object(H.a)(n)),n}return Object(o.a)(i,[{key:"toggleBurger",value:function(){var e=!this.state.showMobileMenu;this.setState({showMobileMenu:e})}},{key:"onNavLinkClicked",value:function(){this.setState({showMobileMenu:!1}),document.activeElement.blur()}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("nav",{className:"navbar is-primary is-bold is-fixed-top",role:"navigation","aria-label":"main navigation",children:[Object(u.jsxs)("div",{className:"navbar-brand",children:[Object(u.jsx)("a",{href:"/",className:"navbar-item",activeclassname:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:Object(u.jsx)("h1",{className:"is-size-1 has-text-weight-bold",children:"e"})})}),Object(u.jsxs)("a",{role:"button",className:"navbar-burger "+(this.state.showMobileMenu?"is-active":""),onClick:this.toggleBurger,"aria-label":"menu","aria-expanded":"false",children:[Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{"aria-hidden":"true"}),Object(u.jsx)("span",{"aria-hidden":"true"})]})]}),Object(u.jsxs)("div",{className:"navbar-menu "+(this.state.showMobileMenu?"is-active":""),children:[Object(u.jsxs)("div",{className:"navbar-start",children:[Object(u.jsx)(c.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"who is neil hughes"})}),Object(u.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(u.jsx)(c.c,{to:"/anxiety",className:"navbar-link",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"anxiety"})}),Object(u.jsxs)("div",{className:"navbar-dropdown",children:[Object(u.jsx)(c.c,{to:"/anxiety",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"neil's story"})}),Object(u.jsx)(c.c,{to:"/woc",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"a book for anxious humans"})}),Object(u.jsx)(c.c,{to:"/speaking",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"talks about anxiety"})}),Object(u.jsx)(c.c,{to:"/articles",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"featured articles"})}),Object(u.jsx)("a",{className:"navbar-item",href:"http://www.walkingoncustard.com",children:"all articles"})]})]}),Object(u.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(u.jsx)(c.c,{to:"/books",className:"navbar-link",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"books"})}),Object(u.jsxs)("div",{className:"navbar-dropdown",children:[Object(u.jsx)(c.c,{to:"/walking-on-custard",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"Walking on Custard & the Meaning of Life"})}),Object(u.jsx)(c.c,{to:"/shop-before-life",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"The Shop Before Life"})})]})]}),Object(u.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(u.jsx)(c.c,{to:"/speaking",className:"navbar-link",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"speaking"})}),Object(u.jsxs)("div",{className:"navbar-dropdown",children:[Object(u.jsx)(c.c,{to:"/speaking",activeClassName:"active-drop",className:"navbar-item",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"on mental health"})}),Object(u.jsx)(c.c,{to:"/humour-consultant",className:"navbar-item",activeClassName:"active-drop",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"humour consultant"})})]})]}),Object(u.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(u.jsx)(c.c,{to:"/interactive",className:"navbar-link",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"games"})}),Object(u.jsx)("div",{className:"navbar-dropdown",children:Object(u.jsx)("a",{href:"https://enhughesiasm.com/complex",className:"navbar-item",activeClassName:"active-drop",children:"The Supplier's Complex"})})]}),Object(u.jsx)(c.c,{to:"/occasional-email-experience",className:"navbar-item",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"occasional email experience"})})]}),Object(u.jsxs)("div",{className:"navbar-end",children:[Object(u.jsx)(c.c,{to:"/contact",className:"navbar-item",activeClassName:"active",children:Object(u.jsx)("div",{onClick:this.onNavLinkClicked,children:"contact"})}),Object(u.jsx)("div",{className:"navbar-item is-hidden-tablet",children:"..."}),Object(u.jsx)("div",{className:"navbar-item is-hidden-tablet",children:Object(u.jsx)(M.a,{icon:"smile"})})]})]})]})})}}]),i}(s.a.Component),P=function(){return Object(u.jsx)("header",{children:Object(u.jsx)(L,{})})},I=i(26),B=function(){return Object(u.jsxs)("section",{className:"socialMediaBar notification is-primary is-marginless has-text-centered",children:[Object(u.jsx)(I.Helmet,{children:Object(u.jsx)("script",{async:!0,defer:!0,"data-name":"BMC-Widget",src:"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js","data-id":"enhughesiasm","data-description":"","data-message":"","data-color":"#5F7FFF","data-position":"left","data-x_margin":"18","data-y_margin":"18"})}),Object(u.jsx)("span",{className:"socialMediaItem is-hidden-mobile",children:Object(u.jsx)("a",{href:"https://twitter.com/enhughesiasm?ref_src=twsrc%5Etfw",className:"twitter-follow-button","data-show-count":"false",children:"Follow @enhughesiasm"})}),Object(u.jsx)("span",{className:"socialMediaItem",children:Object(u.jsxs)("a",{className:"button is-rounded is-danger is-small",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/enhughesiasm",children:[Object(u.jsx)("img",{style:{width:"18px"},src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),Object(u.jsx)("span",{style:{marginLeft:"12px",fontSize:"17px"},children:"Buy me a coffee"})]})})]})},F=function(){var e=(new Date).getFullYear();return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)(B,{}),Object(u.jsx)("div",{className:"content has-text-centered",children:Object(u.jsxs)("p",{className:"footerLinks notification is-primary is-marginless",children:[Object(u.jsxs)("span",{children:[" ","\xa9 Neil Hughes 2019",2019!==e?"\u2014"+e:""]}),Object(u.jsx)(c.c,{to:"/contact",className:"",children:"contact"}),Object(u.jsx)(c.c,{to:"/privacy",className:"",children:"privacy"})]})})]})},A=i(20),J=i(17),V=i.n(J),D=i(23),W=i(48),q=i.n(W),G=(i(77),i(37)),R=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){var e;Object(r.a)(this,i);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={emailValue:"",fNameValue:"",gdprConfirmed:!1},e.isEmailValid=function(e){return e.length>5&&/^.+@.+\..+$/.test(e)},e}return Object(o.a)(i,[{key:"isEnabled",value:function(){return this.state.gdprConfirmed&&this.isEmailValid(this.state.emailValue)}},{key:"render",value:function(){var e=this,t="I agree to my personal data being stored and used to send me email.";return Object(u.jsx)("div",{className:"has-text-centered is-size-6 is-size-7-mobile",children:Object(u.jsxs)("form",{id:"miniMailchimpForm",name:"mc-embedded-subscribe-form",target:"_blank",onSubmit:this.props.handleSubmit,children:[Object(u.jsxs)("p",{className:"",style:{padding:".75rem 0",fontSize:"90%"},children:["... but I'd like to send you"," ",Object(u.jsx)("strong",{children:"occasional entertaining stories"})," about life, anxiety & things."]}),Object(u.jsxs)("fieldset",{children:[Object(u.jsx)("input",{type:"hidden",name:"u",value:"f16d438b230e1f3c54ecd5adc"}),Object(u.jsx)("input",{type:"hidden",name:"id",value:"11d72325c1"}),Object(u.jsx)("div",{className:"field",children:Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"email",placeholder:"Enter your Email",className:"input is-rounded "+(this.isEmailValid(this.state.emailValue)?"is-success":"is-warning"),value:this.state.emailValue,onChange:function(t){e.setState({emailValue:t.target.value})},name:"EMAIL",id:"mini-mce-EMAIL"}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)(M.a,{icon:"envelope"})}),Object(u.jsx)(G.a,{success:this.isEmailValid(this.state.emailValue)||!1,position:"is-right"})]})}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{htmlFor:"mini_gdpr_1917",className:"is-size-7",children:[Object(u.jsx)("input",{type:"checkbox",id:"mini_gdpr_1917",name:"gdpr[1917]",value:"Y",checked:this.state.gdprConfirmed,onChange:function(t){e.setState({gdprConfirmed:t.target.checked})},className:"checkbox "}),Object(u.jsxs)("span",{style:{marginLeft:"1rem"},children:[t," ",Object(u.jsx)("em",{children:"(required)"})]})]}),Object(u.jsx)("input",{type:"hidden",name:"gdprConsentText",value:t})]}),Object(u.jsx)("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true",children:Object(u.jsx)("input",{type:"text",readOnly:!0,name:"b_f16d438b230e1f3c54ecd5adc_11d72325c1",tabIndex:"-1",value:""})}),Object(u.jsx)("div",{className:"field has-text-centered",children:Object(u.jsx)("input",{type:"submit",readOnly:!0,disabled:!this.isEnabled(),value:"Entertain me occasionally!",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-size-6 is-size-7-mobile is-rounded "+(this.isEnabled()?"is-success":"is-danger")})})]}),Object(u.jsxs)("p",{className:"smallPrint is-size-7",style:{margin:"1.1rem 0 0"},children:["Mailchimp is my email list management platform. By clicking above, you acknowledge that your information will be processed according to"," ",Object(u.jsx)("a",{href:"/privacy",target:"_blank",rel:"noopener noreferrer",children:"these terms"}),", and transferred to Mailchimp for processing."," ",Object(u.jsx)("a",{href:"https://mailchimp.com/legal/",rel:"noopener noreferrer",children:"Learn more about Mailchimp here."})]})]})})}}]),i}(s.a.Component),Y=i(24),$=i(45),K=i(18),Q=i.n(K),X=i(50),Z=function(e){return Object(X.useScrollPosition)((function(t){var i=t.prevPos,n=t.currPos;0!==n.y&&n.y!==i.y&&e.handleScroll&&e.handleScroll()}),null,null,!1,700),Object(u.jsx)(u.Fragment,{})},ee=i(46),te=i(12),ie="enhughesiasm_subscribe_popup_v1",ne=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).handleScroll=function(){n.canShowPopup()&&n.setState({showPopup:!0,hasShownPopup:!0})},n.canShowPopup=function(){if(n.state.hasShownPopup)return!1;if(n.isOnMailPage())return!1;if(Q()().subtract(4,"seconds").isBefore(n.state.firstMountTime))return!1;var e=JSON.parse(localStorage.getItem(ie))||$.a,t=!1;return(t=!e.submitted&&(!e.lastShown||0===e.dismissCount||!(e.showNextTime&&!Q()().isAfter(e.showNextTime))))&&(e.lastShown=Q()(),Object(te.c)("show","subscribe_popup","Popup Shown",1)),localStorage.setItem(ie,JSON.stringify(e)),t},n.isOnMailPage=function(){return"/occasional-email-experience"===n.props.location.pathname||"/mailing"===n.props.location.pathname||"/confirm-signup"===n.props.location.pathname||"/signup-confirmed"===n.props.location.pathname},n.handleSubmit=function(){var e=Object(D.a)(V.a.mark((function e(t){var i,s,a,c,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i=document.getElementById("miniMailchimpForm"),s=new FormData(i),n.setState({submitted:!0}),Object(te.c)("attempted subscribe","subscribe_popup","User attempted subscribe.",1),e.next=7,Object(ee.a)(s);case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:(c=e.sent).success?((r=JSON.parse(localStorage.getItem(ie))).submitted=!0,localStorage.setItem(ie,JSON.stringify(r)),Object(te.c)("successful subscribe","subscribe_popup","Subscribe submitted.",1),n.setState({submitSuccess:!0,submitFailure:!1})):(Object(te.c)("already subscribed","subscribe_popup","User submitted but was already subscribed.",1),n.setState({submitSuccess:!1,submitFailure:!0,alreadySubscribed:c.alreadySubscribed||!1})),e.next=17;break;case 15:Object(te.c)("failed subscribe attempt","subscribe_popup","Something went wrong subscribing.",1),n.setState({submitSuccess:!1,submitFailure:!0});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.incrementDismissCount=function(){var e=JSON.parse(localStorage.getItem(ie));e&&Number.isInteger(e.dismissCount)&&e.dismissCount++,Object(te.c)("dismissed","subscribe_popup","User dismissed the popup.",e.dismissCount),localStorage.setItem(ie,JSON.stringify(e))},n.setNextShowTime=function(){var e=JSON.parse(localStorage.getItem(ie)),t=Q()().add(7+5*(e.dismissCount*e.dismissCount||0),"days");e.showNextTime=t,localStorage.setItem(ie,JSON.stringify(e))},n.handleSuccessClick=function(){n.setState({isOpen:!1})},n.state={firstMountTime:Q()(),hasShownPopup:!1,showPopup:!1,isOpen:!0,submitted:!1,submitSuccess:!1,submitFailure:!1,alreadySubscribed:!1},n}return Object(o.a)(i,[{key:"render",value:function(){var e=this,t=this.state.submitted?this.state.submitSuccess||this.state.submitFailure?this.state.submitSuccess?this.state.submitFailure?"Uh-oh.":"Hooray!":"Uh-oh.":"Hold on...":"Sorry to bother you...";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Z,{handleScroll:this.handleScroll}),this.state.showPopup&&Object(u.jsx)("div",{id:"subscribePopup",children:Object(u.jsxs)(q.a,{className:"slidingPane",isOpen:this.state.isOpen,from:"bottom",width:"35%",closeIcon:Object(u.jsx)("div",{className:"notification "+(this.state.submitSuccess?"is-success":"is-primary"),children:Object(u.jsx)(M.a,{icon:"times-circle",style:{fontSize:"1.25rem"}})}),title:Object(u.jsx)("div",{className:"notification has-text-centered subtitle "+(this.state.submitSuccess?"is-success":"is-primary"),children:t}),onRequestClose:function(){e.incrementDismissCount(),e.setNextShowTime(),e.setState({isOpen:!1})},ariaHideApp:!1,children:[!this.state.submitted&&Object(u.jsx)(R,{handleSubmit:this.handleSubmit}),this.state.submitted&&!(this.state.submitSuccess||this.state.submitFailure)&&Object(u.jsx)("div",{className:"notification is-light has-text-centered",children:Object(u.jsx)(Y.a,{size:"90",color:"#118aB2"})}),this.state.submitted&&this.state.submitSuccess&&!this.state.submitFailure&&Object(u.jsx)("div",{className:"has-text-centered",children:Object(u.jsxs)("div",{className:"content",style:{marginTop:"5vh"},children:[Object(u.jsx)("h2",{children:"Welcome."}),Object(u.jsx)("p",{className:"",children:"Please click the link in the email I've just sent you."}),Object(u.jsx)("p",{children:Object(u.jsx)("button",{className:"button is-success is-rounded",onClick:this.handleSuccessClick,children:"Okay, I'll go do that."})}),Object(u.jsx)("p",{className:"smallPrint",children:"You won't join the Occasional Email Experience until you confirm by clicking the link in your inbox."})]})}),this.state.submitted&&!this.state.submitSuccess&&this.state.submitFailure&&this.state.alreadySubscribed&&Object(u.jsxs)("div",{className:"notification is-danger has-text-centered",children:["That email address is already subscribed."," ",Object(u.jsx)("p",{children:Object(u.jsx)("a",{href:"https://enhughesiasm.us9.list-manage.com/subscribe?u=f16d438b230e1f3c54ecd5adc&id=11d72325c1",children:"Click here, fill in the form and click the error link that appears afterwards to re-enable your subscription."})})]}),this.state.submitted&&!this.state.submitSuccess&&this.state.submitFailure&&!this.state.alreadySubscribed&&Object(u.jsxs)("div",{className:"notification is-danger has-text-centered",children:["Something went wrong."," ",Object(u.jsx)("a",{href:"/occasional-email-experience",children:"Click here and try again"}),"."]}),this.state.submitted&&this.state.submitSuccess&&this.state.submitFailure&&!this.state.alreadySubscribed&&Object(u.jsxs)("div",{className:"notification is-warning has-text-centered",children:["Something weird happened."," ",Object(u.jsx)("a",{href:"/occasional-email-experience",children:"Click here and try again"}),"."]})]})})]})}}]),i}(s.a.Component),se=Object(d.h)(ne),ae=function(){return Object(u.jsx)("div",{className:"notification is-white is-flex ml-5",style:{textAlign:"center",justifyContent:"center",alignItems:"center",display:"flex",position:"absolute",left:"1%",bottom:"1%"},children:Object(u.jsxs)("div",{style:{justifyContent:"center",alignItems:"center"},children:[Object(u.jsx)("strong",{children:"Loading..."}),Object(u.jsx)("div",{className:"mt-1",children:Object(u.jsx)(Y.a,{size:"40"})})]})})},ce=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A.a,{}),Object(u.jsx)(P,{}),Object(u.jsxs)("main",{id:"wrapper",className:"columns",children:[Object(u.jsx)("div",{className:"column"}),Object(u.jsx)("div",{className:"column has-spacing-top is-three-fifths-fullhd",children:Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)(ae,{}),children:this.props.children})}),Object(u.jsx)("div",{className:"column"})]}),Object(u.jsx)(F,{}),Object(u.jsx)(se,{})]})}}]),i}(s.a.PureComponent),re=function(e){var t=e.component,i=Object(E.a)(e,["component"]);return Object(u.jsx)(d.b,Object(z.a)(Object(z.a)({},i),{},{render:function(e){return Object(u.jsx)(ce,{children:Object(u.jsx)(t,Object(z.a)({},e))})}}))},oe=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A.a,{}),Object(u.jsx)(P,{}),Object(u.jsx)("main",{id:"wrapper",children:Object(u.jsx)("div",{className:"section",children:Object(u.jsx)("div",{className:"columns",children:Object(u.jsx)("div",{className:"column is-three-fifths-tablet is-offset-one-fifth-tablet is-three-fifths-desktop is-offset-one-fifth-desktop is-half-widescreen is-offset-one-quarter-widescreen is-one-third-fullhd is-offset-one-third-fullhd",children:Object(u.jsx)(n.Suspense,{fallback:Object(u.jsx)(ae,{}),children:this.props.children})})})})}),Object(u.jsx)(F,{}),Object(u.jsx)(se,{})]})}}]),i}(s.a.PureComponent),le=function(e){var t=e.component,i=Object(E.a)(e,["component"]);return Object(u.jsx)(d.b,Object(z.a)(Object(z.a)({},i),{},{render:function(e){return Object(u.jsx)(oe,{children:Object(u.jsx)(t,Object(z.a)({},e))})}}))};var he=function(){return function(e){Object(n.useEffect)((function(){if(window.gtag){var t=T.find((function(t){return t.path===e.pathname||t.path+"/"===e.pathname})).canonical;window.gtag("config","UA-149409126-1",{anonymize_ip:!0,page_path:t})}}),[e])}(Object(d.g)()),Object(u.jsxs)(d.d,{children:[T.filter((function(e){return"home"===e.layoutType})).map((function(e){return Object(u.jsx)(re,{exact:e.exact,path:e.path,component:e.component},e.name)})),T.filter((function(e){return"main"===e.layoutType})).map((function(e){return Object(u.jsx)(le,{path:e.path,component:e.component},e.name)})),Object(u.jsx)(le,{component:_})]})},ue=function(e){Object(l.a)(i,e);var t=Object(h.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),i}(s.a.Component),me=Object(d.h)(ue),de=function(){return Object(u.jsx)(m,{children:Object(u.jsx)(c.a,{children:Object(u.jsx)(me,{children:Object(u.jsx)(he,{})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(86);var be=document.getElementById("root");be.hasChildNodes()?Object(a.hydrate)(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(de,{})}),be):Object(a.render)(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(de,{})}),be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[93,1,2]]]);
//# sourceMappingURL=main.98e23bea.chunk.js.map