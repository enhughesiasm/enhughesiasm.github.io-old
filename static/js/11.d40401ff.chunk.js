(this["webpackJsonpenhughesiasm.github.io"]=this["webpackJsonpenhughesiasm.github.io"]||[]).push([[11],{197:function(e,A,t){"use strict";t.r(A);var a=t(6),i=t(7),s=t(9),n=t(8),l=t(0),c=t.n(l),r=t(2),m=t(36),o=t(99),u=t.n(o),d=t(15),h=t.n(d),b=t(22),p=t(14),E=t(38),g=t(43),f=t(13),v=t(18),y=t(1),N=function(e){Object(s.a)(t,e);var A=Object(n.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=A.call(this,e)).isEmailValid=function(e){return e.length>5&&/^.+@.+\..+$/.test(e)},i.isEnabled=function(){return i.state.gdprConfirmed&&i.isEmailValid(i.state.emailValue)},i.handleSubmit=function(){var e=Object(b.a)(h.a.mark((function e(A){var t,a,s,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A.preventDefault(),t=document.getElementById("mailchimpForm"),a=new FormData(t),Object(f.c)("attempted subscribe","subscribe_oee_page","User attempted subscribe.",1),i.setState({submitSent:!0}),e.next=7,Object(g.a)(a);case 7:if(!(s=e.sent).ok){e.next=15;break}return e.next=11,s.json();case 11:(n=e.sent).success?(Object(f.c)("successful subscribe","subscribe_oee_page","Subscribe successful.",1),i.setState({submitSuccess:!0})):n.alreadySubscribed?(Object(f.c)("already subscribed","subscribe_oee_page","User was already subscribed.",1),i.setState({alreadySubscribed:!0})):(Object(f.c)("failed subscribe attempt","subscribe_oee_page","Something went wrong subscribing.",1),i.setState({submitFailed:!0})),e.next=17;break;case 15:Object(f.c)("failed subscribe attempt","subscribe_oee_page","Something went wrong subscribing.",1),i.setState({submitFailed:!0});case 17:case"end":return e.stop()}}),e)})));return function(A){return e.apply(this,arguments)}}(),i.state={emailValue:"",fNameValue:"",gdprConfirmed:!1,submitSent:!1,submitFailed:!1,submitSuccess:!1,alreadySubscribed:!1},i}return Object(i.a)(t,[{key:"render",value:function(){var e=this,A="Yes, Neil may store the information provided and use it to send me stories and updates on books, talks & other products.";return c.a.createElement(c.a.Fragment,null,!this.state.submitSent&&c.a.createElement("form",{id:"mailchimpForm",onSubmit:this.handleSubmit},c.a.createElement("input",{type:"hidden",name:"u",value:"f16d438b230e1f3c54ecd5adc"}),c.a.createElement("input",{type:"hidden",name:"id",value:"11d72325c1"}),c.a.createElement("div",{id:"mc_embed_signup_scroll"},c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"field-label"},c.a.createElement("label",{className:"label",htmlFor:"mce-EMAIL"},"Email")),c.a.createElement("div",{className:"field-body"},c.a.createElement("div",{className:"control has-icons-left has-icons-right",style:{width:"100%"}},c.a.createElement("input",{type:"email",className:"input is-rounded "+(this.isEmailValid(this.state.emailValue)?"is-success":"is-warning"),value:this.state.emailValue,onChange:function(A){e.setState({emailValue:A.target.value})},name:"EMAIL",id:"mce-EMAIL"}),c.a.createElement("span",{className:"icon is-small is-left"},c.a.createElement(p.a,{icon:"envelope"})),c.a.createElement(E.a,{success:this.isEmailValid(this.state.emailValue)||!1,position:"is-right"})))),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"field-label"},c.a.createElement("label",{className:"label",htmlFor:"mce-FNAME"},"First Name ")),c.a.createElement("div",{className:"control has-icons-left has-icons-right",style:{width:"100%"}},c.a.createElement("input",{className:"input is-rounded "+(this.state.fNameValue.length>=2?"is-success":"is-warning"),type:"text",value:this.state.fNameValue,onChange:function(A){e.setState({fNameValue:A.target.value})},name:"FNAME",id:"mce-FNAME"}),c.a.createElement("span",{className:"icon is-small is-left"},c.a.createElement(p.a,{icon:"user"})),c.a.createElement(E.a,{success:this.state.fNameValue.length>=2||!1,position:"is-right"}))),c.a.createElement("div",{className:"field"},c.a.createElement("div",{className:"field-label"},c.a.createElement("label",{htmlFor:"gdpr_1917"},c.a.createElement("span",{className:"label"},"Please confirm:"),c.a.createElement("input",{type:"checkbox",id:"gdpr_1917",name:"gdpr[1917]",value:"Y",checked:this.state.gdprConfirmed,onChange:function(A){e.setState({gdprConfirmed:A.target.checked})},className:"checkbox "}),c.a.createElement("span",{style:{marginLeft:"1rem"}},A," ",c.a.createElement("em",null,"(required)")),c.a.createElement("input",{type:"hidden",name:"gdprConsentText",value:A})))),c.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},c.a.createElement("input",{type:"text",readOnly:!0,name:"b_f16d438b230e1f3c54ecd5adc_11d72325c1",tabIndex:"-1",value:""})),c.a.createElement("div",{className:"field has-text-centered"},c.a.createElement("input",{type:"submit",readOnly:!0,disabled:!this.isEnabled(),value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button is-rounded "+(this.isEnabled()?"is-success":"is-danger")})),c.a.createElement("div",{className:"notification is-dark"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content__gdprLegal"},c.a.createElement("p",{className:"smallPrint"},"Mailchimp is my email list management platform. By clicking 'subscribe', you acknowledge that your information will be processed according to the terms on this page, and transferred to Mailchimp for processing. ",c.a.createElement("a",{href:"https://mailchimp.com/legal/",rel:"noopener noreferrer"},"Learn more about Mailchimp's privacy practices here."))))))),this.state.submitSent&&!this.state.submitSuccess&&!this.state.submitFailed&&!this.state.alreadySubscribed&&c.a.createElement("div",{className:"notification is-light has-text-centered"},c.a.createElement(v.a,{size:"50"})),this.state.submitSent&&this.state.submitSuccess&&c.a.createElement(y.a,{to:"/confirm-signup"}),this.state.submitSent&&this.state.submitFailed&&c.a.createElement("div",{className:"notification is-danger has-text-centered"},c.a.createElement("h2",null,"Sorry!"),c.a.createElement("p",null,"Something went wrong. ",c.a.createElement("a",{href:"http://eepurl.com/gB3e8P"},"Click here to try again."))),this.state.submitSent&&this.state.alreadySubscribed&&c.a.createElement("div",{className:"notification is-warning has-text-centered"},c.a.createElement("h2",null,"Oops!"),c.a.createElement("p",null,"That email was already subscribed. Your email consent has been recorded. To receive another subscription confirmation (which contains a link to update your subscription preferences), ",c.a.createElement("a",{href:"http://eepurl.com/gB3e8P"},"click here and fill out the form."))))}}]),t}(c.a.Component),S=t(19),w=t(91),j=function(e){Object(s.a)(t,e);var A=Object(n.a)(t);function t(e){return Object(a.a)(this,t),A.call(this,e)}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(S.a,{page:"occasional_email_experience"}),c.a.createElement(m.a,{title:"The Occasional Email Experience",subtitle:"",color:"is-primary",size:""}),c.a.createElement("div",{className:"tile is-ancestor is-vertical"},c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("div",{className:"tile is-child is-8"},c.a.createElement("div",{className:"content"},c.a.createElement("p",{className:"has-drop-cap has-text-weight-bold"},"Most emails are terrible. So I aim to make mine a ",c.a.createElement("em",null,"special occasion"),"."),c.a.createElement("p",null,"Sign up below and I'll send you funny stories which may mildly improve your life. Once a month(ish), grab a cup of tea and settle in to enjoy."),c.a.createElement("p",{className:"notification is-light has-text-weight-bold is-size-6 is-size-6-mobile"},"In your welcome email, I\u2019ll include the opening chapters of"," ",c.a.createElement(r.b,{to:"/walking-on-custard"},"Walking on Custard & the Meaning of Life")," ","and"," ",c.a.createElement(r.b,{to:"/shop-before-life"},"The Shop Before Life")," ","for ",c.a.createElement("strong",null,"free"),"."))),c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("div",{className:"tile is-child notification is-info"},c.a.createElement("img",{src:u.a}),c.a.createElement("p",{className:"smallPrint"},"the sheer joy of receiving an email from Neil Hughes cannot be contained in a mere picture")))),c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("div",{className:"tile is-child"},c.a.createElement("div",{className:"content"},c.a.createElement(w.a,{quote:"Your emails make me howl. With laughter, I hasten to add! I think they could be sold to a major publisher. Thank you for entertaining me.",cite:"A long-time subscriber"})))),c.a.createElement("div",{className:"tile is-parent"},c.a.createElement("div",{className:"tile is-child notification is-light"},c.a.createElement(N,null))),c.a.createElement("div",{className:"tile is-parent notification is-warning"},c.a.createElement("div",{className:"tile is-child"},c.a.createElement("div",{className:"content"},c.a.createElement("h5",null,"what this is"),c.a.createElement("ul",null,c.a.createElement("li",null,"You can expect to receive an email newsletter from me \u2018occasionally\u2019; in practice, roughly every few weeks to every few months."),c.a.createElement("li",null,"The content of these emails can be quite varied, but they tend to be mainly humorous or thought-provoking stories, along with roundups of links to interesting things I\u2019ve found, and articles I\u2019ve written recently.",c.a.createElement("p",{className:"smallPrint"},"(Usually the theme will be 'something idiotic I\u2019ve done lately', and whatever important lessons I\u2019ve managed to learn from my latest stupidity.)")),c.a.createElement("li",null,"I don\u2019t store any of your data myself: at the time of writing I am using"," ",c.a.createElement("a",{href:"http://mailchimp.com"},"Mailchimp")," ","to manage my email list, which means they will store the data you provide on my behalf."),c.a.createElement("li",null,"Naturally,"," ",c.a.createElement("strong",null,"you can unsubscribe at any time")," ","\u2013 an unsubscribe link is provided in every email.")))))))}}]),t}(c.a.Component);A.default=j},91:function(e,A,t){"use strict";var a=t(0),i=t.n(a);A.a=function(e){return i.a.createElement("blockquote",null,e.showLoader&&i.a.createElement("div",{className:"loader"}),i.a.createElement("div",{className:"quoteText",style:{opacity:e.opacity?e.opacity:1}},i.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.quote}}),i.a.createElement("cite",{dangerouslySetInnerHTML:{__html:e.cite}})))}},99:function(e,A){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=11.d40401ff.chunk.js.map