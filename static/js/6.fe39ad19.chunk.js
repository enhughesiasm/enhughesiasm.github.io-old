(this["webpackJsonpenhughesiasm.github.io"]=this["webpackJsonpenhughesiasm.github.io"]||[]).push([[6],{100:function(e,t,a){"use strict";t.a=a.p+"static/media/OneTrackMinds.1a3d53f1.jp2"},101:function(e,t,a){"use strict";t.a=a.p+"static/media/OneTrackMinds.6781c1b0.jxr"},106:function(e,t,a){"use strict";var s=a(5),i=a(6),n=a(19),o=a(8),r=a(7),l=a(1),c=a.n(l),h=a(18),d=a.n(h),u=a(95),m=a(12),p=a(0),g=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var i;Object(s.a)(this,a);var o=-1;return(i=t.call(this,e)).props.quotes&&i.props.quotes.length>0&&(o=0,i.props.randomStart&&(o=Math.floor(Math.random()*i.props.quotes.length))),i.state={showAllQuotes:!1,currentQuoteIndex:o,nextQuoteIndex:o,currentQuoteStartTime:d()(),transitionStartTime:d()(),opacity:1,millisecondsPerTransition:1e3*(i.props.secondsPerTransition||1.5),millisecondsPerQuote:1e3*(i.props.secondsPerQuote||2+3*Math.random()),isTransitioning:!1,currentQuoteProgressFraction:0,quotes:i.props.quotes.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))},i.tick=i.tick.bind(Object(n.a)(i)),i.toggleShowAllQuotes=i.toggleShowAllQuotes.bind(Object(n.a)(i)),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),25)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"toggleShowAllQuotes",value:function(){this.setState({showAllQuotes:!this.state.showAllQuotes})}},{key:"tick",value:function(){if(!(this.state.quotes.length<=1))if(this.state.isTransitioning){var e=1*d()().diff(this.state.transitionStartTime)/this.state.millisecondsPerTransition;if(e<=.5){var t=2*e,a=Math.max(1-t*t*t,.05);this.setState({opacity:a,currentQuoteProgressFraction:a+.5})}else if(e<1){var s=2*e-1,i=Math.max(--s*s*s+1,.05);this.setState({opacity:i,currentQuoteIndex:this.state.nextQuoteIndex,currentQuoteProgressFraction:1-i-.5})}else this.setState({isTransitioning:!1,nextQuoteIndex:this.state.currentQuoteIndex,opacity:1,transitionStartTime:d()(),currentQuoteStartTime:d()()})}else{var n=d()().diff(this.state.currentQuoteStartTime);if(n>this.state.millisecondsPerQuote){var o=this.state.currentQuoteIndex<this.state.quotes.length-1?this.state.currentQuoteIndex+1:0;this.setState({nextQuoteIndex:o,transitionStartTime:d()(),isTransitioning:!0,currentQuoteProgressFraction:1})}else this.setState({currentQuoteProgressFraction:1*n/this.state.millisecondsPerQuote})}}},{key:"render",value:function(){var e=this,t=!this.props.hideToggle&&this.state.quotes.length>1;return Object(p.jsxs)("div",{children:[t&&Object(p.jsxs)("a",{className:"smallPrint is-pulled-left blockquoteToggle has-text-danger",onClick:this.toggleShowAllQuotes,children:[this.state.showAllQuotes?"hide ":"show all "+this.state.quotes.length," ","quotes"]}),!this.state.showAllQuotes&&Object(p.jsx)(u.a,{showLoader:t,opacity:this.state.opacity,quote:this.state.quotes[this.state.currentQuoteIndex].quote,cite:this.state.quotes[this.state.currentQuoteIndex].cite}),this.state.showAllQuotes&&Object(p.jsx)("div",{children:this.state.quotes.map((function(t,a){return Object(p.jsx)(u.a,{showLoader:0===a,quote:e.state.quotes[a].quote,cite:e.state.quotes[a].cite},Object(m.b)(e.state.quotes[a].quote))}))})]})}}]),a}(c.a.Component);t.a=g},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s=3e5},134:function(e){e.exports=JSON.parse('[{"quote":"I would <strong>highly recommend Neil as a humorous and inspirational speaker</strong> on anxiety and mental health. As well as amusing our sixth form, he gave practical advice on managing emotions in a very relatable way.","cite":"Rowena Gill, Teacher,<a href=\'https://www.calday.co.uk/\'> Calday Grange Grammar School</a>"},{"quote":"Informative and very real. Neil\'s personal challenges were explained using a witty and frank dialogue that the students appreciated. An excellent session.","fuller_quote":"The session was informative and very real. Neil\'s personal challenges were explained using a witty and frank dialogue that the students appreciated. Neil described how he overcame, and is still overcoming his own mental health issues, using the walking on custard analogy. An excellent session.","cite":"Marc Whisker, Head of Year 12, <a href=\'https://www.uptonhallschool.co.uk/\'> Upton Hall School</a>"},{"quote":"Neil related very well to the students with humorous stories and his down to earth humility. All took something away to think about for the future.","cite":"<a href=\'http://www.fettes.com/\'>Fettes College, Edinburgh</a>"},{"quote":"Entertaining, light-hearted and truly inspirational to both staff and students. Having worked for 17 years in mainstream education before moving to a specialist mental health provision, <strong>I can whole-heartedly recommend Neil to any school</strong>.","fuller_quote":"Neil came to Wirral Hospitals\' School in July 2019 and spoke with our students, all of whom struggle with their own anxiety issues. Neil was truly inspirational, to both staff and students. He was entertaining and light-hearted, while giving a perfect description of what life can feel like for all of us at times. Neil\'s key message was one that we can, and will, take away with us and use whenever we need it. Having worked for 17 years in mainstream education, before moving to a specialist mental health provision, I can whole-heartedly recommend Neil to any school.","cite":"Phillip Arrowsmith, Headteacher, Wirral Hospitals\' School"},{"quote":"I would recommend Neil 100%. Every child was engaged, and those with anxiety hung on his every word. <strong>Can\'t wait to have Neil back.</strong>","fuller_quote":"I would recommend Neil 100%. I have already mentioned the amazing talks you do in our local accelerator school meetings. The day was great. In both assemblies every child was engaged and you could see those children known to us with anxiety hanging on Neils every word. During the workshops it was nice to see those quieter children speak up about their feelings and emotions. Can\'t wait to have Neil back.","cite":"Emma Pennington, New Brighton Primary"},{"quote":"It was a very good day. I enjoyed the workshop and Neil gave me advice to help me out with my feelings and emotions. I can now calm myself down and know how to look after myself.","fuller_quote":"It was a very good day. I enjoyed the workshop and Neil gave me advice to help me out with my feelings and emotions. I can now calm myself down and know how to look after myself.","cite":"A student, New Brighton Primary"},{"quote":"Fantastic day. I liked the game where we named a penguin. Mine was called Icy.","fuller_quote":"Fantastic day. I liked the game we played where we named a penguin. Mine was called Icy.","cite":"A student, New Brighton Primary"},{"quote":"Neil was very well received. Parents told us their children had commented positively at home. <strong>We would certainly like Neil to do further assemblies in future.</strong>","fuller_quote":"The assemblies presented by Neil Hughes were very well received.  Some Y11 pupils have asked for his book to be stocked in the library.  We had comments from parents to say their children had gone home and commented positively on the assembly and, when asked, students from different year groups said they had found it very helpful.  We would certainly like to invite Neil to do further assemblies in future if this was possible.","cite":"Neston High School"},{"quote":"The children really enjoyed Neil coming in to talk about mental health. They were fully engaged, and <strong>he managed to make this difficult topic accessible and funny to pupils in both Key Stage 1 and 2</strong>. Afterwards, he visited each class to answer questions and discuss any concerns or feelings they had. This was a really positive experience. It\'s a YES from us!","fuller_quote":"The children really enjoyed Neil coming in to talk about mental health. During assembly they were fully engaged with Neil\'s presentation, and he managed to make this difficult topic accessible and funny to pupil\'s in both Key Stage 1 and 2. Neil then took the time to visit each class to answer questions and discuss any concerns or feelings they had. This was a really positive experience for them to be able to openly discuss their emotions in a safe environment with a trusted and knowledgeable adult. It\'s a YES from us!!","cite":"Egremont Primary School"},{"quote":"Neil delivered <strong>engaging and interesting assemblies to over 800 pupils</strong>, presenting challenging subject matter in a style that made it easier for children to talk about mental health issues whilst also garnering smiles and laughs. It was a pleasure to host Neil for assemblies during this week.","fuller_quote":"Neil delivered engaging and interesting assemblies to over 800 pupils as part of our whole school focus on World Mental Health Day. He presented challenging subject matter in a style that made it easier for children to talk about mental health issues whilst also garnering smiles and laughs from our pupils. The metaphor he used for anxiety throughout the assembly was a very interesting approach to thinking about mental health and certainly opened up the conversation. It was a pleasure to host Neil for assemblies during this week.","cite":"The Oldershaw Academy"},{"quote":"Neil really helped me to appreciate a lot of aspects of poor mental health but [his talk] was really funny too!","fuller_quote":"It was really good. The analogies and comparisons made everything easy to understand. We use a lot of words like anxiety and depression every day without really understanding the real meaning of them to people suffering from the conditions. I feel like it really helped me to appreciate a lot of aspects of poor mental health but it was really funny too!","cite":"Martha, student, <a href=\'https://bsfc.ac.uk/blog/2020-02-12-14-27-47-walking-on-custard-college-gets-a-comedian-s-take-on-suffering-from-mental-healt\'>Birkenhead Sixth Form College</a>"},{"quote":"Neil\u2019s talks are a brilliant way to get across extremely complex problems in an entertaining way. His advice to help combat anxiety is excellent, and we\u2019re extremely grateful that he was able to take the time to come and talk to us all.","fuller_quote":"Neil\u2019s talks are a brilliant way to get across extremely complex problems in an entertaining way. I think it really helps people to empathise with sufferers for one thing, but his deeply personal experiences of dealing with his mental health issues are relatable to a lot of people, and even may have helped some of us recognise a problem that we didn\u2019t fully understand that we may be suffering from ourselves. His advice on solutions to help combat anxiety is excellent, and we\u2019re extremely grateful that he was able to take the time to come and talk to us all.","cite":"Jen Foden, Mental Health Lead, <a href=\'https://bsfc.ac.uk/blog/2020-02-12-14-27-47-walking-on-custard-college-gets-a-comedian-s-take-on-suffering-from-mental-healt\'>Birkenhead Sixth Form College</a>"}]')},135:function(e){e.exports=JSON.parse('[{"quote":"Neil entertained over 200 attendees from around the world at Copy Capital and was one of the most talked about speakers, bravely touching on real issues. <strong>He should be on every conference agenda</strong>.","fuller_quote":"Neil entertained over 200 attendees from around the world at Copy Capital. He was one of the most talked about speakers, bravely touching on very real issues. He talks with humility and humour so he enlightens and entertains. <strong>He should be on every conference agenda</strong> as we all work together to banish stigmas in the workplace.","cite":"Vikki Ross"},{"quote":"Addresses serious topics with a great sense of humour, putting us all at ease to discuss a subject that no one discusses openly in the workplace. <strong>Great content and delivery, and good fun!</strong>","cite":"Alicia Benito Martinez, <a href=\'http://ebrd.com/home\'>European Bank for Reconstruction and Development</a>"},{"quote":"Having Neil speak at our Staff Away Day was a great way to get each team member to reflect on how we think about ourselves and how this can improve wellbeing at work.","cite":"<a href=\'http://www.wiredaerialtheatre.com/\'>Wired Aerial Theatre Company</a>"},{"quote":"Despite the event taking place virtually, <strong>Neil was able to reveal his ideas and witty personality through the screen</strong>, instantly becoming the fan-favourite at the event!","fuller_quote":"Neil Hughes gave a brilliant and inspiring presentation at the 3rd Annual Trent Graduate Students Symposium (TGSS) event, and had a message applicable and relevant to all graduate students from all walks of life. Neil created a lasting impression on the audience through his incredible humour and helpful advice while depicting everything you need to know about multipotentiality. He spoke about his own life story and real life case studies that demonstrated how to utilize your multiple talents and skills to develop your dream career. Neil spoke about dealing with the feelings of anxiety when it comes to failure and reminded students to choose to view success when it comes to doing what you love. Despite the event taking place virtually, he was still able to reveal his ideas and witty personality through the screen, instantly becoming the fan-favourite at the event!. When asked about thoughts on his presentation, a Trent graduate student said, \'Great! I related strongly to the topics presented. Well spoken and funny.\' Another Trent graduate student said, \'Really loved this talk, I thought he had such an interesting perspective and I think he\'s convinced me to embrace my inner multipotentialite!!!\'","cite":"<a href=\'https://www.trentu.ca/\'>Trent University</a>"},{"quote":"Brilliant... inspiring... Neil created a lasting impression on the audience through his <strong>incredible humour and helpful advice</strong>.","fuller_quote":"Neil Hughes gave a brilliant and inspiring presentation at the 3rd Annual Trent Graduate Students Symposium (TGSS) event, and had a message applicable and relevant to all graduate students from all walks of life. Neil created a lasting impression on the audience through his incredible humour and helpful advice while depicting everything you need to know about multipotentiality. He spoke about his own life story and real life case studies that demonstrated how to utilize your multiple talents and skills to develop your dream career. Neil spoke about dealing with the feelings of anxiety when it comes to failure and reminded students to choose to view success when it comes to doing what you love. Despite the event taking place virtually, he was still able to reveal his ideas and witty personality through the screen, instantly becoming the fan-favourite at the event!. When asked about thoughts on his presentation, a Trent graduate student said, \'Great! I related strongly to the topics presented. Well spoken and funny.\' Another Trent graduate student said, \'Really loved this talk, I thought he had such an interesting perspective and I think he\'s convinced me to embrace my inner multipotentialite!!!\'","cite":"<a href=\'https://www.trentu.ca/\'>Trent University</a>"}]')},146:function(e,t,a){"use strict";a.r(t);a(1);var s=a(3),i=a.p+"static/media/ted_speak.524cc6b4.jpg",n=a.p+"static/media/ted_speak.5adc22b4.webp",o=a.p+"static/media/ted_speak.b965a6c1.jp2",r=a.p+"static/media/ted_speak.7f4e1bd2.jxr",l=a(98),c=a(99),h=a(100),d=a(101),u=a.p+"static/media/ebrd.7c04c5f5.jpg",m=a.p+"static/media/ebrd.b2099350.webp",p=a.p+"static/media/ebrd.4f782bb8.jp2",g=a.p+"static/media/ebrd.0b932126.jxr",b=a(95),f=a(106),y=a(20),j=a(97),w=a(96),v=a(94),x=a(108),k=a(0);var O=function(){return Object(k.jsx)("div",{className:"tile is-12",children:Object(k.jsxs)("article",{className:"message is-danger has-text-centered",children:[Object(k.jsx)("div",{className:"message-header",children:Object(k.jsx)("p",{children:"How to Book Neil"})}),Object(k.jsx)("div",{className:"message-body",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("p",{children:["Contact ",Object(k.jsx)("strong",{children:"neil@walkingoncustard.com"})," or"," ",Object(k.jsx)("strong",{children:"use the button below"})," for a quote for your event. Please include (potential) dates, your intended audience and the expected length of the session."]}),Object(k.jsxs)("p",{children:["I'm currently based in the"," ",Object(k.jsx)("strong",{children:"northwest of England"}),", but I regularly travel all over the UK (and further, if required)."]}),Object(k.jsxs)("p",{children:["Thanks to the"," ",Object(k.jsx)(s.b,{to:"/support",children:"generosity of the community"}),", a"," ",Object(k.jsx)("strong",{children:"limited number of free events are available"}),". (Priority is given to state schools and charities.) If you think you might qualify for one of these then please ask!"]}),Object(k.jsx)("p",{children:"Even if you don't qualify for a free event, please enquire\u2014I try to accommodate all budgets as flexibly as I can."}),Object(k.jsx)("p",{children:Object(k.jsx)(w.a,{to:"/contact",className:"button is-danger is-rounded",children:"Ask about a talk"})})]})})]})})};t.default=function(){var e=a(134),t=a(135);return Object(k.jsxs)("div",{children:[Object(k.jsx)(y.a,{page:"speaking"}),Object(k.jsxs)("div",{className:"tile is-ancestor is-vertical",children:[Object(k.jsxs)("div",{className:"tile is-parent is-12",children:[Object(k.jsx)("div",{className:"tile is-parent is-7",children:Object(k.jsx)("div",{className:"tile is-child",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)("h2",{className:"subtitle notification is-success",children:"Neil speaks about anxiety & mental health..."}),Object(k.jsx)("h4",{className:"subtitle notification is-light",children:"... in schools, universities, conferences, staff training days, and at events of all kinds."}),Object(k.jsx)("p",{children:"He explores anxiety and other difficult feelings through warm stories, funny observations and practical tips for emotional management."}),Object(k.jsx)("p",{children:Object(k.jsx)("strong",{children:"Whether or not you live with anxiety, you will come away with ideas for living a happier life."})})]})})}),Object(k.jsx)("div",{className:"tile is-parent is-5",children:Object(k.jsx)("div",{className:"tile is-child",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsxs)("div",{className:"notification is-light has-text-centered",children:["Over ",x.a.toLocaleString()," ","people have watched Neil's hilarious and inspiring story on"," ",Object(k.jsx)("a",{href:"http://bit.ly/custardTED",target:"_blank",rel:"noreferrer noopener",children:"YouTube"})]}),Object(k.jsx)(v.a,{fallback:l.a,webp:c.a,jxr:d.a,jp2:h.a,alt:"Neil Hughes speaking",title:"Neil Hughes speaking"})]})})})]}),Object(k.jsx)("div",{className:"tile is-parent has-text-centered",children:Object(k.jsx)("div",{className:"tile is-child has-text-centered",children:Object(k.jsx)(w.a,{to:"/contact",className:"button is-danger is-rounded",children:"Ask about booking a talk"})})}),Object(k.jsx)("div",{className:"tile is-parent is-12 ",children:Object(k.jsxs)("div",{className:"tile is-child has-text-centered",children:[Object(k.jsx)("h3",{className:"subtitle",children:"Schools say:"}),Object(k.jsx)(f.a,{quotes:e,secondsPerQuote:12,secondsPerTransition:1.5,randomStart:!0})]})}),Object(k.jsxs)("div",{className:"tile is-parent",children:[Object(k.jsx)("div",{className:"tile is-parent is-5",children:Object(k.jsx)("div",{className:"tile is-child",children:Object(k.jsx)(v.a,{fallback:u,webp:m,jp2:p,jxr:g,alt:"Neil Hughes at EBRD",title:"Neil Hughes at EBRD"})})}),Object(k.jsx)("div",{className:"tile is-parent is-7",children:Object(k.jsxs)("div",{className:"tile is-child has-text-centered",children:[Object(k.jsx)("h3",{className:"subtitle",children:"Businesses say:"}),Object(k.jsx)(f.a,{quotes:t,secondsPerQuote:13,secondsPerTransition:1.5,randomStart:!0})]})})]}),Object(k.jsxs)("div",{className:"tile is-parent",children:[Object(k.jsx)("div",{className:"tile is-parent is-7",children:Object(k.jsx)("div",{className:"tile is-child notification is-light",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)("h2",{children:"Available for..."}),Object(k.jsxs)("p",{children:["All sessions are"," ",Object(k.jsx)("strong",{children:"flexible according to your needs"}),", but here are some common requests:"]}),Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:"School Assemblies (15-50 minutes)"}),Object(k.jsx)("li",{children:"Staff training (20 minutes - multiple hours)"}),Object(k.jsx)("li",{children:"Conferences (20 minutes - 1 hour)"}),Object(k.jsx)("li",{children:"Other sessions tailored by request"})]}),Object(k.jsx)(b.a,{quote:"Thank you for your contribution to raising awareness and understanding of mental health. You are a star!",cite:"Norman Lamb, MP"})]})})}),Object(k.jsx)("div",{className:"tile is-parent is-5",children:Object(k.jsx)("div",{className:"tile is-child",children:Object(k.jsxs)("div",{className:"content",children:[Object(k.jsx)(b.a,{quote:"I have finally arranged to do something properly about my anxiety issues. Your Ted Talk was very much the start of the process\u2026 thank you.",cite:"Louise"}),Object(k.jsx)(v.a,{fallback:i,webp:n,jp2:o,jxr:r,alt:"Neil Hughes at TEDx LeamingtonSpa",title:"Neil Hughes at TEDx LeamingtonSpa"})]})})})]}),Object(k.jsx)(O,{}),Object(k.jsx)("div",{className:"is-divider","data-content":"Watch Neil speak openly, honestly and hilariously about anxiety & custard:"}),Object(k.jsx)(j.a,{videoId:"bM06o26PCDQ"})]})]})}},94:function(e,t,a){"use strict";var s=a(14),i=a(21),n=(a(1),a(0));t.a=function(e){var t=e.fallback,a=e.webp,o=e.jp2,r=e.jxr,l=Object(i.a)(e,["fallback","webp","jp2","jxr"]);return Object(n.jsxs)("picture",{children:[a&&Object(n.jsx)("source",{srcset:a,type:"image/webp"}),o&&Object(n.jsx)("source",{srcset:o,type:"image/jp2"}),r&&Object(n.jsx)("img",Object(s.a)({src:r,alt:"",type:"image/vnd.ms-photo"},l)),t&&!r&&Object(n.jsx)("img",Object(s.a)({alt:"",src:t},l))]})}},95:function(e,t,a){"use strict";a(1);var s=a(0);t.a=function(e){return Object(s.jsxs)("blockquote",{children:[e.showLoader&&Object(s.jsx)("div",{className:"loader"}),Object(s.jsxs)("div",{className:"quoteText",style:{opacity:e.opacity?e.opacity:1},children:[Object(s.jsx)("span",{dangerouslySetInnerHTML:{__html:e.quote}}),Object(s.jsx)("cite",{dangerouslySetInnerHTML:{__html:e.cite}})]})]})}},96:function(e,t,a){"use strict";var s=a(14),i=a(21),n=(a(1),a(2)),o=a(0);t.a=Object(n.h)((function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),n=e.onClick,r=Object(i.a)(e,["history","location","match","staticContext","to","onClick"]);return Object(o.jsx)("button",Object(s.a)(Object(s.a)({},r),{},{onClick:function(e){n&&n(e),t.push(a)}}))}))},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var s=a(5),i=a(6),n=a(8),o=a(7),r=a(1),l=a.n(r),c=a(0),h=function(e){Object(n.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).state={playClicked:!1},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"youtube-player","data-id":this.props.videoId,children:Object(c.jsxs)("div",{onClick:function(){return e.setState({playClicked:!0})},children:[Object(c.jsx)("img",{alt:"",src:"https://i.ytimg.com/vi/"+this.props.videoId+"/hqdefault.jpg"}),!this.state.playClicked&&Object(c.jsx)("div",{className:"play"}),this.state.playClicked&&Object(c.jsx)("iframe",{title:"Neil Hughes - Walking on Custard TEDx Talk",frameBorder:"0",allowFullScreen:"1",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",src:"https://www.youtube.com/embed/"+this.props.videoId+"?autoplay=1"})]})})}}]),a}(l.a.Component)},98:function(e,t,a){"use strict";t.a=a.p+"static/media/OneTrackMinds.a4f86324.jpg"},99:function(e,t,a){"use strict";t.a=a.p+"static/media/OneTrackMinds.f62d2103.webp"}}]);
//# sourceMappingURL=6.fe39ad19.chunk.js.map