(this["webpackJsonpbias-app"]=this["webpackJsonpbias-app"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(1),c=a.n(s),r=(a(13),a(4)),i=a(5),l=a(7),m=a(6),d=(a(14),a(15),a(16),a(2)),h=a.n(d),p=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],u=["police racial profilng","police brutality","police excessive force","police wrongful death","housing discrimination","school segregation","budget","representatives"],w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e.chooseState=function(t){e.setState({selectedState:t.label},(function(){return console.log(e.state)}))},e.chooseTown=function(t){e.setState({selectedTown:t.target.value},(function(){return console.log(e.state)}))},e.choosePrompt=function(t){e.setState({selectedPrompt:t.label},(function(){return console.log(e.state)}))},e.renderChosen=function(){if(e.state.selectedPrompt&&e.state.selectedState&&e.state.selectedTown)return n.a.createElement("div",{className:"selector"},n.a.createElement("div",{className:"component"},"Preview search text: ",e.state.selectedTown," ",e.state.selectedState," ",e.state.selectedPrompt),n.a.createElement("div",{className:"component"},n.a.createElement("a",{href:e.makeURL(),target:"_blank"},"click here")))},e.makeURL=function(){return"https://www.google.com/search?q=".concat(e.state.selectedTown," ").concat(e.state.selectedState," ").concat(e.state.selectedPrompt)},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"component summary"},"To test this prototype, select your home state, type your town, and choose one of the example prompts. Click the link to search."),n.a.createElement("div",{className:"component summary"},"Prompts are just examples for right now"),n.a.createElement("div",{className:"selector"},n.a.createElement(h.a,{className:"dropdown",options:p,onChange:this.chooseState,value:"Select a State"}),n.a.createElement("div",{className:"component"},"Selected state: ",this.state.selectedState)),n.a.createElement("div",{className:"selector"},n.a.createElement("div",{className:"component"},"Enter your town"),n.a.createElement("input",{onChange:this.chooseTown,type:"text"}),n.a.createElement("div",{className:"component"},"Selected town: ",this.state.selectedTown)),n.a.createElement("div",{className:"selector"},n.a.createElement(h.a,{className:"dropdown",options:u,onChange:this.choosePrompt,value:"Select a Prompt"}),n.a.createElement("div",{className:"component"},"Selected prompt: ",this.state.selectedPrompt)),this.renderChosen())}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.b28df2fb.chunk.js.map