(this["webpackJsonpenhughesiasm.github.io"]=this["webpackJsonpenhughesiasm.github.io"]||[]).push([[0],{13:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));a(21),a(0);function n(e){var t,a=0;if(0===e.length)return a;for(t=0;t<e.length;t++)a=(a<<5)-a+e.charCodeAt(t),a|=0;return a}function i(e,t,a){a=a||[];if("object"==typeof e)for(var n in e)i(e[n],t?t+"["+n+"]":n,a);else a.push(t+"="+encodeURIComponent(e));return a.join("&")}function s(e,t,a,n){window.gtag&&window.gtag("event",e,{event_category:t,event_label:a||"",value:n||0})}},14:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("i",{className:"fas fa-"+e.icon,style:e.style})}},19:function(e,t,a){"use strict";var n=a(4),i=a(5),s=a(7),c=a(6),r=a(0),l=a.n(r),o=a(24),m=function(e){Object(s.a)(r,e);var t=Object(c.a)(r);function r(e){var i;Object(n.a)(this,r),i=t.call(this,e);var s=a(64);return i.state={helmetData:s},i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.page||"missing",t=this.state.helmetData[e];return t||(console.error("missing page in helmetcontainer: "+e),t=this.state.helmetData.missing),l.a.createElement(o.Helmet,{titleTemplate:"%s - enhughesiasm",defaultTitle:"The online home of Neil Hughes - enhughesiasm"},l.a.createElement("title",null,t.title),l.a.createElement("meta",{name:"description",content:t.description}),t.canonicalUrl&&l.a.createElement("link",{rel:"canonical",href:t.canonicalUrl}),l.a.createElement("meta",{property:"og:site_name",content:"enhughesiasm"}),l.a.createElement("meta",{property:"og:type",content:t.contentType||"website"}),l.a.createElement("meta",{property:"og:title",content:t.title}),l.a.createElement("meta",{property:"og:description",content:t.description}),t.canonicalUrl&&l.a.createElement("meta",{property:"og:url",rel:"og:url",href:t.canonicalUrl}),t.imageUrl&&l.a.createElement("meta",{property:"og:image",rel:"og:image",content:t.imageUrl,href:t.imageUrl}),t.imageUrl&&l.a.createElement("meta",{property:"og:image:url",content:t.imageUrl,href:t.imageUrl}),t.imageUrl&&l.a.createElement("meta",{property:"og:image:secure_url",content:t.imageUrl,href:t.imageUrl}),l.a.createElement("link",{rel:"stylesheet",href:"https://indestructibletype-fonthosting.github.io/jost.css",type:"text/css",charset:"utf-8"}),l.a.createElement("link",{rel:"stylesheet",href:"https://indestructibletype.com/fonts/Bodoni/Bodoni.css",type:"text/css",charset:"utf-8"}),l.a.createElement("script",{src:"https://kit.fontawesome.com/73a247027b.js"}),this.props.children)}}]),r}(l.a.Component);t.a=m},23:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(33),c=a(47),r=a.n(c);t.a=function(e){var t=e.size,a=e.color;return i.a.createElement("div",{className:"sweet-loading",style:{display:"inline-block"}},i.a.createElement(r.a,{css:s.css,sizeUnit:"px",size:t||15,color:a||"#123abc",loading:!0}))}},25:function(e,t,a){"use strict";var n={nodePort:6565,nodeServer:"s.enhughesiasm.com",nodeProtocol:"https",recaptchaSiteKey:"6LeoBsgUAAAAAN9yL0uxns-G4Jvl1q2wQz1Ld2cX"};t.a=n},35:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("article",{className:"message "+(e.color+" "||!1)+(e.size+" "||!1)+(e.className+" "||!1)},i.a.createElement("div",{className:"message-header"},i.a.createElement("p",null,e.title)),e.subtitle?i.a.createElement("div",{className:"message-body"},i.a.createElement("div",{className:"content"},e.subtitle)):"")}},37:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(14);t.a=function(e){var t=e.position,a=e.success,n=e.bottom;return i.a.createElement("span",{className:t+" icon is-small",style:{color:a?"green":"red",top:"auto",bottom:n?"0":"auto",marginRight:".5rem"}},i.a.createElement(s.a,{icon:a?"check":"times"}))}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(15),i=a.n(n),s=a(21),c=a(49),r=a(22),l=a(13),o=a(25);function m(e){return u.apply(this,arguments)}function u(){return(u=Object(r.a)(i.a.mark((function e(t){var a,n,r,m,u,h,p,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a={},n=Object(c.a)(t.entries());try{for(n.s();!(r=n.n()).done;)m=Object(s.a)(r.value,2),u=m[0],h=m[1],a[u]=h}catch(i){n.e(i)}finally{n.f()}return p=o.a.nodeProtocol+"://"+o.a.nodeServer+":"+o.a.nodePort+"/api/submit-subscribe-popup",d={ok:!1,success:!1,message:"Attempting to reach server."},e.prev=5,e.next=8,fetch(p,{method:"POST",mode:"cors",cache:"no-cache",headers:{Accept:"application/x-www-form-urlencoded","Content-Type":"application/x-www-form-urlencoded"},body:Object(l.a)(a)}).catch((function(e){throw e}));case 8:if(200===(d=e.sent).status&&d.ok){e.next=13;break}return e.abrupt("return",{ok:!1,success:!1,message:"Communication error with server."});case 13:return e.abrupt("return",d);case 14:e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(5),e.abrupt("return",{ok:!1,success:!1,message:"Could not reach server."});case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}},51:function(e,t,a){e.exports=a(89)},64:function(e){e.exports=JSON.parse('{"__comments":{"__comment":""},"default":{"canonicalUrl":"https://enhughesiasm.com/","title":"The online home of Neil Hughes","contentType":"website","description":"Neil Hughes is a comedian, author, speaker and mental health campaigner.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"home":{"canonicalUrl":"https://enhughesiasm.com/","title":"The online home of Neil Hughes","contentType":"website","description":"Neil Hughes is a comedian, author, speaker and mental health campaigner.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"shop_before_life":{"canonicalUrl":"https://enhughesiasm.com/shop-before-life/","title":"The Shop Before Life - a novel by Neil Hughes","contentType":"website","description":"Before being born, everybody visits a magical shop to choose who they will become on Earth. But the new Apprentice has some questions...","imageUrl":"https://enhughesiasm.com/images/who2_front_none.png"},"speaking":{"canonicalUrl":"https://enhughesiasm.com/speaking/","title":"Speaker on Mental Health & Comedian - Neil Hughes","contentType":"website","description":"Neil Hughes gives funny, hilarious and helpful talks and presentations on anxiety and mental health.","imageUrl":"https://enhughesiasm.com/images/speaker.png"},"now":{"canonicalUrl":"https://enhughesiasm.com/now/","title":"Neil Hughes - Author, Speaker, Comedian - Now","contentType":"website","description":"What is Neil Hughes\u2014comedian, writer, physicist and fool\u2014doing right now?","imageUrl":"https://enhughesiasm.com/images/neil.png"},"books":{"canonicalUrl":"https://enhughesiasm.com/books/","title":"Books by Neil Hughes","contentType":"website","description":"Neil Hughes has written a number of books, including \'Walking on Custard\' and \'The Shop Before Life\'","imageUrl":"https://enhughesiasm.com/images/neil.png"},"anxiety":{"canonicalUrl":"https://enhughesiasm.com/anxiety/","title":"Anxiety Resources - by Neil Hughes","description":"Neil Hughes lived with anxiety for years before writing a funny book about anxiety. Now he helps others with their mental health.","imageUrl":"https://enhughesiasm.com/images/anxiety.png"},"walking_on_custard":{"canonicalUrl":"https://enhughesiasm.com/walking-on-custard/","title":"Walking on Custard & the Meaning of Life - the Book for Anxious Humans, by Neil Hughes","description":"A funny book about anxiety and mental health by the comedian Neil Hughes.","imageUrl":"https://enhughesiasm.com/images/custard.png","includeSocialMediaScripts":true},"contact":{"canonicalUrl":"https://enhughesiasm.com/contact/","title":"Contact - Neil Hughes","description":"Get in touch with Neil Hughes about books, comedy, mental health, custard or anything else.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"comedy_writing":{"canonicalUrl":"https://enhughesiasm.com/humour-consultant/","title":"Comedy Consulting - Help writing funny speeches - by Neil Hughes","description":"Need help writing a funny speech? Neil Hughes can help you with jokes and presentations.","imageUrl":"https://enhughesiasm.com/images/consultant.png"},"articles":{"canonicalUrl":"https://enhughesiasm.com/articles/","title":"Articles - by Neil Hughes","description":"Neil Hughes writes helpful articles about life, productivity, multiple interests, mental health and more.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"occasional_email_experience":{"canonicalUrl":"https://enhughesiasm.com/occasional-email-experience/","title":"The Occasional Email Experience","description":"An irregular, funny newsletter about life, by Neil Hughes.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"interactive":{"canonicalUrl":"https://enhughesiasm.com/interactive/","title":"Cool interactive stuff - by Neil Hughes","description":"Neil Hughes is a software developer who creates cool things.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"support":{"canonicalUrl":"https://enhughesiasm.com/support/","title":"Support mental health events in schools - by Neil Hughes","description":"Neil Hughes gives talks about mental health in schools - you can support him here.","imageUrl":"https://enhughesiasm.com/images/speaker.png"},"confirm_signup":{"title":"Please confirm signup - Occasional Email Experience","description":"The Occasional Email Experience is an irregular email newsletter full of funny stories and advice about life.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"signup_confirmed":{"title":"Welcome to the Occasional Email Experience","description":"The Occasional Email Experience is an irregular email newsletter full of funny stories and advice about life.","imageUrl":"https://enhughesiasm.com/images/neil.png"},"privacy_policy":{"canonicalUrl":"https://enhughesiasm.com/privacy/","title":"Privacy Policy","description":"The Privacy Policy for Neil Hughes, Walking on Custard, and Enhughesiasm","imageUrl":"https://enhughesiasm.com/images/neil.png"},"missing":{"title":"404 - PAGE MISSING","description":"This page probably shouldn\'t exist. If you\'re seeing this, let me know, as I probably screwed something up.","imageUrl":"https://enhughesiasm.com/images/neil.png"}}')},82:function(e,t,a){a(83),a(84),a(85),a(86),a(87),a(88)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(27),c=a(2),r=a(4),l=a(5),o=a(7),m=a(6),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={hasCaughtError:!1,message:""},n}return Object(l.a)(a,[{key:"componentDidCatch",value:function(e){console.error(e),this.setState({hasCaughtError:!0,message:e.message})}},{key:"render",value:function(){return this.state.hasCaughtError?i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("p",null,"Sorry! Something went wrong."),i.a.createElement("p",{className:"smallPrint"},"(If this persists after refresh, it might help if you let Neil know.)"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("p",{className:"error",style:{color:"red"}},this.state.message)):this.props.children}}]),a}(i.a.Component),h=a(9),p=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,181))})),d=Object(n.lazy)((function(){return a.e(9).then(a.bind(null,170))})),b=Object(n.lazy)((function(){return a.e(7).then(a.bind(null,183))})),g=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,171))})),f=Object(n.lazy)((function(){return Promise.all([a.e(10),a.e(3)]).then(a.bind(null,184))})),v=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,172))})),y=Object(n.lazy)((function(){return a.e(16).then(a.bind(null,185))})),E=Object(n.lazy)((function(){return a.e(15).then(a.bind(null,182))})),N=Object(n.lazy)((function(){return a.e(8).then(a.bind(null,173))})),k=Object(n.lazy)((function(){return a.e(11).then(a.bind(null,186))})),w=Object(n.lazy)((function(){return a.e(18).then(a.bind(null,174))})),C=Object(n.lazy)((function(){return a.e(14).then(a.bind(null,175))})),S=Object(n.lazy)((function(){return a.e(12).then(a.bind(null,176))})),O=Object(n.lazy)((function(){return a.e(13).then(a.bind(null,177))})),j=[{exact:!0,path:"/",canonical:"/",name:"home",component:p,layoutType:"home"},{path:"/anxiety",canonical:"/anxiety/",component:d,layoutType:"main"},{path:"/woc",canonical:"/walking-on-custard/",component:g,layoutType:"main"},{path:"/walking-on-custard",canonical:"/walking-on-custard/",component:g,layoutType:"main"},{path:"/books",canonical:"/books/",component:b,layoutType:"main"},{path:"/shop-before-life",canonical:"/shop-before-life/",component:f,layoutType:"main"},{path:"/sbl",canonical:"/shop-before-life/",component:f,layoutType:"main"},{path:"/articles",canonical:"/articles/",component:y,layoutType:"main"},{path:"/speaking",canonical:"/speaking/",component:v,layoutType:"main"},{path:"/humour-consultant",canonical:"/humour-consultant/",component:N,layoutType:"main"},{path:"/comedy-writing",canonical:"/humour-consultant/",component:N,layoutType:"main"},{path:"/occasional-email-experience",canonical:"/occasional-email-experience/",component:k,layoutType:"main"},{path:"/mailing",canonical:"/occasional-email-experience/",component:k,layoutType:"main"},{path:"/interactive",canonical:"/interactive/",component:w,layoutType:"main"},{path:"/contact",canonical:"/contact/",component:E,layoutType:"main"},{path:"/support",canonical:"/support/",component:C,layoutType:"main"},{path:"/privacy",canonical:"/privacy/",component:Object(n.lazy)((function(){return a.e(20).then(a.bind(null,178))})),layoutType:"main"},{path:"/now",canonical:"/now/",component:Object(n.lazy)((function(){return a.e(19).then(a.bind(null,179))})),layoutType:"main"},{path:"/confirm-signup",canonical:"/confirm-signup/",component:S,layoutType:"main"},{path:"/signup-confirmed",canonical:"/signup-confirmed/",component:O,layoutType:"main"}],x=a(35),T=function(){return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(x.a,{title:"404",subtitle:"Sorry. Can't find what you're looking for.",size:"is-large",color:"is-danger"})))},U=a(20),_=a(17),H=a(14),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showMobileMenu:!1},n.toggleBurger=n.toggleBurger.bind(Object(_.a)(n)),n.onNavLinkClicked=n.onNavLinkClicked.bind(Object(_.a)(n)),n}return Object(l.a)(a,[{key:"toggleBurger",value:function(){var e=!this.state.showMobileMenu;this.setState({showMobileMenu:e})}},{key:"onNavLinkClicked",value:function(){this.setState({showMobileMenu:!1}),document.activeElement.blur()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("nav",{className:"navbar is-primary is-bold is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("a",{href:"/",className:"navbar-item",activeclassname:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},i.a.createElement("h1",{className:"is-size-1 has-text-weight-bold"},"e"))),i.a.createElement("a",{role:"button",className:"navbar-burger "+(this.state.showMobileMenu?"is-active":""),onClick:this.toggleBurger,"aria-label":"menu","aria-expanded":"false"},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+(this.state.showMobileMenu?"is-active":"")},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(c.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"home")),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(c.c,{to:"/anxiety",className:"navbar-link",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"anxiety")),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement("a",{className:"navbar-item",href:"http://www.walkingoncustard.com"},"articles"),i.a.createElement(c.c,{to:"/woc",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"book")),i.a.createElement(c.c,{to:"/speaking",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"talks")),i.a.createElement(c.c,{to:"/support",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"support Neil's work")))),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(c.c,{to:"/books",className:"navbar-link",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"books")),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(c.c,{to:"/walking-on-custard",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"Walking on Custard & the Meaning of Life")),i.a.createElement(c.c,{to:"/shop-before-life",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"The Shop Before Life")))),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(c.c,{to:"/speaking",className:"navbar-link",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"speaking")),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(c.c,{to:"/speaking",activeClassName:"active-drop",className:"navbar-item"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"on mental health")),i.a.createElement(c.c,{to:"/humour-consultant",className:"navbar-item",activeClassName:"active-drop"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"humour consultant")))),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement(c.c,{to:"/interactive",className:"navbar-link",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"games")),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement("a",{href:"https://enhughesiasm.com/complex",className:"navbar-item",activeClassName:"active-drop"},"The Supplier's Complex"))),i.a.createElement(c.c,{to:"/occasional-email-experience",className:"navbar-item",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"occasional email experience"))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement(c.c,{to:"/contact",className:"navbar-item",activeClassName:"active"},i.a.createElement("div",{onClick:this.onNavLinkClicked},"contact")),i.a.createElement("div",{className:"navbar-item is-hidden-tablet"},"..."),i.a.createElement("div",{className:"navbar-item is-hidden-tablet"},i.a.createElement(H.a,{icon:"smile"}))))))}}]),a}(i.a.Component),P=function(){return i.a.createElement("header",null,i.a.createElement(M,null))},z=a(24),L=a(50),I=Object(L.a)((function(){return a.e(17).then(a.bind(null,180))})),F=function(){return i.a.createElement(n.Suspense,{fallback:i.a.createElement("span",null,"...")},i.a.createElement(I,null))},A=function(){return i.a.createElement("section",{className:"socialMediaBar notification is-primary is-marginless has-text-centered"},i.a.createElement(z.Helmet,null,i.a.createElement("script",{async:!0,defer:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}),i.a.createElement("script",{async:!0,defer:!0,src:"https://apis.google.com/js/platform.js"}),i.a.createElement("script",{"data-name":"BMC-Widget",src:"https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js","data-id":"enhughesiasm","data-description":"","data-message":"","data-color":"#5F7FFF","data-position":"left","data-x_margin":"18","data-y_margin":"18"})),i.a.createElement("span",{className:"socialMediaItem is-hidden-mobile"},i.a.createElement("a",{href:"https://twitter.com/enhughesiasm?ref_src=twsrc%5Etfw",className:"twitter-follow-button","data-show-count":"false"},"Follow @enhughesiasm")),i.a.createElement("span",{className:"socialMediaItem"},i.a.createElement("a",{className:"button is-rounded is-danger is-small",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/enhughesiasm"},i.a.createElement("img",{style:{width:"18px"},src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),i.a.createElement("span",{style:{marginLeft:"12px",fontSize:"17px"}},"Buy me a coffee"))),i.a.createElement(F,null),i.a.createElement("span",{className:"socialMediaItem is-hidden-mobile"},i.a.createElement("div",{className:"g-ytsubscribe","data-channelid":"UCo7rSj8sIu823Z3c5ju9FfA","data-layout":"default","data-theme":"dark","data-count":"default"})))},B=function(){var e=(new Date).getFullYear();return i.a.createElement("div",{className:"footer"},i.a.createElement(A,null),i.a.createElement("div",{className:"content has-text-centered"},i.a.createElement("p",{className:"footerLinks notification is-primary is-marginless"},i.a.createElement("span",null," ","\xa9 Neil Hughes 2019",2019!=e?"\u2014"+e:""),i.a.createElement(c.c,{to:"/contact",className:""},"contact"),i.a.createElement(c.c,{to:"/privacy",className:""},"privacy"))))},J=a(19),D=a(15),V=a.n(D),W=a(22),q=a(45),G=(a(75),a(37)),R=a(23),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={emailValue:"",fNameValue:"",gdprConfirmed:!1},e.isEmailValid=function(e){return e.length>5&&/^.+@.+\..+$/.test(e)},e}return Object(l.a)(a,[{key:"isEnabled",value:function(){return this.state.gdprConfirmed&&this.isEmailValid(this.state.emailValue)}},{key:"render",value:function(){var e=this,t="I agree to my personal data being stored and used to send me email.";return i.a.createElement("div",{className:"has-text-centered is-size-6 is-size-7-mobile"},i.a.createElement("form",{id:"miniMailchimpForm",name:"mc-embedded-subscribe-form",target:"_blank",onSubmit:this.props.handleSubmit},i.a.createElement("p",{className:"",style:{padding:".75rem 0",fontSize:"90%"}},"... but I'd like to send you ",i.a.createElement("strong",null,"occasional entertaining stories")," about life, anxiety & things."),i.a.createElement("fieldset",null,i.a.createElement("input",{type:"hidden",name:"u",value:"f16d438b230e1f3c54ecd5adc"}),i.a.createElement("input",{type:"hidden",name:"id",value:"11d72325c1"}),i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"control has-icons-left has-icons-right"},i.a.createElement("input",{type:"email",placeholder:"Enter your Email",className:"input is-rounded "+(this.isEmailValid(this.state.emailValue)?"is-success":"is-warning"),value:this.state.emailValue,onChange:function(t){e.setState({emailValue:t.target.value})},name:"EMAIL",id:"mini-mce-EMAIL"}),i.a.createElement("span",{className:"icon is-small is-left"},i.a.createElement(H.a,{icon:"envelope"})),i.a.createElement(G.a,{success:this.isEmailValid(this.state.emailValue)||!1,position:"is-right"}))),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"mini_gdpr_1917",className:"is-size-7"},i.a.createElement("input",{type:"checkbox",id:"mini_gdpr_1917",name:"gdpr[1917]",value:"Y",checked:this.state.gdprConfirmed,onChange:function(t){e.setState({gdprConfirmed:t.target.checked})},className:"checkbox "}),i.a.createElement("span",{style:{marginLeft:"1rem"}},t," ",i.a.createElement("em",null,"(required)"))),i.a.createElement("input",{type:"hidden",name:"gdprConsentText",value:t})),i.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},i.a.createElement("input",{type:"text",readOnly:!0,name:"b_f16d438b230e1f3c54ecd5adc_11d72325c1",tabIndex:"-1",value:""})),i.a.createElement("div",{className:"field has-text-centered"},i.a.createElement("input",{type:"submit",readOnly:!0,disabled:!this.isEnabled(),value:"Entertain me occasionally!",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-rounded "+(this.isEnabled()?"is-success":"is-danger")}))),i.a.createElement("p",{className:"smallPrint is-size-7",style:{margin:"1.1rem 0 0"}},"Mailchimp is my email list management platform. By clicking above, you acknowledge that your information will be processed according to ",i.a.createElement("a",{href:"/privacy",target:"_blank",rel:"noopener noreferrer"},"these terms"),", and transferred to Mailchimp for processing. ",i.a.createElement("a",{href:"https://mailchimp.com/legal/",rel:"noopener noreferrer"},"Learn more about Mailchimp here."))))}}]),a}(i.a.Component),$={lastShown:null,showNextTime:null,submitted:!1,dismissCount:0},K=a(16),Q=a.n(K),X=a(48),Z=function(e){return Object(X.useScrollPosition)((function(t){var a=t.prevPos,n=t.currPos;0!=n.y&&n.y!=a.y&&e.handleScroll&&e.handleScroll()}),null,null,!1,700),i.a.createElement(i.a.Fragment,null)},ee=a(43),te=a(13),ae="enhughesiasm_subscribe_popup_v1",ne=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleScroll=function(){n.canShowPopup()&&n.setState({showPopup:!0,hasShownPopup:!0})},n.canShowPopup=function(){if(n.state.hasShownPopup)return!1;if(n.isOnMailPage())return!1;if(Q()().subtract(4,"seconds").isBefore(n.state.firstMountTime))return!1;var e=JSON.parse(localStorage.getItem(ae))||$,t=!1;return(t=!e.submitted&&(!e.lastShown||0==e.dismissCount||!(e.showNextTime&&!Q()().isAfter(e.showNextTime))))&&(e.lastShown=Q()(),Object(te.c)("show","subscribe_popup","Popup Shown",1)),localStorage.setItem(ae,JSON.stringify(e)),t},n.isOnMailPage=function(){return"/occasional-email-experience"==n.props.location.pathname||"/mailing"==n.props.location.pathname},n.handleSubmit=function(){var e=Object(W.a)(V.a.mark((function e(t){var a,i,s,c,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=document.getElementById("miniMailchimpForm"),i=new FormData(a),n.setState({submitted:!0}),Object(te.c)("attempted subscribe","subscribe_popup","User attempted subscribe.",1),e.next=7,Object(ee.a)(i);case 7:if(!(s=e.sent).ok){e.next=15;break}return e.next=11,s.json();case 11:(c=e.sent).success?((r=JSON.parse(localStorage.getItem(ae))).submitted=!0,localStorage.setItem(ae,JSON.stringify(r)),Object(te.c)("successful subscribe","subscribe_popup","Subscribe submitted.",1),n.setState({submitSuccess:!0,submitFailure:!1})):(Object(te.c)("already subscribed","subscribe_popup","User submitted but was already subscribed.",1),n.setState({submitSuccess:!1,submitFailure:!0,alreadySubscribed:c.alreadySubscribed||!1})),e.next=17;break;case 15:Object(te.c)("failed subscribe attempt","subscribe_popup","Something went wrong subscribing.",1),n.setState({submitSuccess:!1,submitFailure:!0});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.incrementDismissCount=function(){var e=JSON.parse(localStorage.getItem(ae));e&&Number.isInteger(e.dismissCount)&&e.dismissCount++,Object(te.c)("dismissed","subscribe_popup","User dismissed the popup.",e.dismissCount),localStorage.setItem(ae,JSON.stringify(e))},n.setNextShowTime=function(){var e=JSON.parse(localStorage.getItem(ae)),t=Q()().add(7+5*(e.dismissCount*e.dismissCount||0),"days");e.showNextTime=t,localStorage.setItem(ae,JSON.stringify(e))},n.handleSuccessClick=function(){n.setState({isOpen:!1})},n.state={firstMountTime:Q()(),hasShownPopup:!1,showPopup:!1,isOpen:!0,submitted:!1,submitSuccess:!1,submitFailure:!1,alreadySubscribed:!1},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.submitted?this.state.submitSuccess||this.state.submitFailure?this.state.submitSuccess?this.state.submitFailure?"Uh-oh.":"Hooray!":"Uh-oh.":"Hold on...":"Sorry to bother you...";return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,{handleScroll:this.handleScroll}),this.state.showPopup&&i.a.createElement("div",{id:"subscribePopup"},i.a.createElement(q.a,{className:"slidingPane",isOpen:this.state.isOpen,from:"bottom",closeIcon:i.a.createElement("div",{className:"notification "+(this.state.submitSuccess?"is-success":"is-primary")},i.a.createElement(H.a,{icon:"times-circle",style:{fontSize:"1.25rem"}})),title:i.a.createElement("div",{className:"notification has-text-centered subtitle "+(this.state.submitSuccess?"is-success":"is-primary")},t),onRequestClose:function(){e.incrementDismissCount(),e.setNextShowTime(),e.setState({isOpen:!1})},ariaHideApp:!1},!this.state.submitted&&i.a.createElement(Y,{handleSubmit:this.handleSubmit}),this.state.submitted&&!(this.state.submitSuccess||this.state.submitFailure)&&i.a.createElement("div",{className:"notification is-light has-text-centered"},i.a.createElement(R.a,{size:"90",color:"#118aB2"})),this.state.submitted&&this.state.submitSuccess&&!this.state.submitFailure&&i.a.createElement("div",{className:"has-text-centered"},i.a.createElement("div",{className:"content",style:{marginTop:"5vh"}},i.a.createElement("h2",null,"Welcome."),i.a.createElement("p",{className:""},"Please click the link in the email I've just sent you."),i.a.createElement("p",null,i.a.createElement("button",{className:"button is-success is-rounded",onClick:this.handleSuccessClick},"Okay, I'll go do that.")),i.a.createElement("p",{className:"smallPrint"},"You won't join the Occasional Email Experience until you confirm by clicking the link in your inbox."))),this.state.submitted&&!this.state.submitSuccess&&this.state.submitFailure&&this.state.alreadySubscribed&&i.a.createElement("div",{className:"notification is-danger has-text-centered"},"That email address is already subscribed. ",i.a.createElement("p",null,i.a.createElement("a",{href:"https://enhughesiasm.us9.list-manage.com/subscribe?u=f16d438b230e1f3c54ecd5adc&id=11d72325c1"},"Click here, fill in the form and click the error link that appears afterwards to re-enable your subscription."))),this.state.submitted&&!this.state.submitSuccess&&this.state.submitFailure&&!this.state.alreadySubscribed&&i.a.createElement("div",{className:"notification is-danger has-text-centered"},"Something went wrong. ",i.a.createElement("a",{href:"/occasional-email-experience"},"Click here and try again"),"."),this.state.submitted&&this.state.submitSuccess&&this.state.submitFailure&&!this.state.alreadySubscribed&&i.a.createElement("div",{className:"notification is-warning has-text-centered"},"Something weird happened. ",i.a.createElement("a",{href:"/occasional-email-experience"},"Click here and try again"),"."))))}}]),a}(i.a.Component),ie=Object(h.h)(ne),se=function(){return i.a.createElement("div",{className:"notification is-light is-flex",style:{height:"50vh",width:"100%",textAlign:"center",justifyContent:"center",alignItems:"center",display:"flex"}},i.a.createElement("div",{style:{justifyContent:"center",alignItems:"center"}}))},ce=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,null),i.a.createElement(P,null),i.a.createElement("main",{id:"wrapper",className:"columns"},i.a.createElement("div",{className:"column has-spacing-top",style:{padding:"0 8%"}},i.a.createElement(n.Suspense,{fallback:i.a.createElement(se,null)},this.props.children))),i.a.createElement(B,null),i.a.createElement(ie,null))}}]),a}(i.a.PureComponent),re=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return i.a.createElement(h.b,Object.assign({},a,{render:function(e){return i.a.createElement(ce,null,i.a.createElement(t,e))}}))},le=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,null),i.a.createElement(P,null),i.a.createElement("main",{id:"wrapper"},i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column is-three-fifths-tablet is-offset-one-fifth-tablet is-three-fifths-desktop is-offset-one-fifth-desktop is-half-widescreen is-offset-one-quarter-widescreen is-one-third-fullhd is-offset-one-third-fullhd"},i.a.createElement(n.Suspense,{fallback:i.a.createElement(se,null)},this.props.children))))),i.a.createElement(B,null),i.a.createElement(ie,null))}}]),a}(i.a.PureComponent),oe=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return i.a.createElement(h.b,Object.assign({},a,{render:function(e){return i.a.createElement(le,null,i.a.createElement(t,e))}}))};var me=function(){return function(e){Object(n.useEffect)((function(){if(window.gtag){var t=j.find((function(t){return t.path===e.pathname||t.path+"/"===e.pathname})).canonical;window.gtag("config","UA-149409126-1",{anonymize_ip:!0,page_path:t})}}),[e])}(Object(h.g)()),i.a.createElement(h.d,null,j.filter((function(e){return"home"===e.layoutType})).map((function(e){return i.a.createElement(re,{exact:e.exact,key:e.name,path:e.path,component:e.component})})),j.filter((function(e){return"main"===e.layoutType})).map((function(e){return i.a.createElement(oe,{key:e.name,path:e.path,component:e.component})})),i.a.createElement(oe,{component:T}))},ue=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(i.a.Component),he=Object(h.h)(ue),pe=function(){return i.a.createElement(u,null,i.a.createElement(c.a,null,i.a.createElement(he,null,i.a.createElement(me,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(82);var de=document.getElementById("root");de.hasChildNodes()?Object(s.hydrate)(i.a.createElement(i.a.StrictMode,null,i.a.createElement(pe,null)),de):Object(s.render)(i.a.createElement(i.a.StrictMode,null,i.a.createElement(pe,null)),de),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.76e771b6.chunk.js.map