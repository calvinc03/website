(this.webpackJsonppersonalwebsite=this.webpackJsonppersonalwebsite||[]).push([[0],{251:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(68),i=t.n(r),c=(t(76),t(2)),o=t(3),s=t(5),m=t(4),u=(t(77),t(69)),d=t.n(u),p=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleScroll=function(){var e=window.pageYOffset,a=n.state.prevScrollpos>e;document.getElementById("nav-wrap").style.backgroundColor=e<=200?"rgb(1,1,1, 0)":"rgb(20, 22, 22)",n.setState({prevScrollpos:e,visible:a})},n.state={prevScrollpos:window.pageYOffset,visible:!0},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.visible;return l.a.createElement("header",{id:"home"},l.a.createElement("div",{className:"header-container"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("div",{className:e?"nav":"inactive-nav"},l.a.createElement("a",{className:"homebutton",href:"#home"},"CC"),l.a.createElement("ul",{className:"menu-bar"},l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"ABOUT")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"EXPERIENCE")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"PROJECTS"))))),l.a.createElement("div",{className:"row-banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement(d.a,{options:{strings:["Hello","Hi","Bonjour","\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435","Hola","\u4f60\u597d","Salve","\u05e9\u05dc\u05d5\u05dd","\u0421\u0430\u0439\u043d \u0443\u0443","Ahoj","\uc548\ub155\ud558\uc138\uc694","\u3053\u3093\u306b\u3061\u306f","Zdravo","\u03a7\u03b1\u03af\u03c1\u03b5\u03c4\u03b5","\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7","Hall\xf3","Szia"],autoStart:!0,loop:!0}}),l.a.createElement("h1",null,"I'm Calvin Chen."),l.a.createElement("h3",null,"4th year Math + Computer Science Major ",l.a.createElement("br",null),"Aspiring Software Developer "),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/calvin.chen.125"},l.a.createElement("img",{src:"https://img.icons8.com/fluent/48/000000/facebook-new.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/calvin-chen-aa9139184/"},l.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03"},l.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/github.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/calvinchen8/"},l.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/instagram.png"}))))))))}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).handleScroll=function(){window.pageYOffset>=550?n.setState({visible:!0}):n.setState({visible:!1})},n.state={visible:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){var e=this.state.visible,a=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);return l.a.createElement("footer",null,l.a.createElement("div",{className:e?"button-top":"inactive"},l.a.createElement("a",{href:"#home"},l.a.createElement("img",{className:"to-top",src:"https://img.icons8.com/windows/60/000000/circled-chevron-up.png"}))),l.a.createElement("div",{className:a<600?"inactive":"footer-contact"},l.a.createElement("ul",{className:e?"footer-social":"inactive"},l.a.createElement("li",null,l.a.createElement("a",{href:"tel:604-218-7779"},l.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/phone.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"mailto:chencalvin.15@gmail.com"},l.a.createElement("img",{className:"mail",src:"https://img.icons8.com/fluent/48/000000/gmail.png"}))),l.a.createElement("br",null),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/calvin.chen.125"},l.a.createElement("img",{src:"https://img.icons8.com/fluent/48/000000/facebook-new.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/calvin-chen-aa9139184/"},l.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/linkedin.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03"},l.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/github.png"}))),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.instagram.com/calvinchen8/"},l.a.createElement("img",{src:"https://img.icons8.com/color/48/000000/instagram.png"}))))),l.a.createElement("p",null,"W by Calvin Chen in React JS"))}}]),t}(n.Component),g=t(8),E=t.n(g),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"about"},l.a.createElement(E.a,{bottom:!0},l.a.createElement("div",{className:"row"},l.a.createElement("img",{className:"profile-pic",src:"https://www.dropbox.com/s/kfs88p540uu87ao/profile.jpg?raw=1",alt:"Calvin Chen Profile Pic"}),l.a.createElement("div",{className:"about-info"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,"As a student at the ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://www.ubc.ca/"},"University of British Columbia")),", I am passionate about learning, exploring and developing new technologies in this ever evolving industry. I enjoy problem solving and identifying areas in which we can further enhance our daily lives with software applications. ",l.a.createElement("br",null)," ",l.a.createElement("br",null),"Currently at ",l.a.createElement("b",null,l.a.createElement("a",{href:"https://rewind.com/"},"Rewind")),", I have learned how integral backing up data is for for e-commerce business owners. My goal is to keep developing applications and services to allow online owners to securely manage their products."),l.a.createElement("div",{className:"row-contact"},l.a.createElement("div",{className:"contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"contact"},l.a.createElement("a",{href:"tel:604-218-7779"},"(604) 218-7779"),l.a.createElement("br",null),l.a.createElement("a",{href:"mailto:chencalvin.15@gmail.com"},"chencalvin.15@gmail.com"))),l.a.createElement("div",{className:"download"},l.a.createElement("a",{href:"https://www.dropbox.com/s/1i81dpocz4dtf79/Resume.pdf?raw=1",target:"_blank",rel:"noopener noreferrer",className:"button"},"View Resume")))))))}}]),t}(n.Component),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={tabs:"education",CPSC210:!1,CPSC320:!1,CPSC340:!1,CPSC317:!1},n}return Object(o.a)(t,[{key:"openTab",value:function(e){this.setState({tabs:e})}},{key:"changeView",value:function(e){if("CPSC210"===e){var a=!this.state.CPSC210;this.setState({CPSC210:a})}else if("CPSC320"===e){var t=!this.state.CPSC320;this.setState({CPSC320:t})}else if("CPSC340"===e){var n=!this.state.CPSC340;this.setState({CPSC340:n})}else if("CPSC317"===e){var l=!this.state.CPSC317;this.setState({CPSC317:l})}}},{key:"render",value:function(){var e=this,a=this.state,t=a.tabs,n=a.CPSC210,r=a.CPSC320,i=a.CPSC340,c=a.CPSC317;return l.a.createElement("section",{id:"resume"},l.a.createElement(E.a,{bottom:!0},l.a.createElement("div",{className:"row"},l.a.createElement("ul",{className:"tab"},l.a.createElement("li",{className:"education"===t?"tablinks active":"tablinks",onClick:function(){return e.openTab("education")}},"Education",l.a.createElement("div",{className:"underline"})),l.a.createElement("li",{className:"work"===t?"tablinks active":"tablinks",onClick:function(){return e.openTab("work")}},"Work",l.a.createElement("div",{className:"underline"})),l.a.createElement("li",{className:"skills"===t?"tablinks active":"tablinks",onClick:function(){return e.openTab("skills")}},"Skills",l.a.createElement("div",{className:"underline"}))),l.a.createElement("div",{className:"education"===t?"tabcontent active":"inactive",id:"education"},l.a.createElement("div",null,l.a.createElement("h3",{className:"info-location"},"University of British Columbia"),l.a.createElement("p",{className:"info"},l.a.createElement("em",{className:"title"}," Bachelors of Science "),l.a.createElement("span",null,"\u2022"),l.a.createElement("span",{className:"date"},"Expected Graduation: 2021")),l.a.createElement("button",{type:"button",className:"expand",onClick:function(){return e.changeView("CPSC210")}},"CPSC 210 - Software Construction"),l.a.createElement("div",{className:n?"courses":"inactive"},l.a.createElement("p",null,"Developed knowledge of Object Oriented Programming concepts such as Inheritance classes and encapsulation through program design using Java and gained elementary understanding of UI through the usage of simple functions and data types to create a mobile application for Android")),l.a.createElement("button",{type:"button",className:"expand",onClick:function(){return e.changeView("CPSC320")}},"CPSC 320 - Intermediate Algorithms and Data Structures"),l.a.createElement("div",{className:r?"courses":"inactive"},l.a.createElement("p",null,"Designed programs to reduce the time complexity of polynomial time algorithms through dynamic programming and developed an intermediate understanding of graph theory and their algorithms to model real life problems through the reduction of known problems")),l.a.createElement("button",{type:"button",className:"expand",onClick:function(){return e.changeView("CPSC340")}},"CPSC 340 - Data Mining and Machine Learning"),l.a.createElement("div",{className:i?"courses":"inactive"},l.a.createElement("p",null,"Created collaborative filtering and content-based model to predict user-item ratings for Amazon API and developed an understanding on deep learning models and optimization techniques by creating models to predict handwritten digits from MNIST database")),l.a.createElement("button",{type:"button",className:"expand",onClick:function(){return e.changeView("CPSC317")}},"CPSC 317 - Internet Computing"),l.a.createElement("div",{className:c?"courses":"inactive"},l.a.createElement("p",null,"Explored the Internet protocol stack and the responsibilities of each layer while examining a wide range of topics including data loss, reliability, performance and secure networks through the creation of a File Transfer Protocol Program in C.")))),l.a.createElement("div",{className:"work"===t?"tabcontent active":"inactive",id:"work"},l.a.createElement("div",null,l.a.createElement("h3",{className:"info-location"},"Rewind"),l.a.createElement("p",{className:"info"},l.a.createElement("em",{className:"title"}," Software Developer"),l.a.createElement("span",null,"\u2022"),l.a.createElement("span",{className:"date"},"August 2021 - Present")),l.a.createElement("ul",{className:"work-info"},l.a.createElement("li",null,"Designed and developed AWS lambdas functions to store backup procedures in DynamoDB and S3 services, ensuring that each client\u2019s data can be readily restored"),l.a.createElement("li",null,"Implemented the usage of Cloudwatch alarms, customized logger and SNS to track a request from end to end and ensure that the proper groups are notified in case of an error"),l.a.createElement("li",null,"Maintained and integrated new features into Rewind web app, such as applying the correct add-ons and discounts using Stripe API to allow clients to smoothly checkout their desired subscription services"))),l.a.createElement("div",null,l.a.createElement("h3",{className:"info-location"},"Eventbase Technology"),l.a.createElement("p",{className:"info"},l.a.createElement("em",{className:"title"}," Quality Assurance Engineer Intern"),l.a.createElement("span",null,"\u2022"),l.a.createElement("span",{className:"date"},"July 2019 - April 2020")),l.a.createElement("ul",{className:"work-info"},l.a.createElement("li",null,"Designed test cases using Appium driver and pytest tools to test the functionality of our backend, frontend and mobile UI features through every product release"),l.a.createElement("li",null,"Worked in an agile environment with project managers and developers to verify and deploy our products onto the app store"),l.a.createElement("li",null,"Worked on automated tools that utilizes databases in our test cases to generalize and perform automated tests on live apps")))),l.a.createElement("div",{className:"skills"===t?"tabcontent active":"inactive",id:"skills"},l.a.createElement("ul",{className:"skills"},l.a.createElement("li",null,l.a.createElement("em",null,"git"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"70%"}}))),l.a.createElement("li",null,l.a.createElement("em",null,"python"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"95%"}}))),l.a.createElement("li",null,l.a.createElement("em",null,"java"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"90%"}}))),l.a.createElement("li",null,l.a.createElement("em",null,"javascript"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"70%"}}))),l.a.createElement("li",null,l.a.createElement("em",null,"html/css"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"75%"}}))),l.a.createElement("li",null,l.a.createElement("em",null,"c/c++"),l.a.createElement("div",{className:"skills-bar"},l.a.createElement("div",{className:"skills-bar-color",style:{width:"85%"}}))))))))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("h1",null,"Projects"),l.a.createElement("ul",{className:"projects"},l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/FeastorFamine"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Github")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/aaOkIg770P3R4bPkCG/giphy.gif",alt:"FeastorFamine"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"Feast or Famine"),l.a.createElement("p",null,"A tower defense type game developed in C++ using ECS archetecture design patterns. Users can place up to 7 types of different units all with different effects. Monsters run through the field using A* search to find the fastest path to the village."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/FirstAidEdAndroidApp"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"C++"))))),l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://play.google.com/store/apps/details?id=com.calvinchen.firstaidlearning"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Google Play Store")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/JsbQHL5JHHi0PbM84m/giphy.gif",alt:"discord-bot"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"First Aid Study"),l.a.createElement("p",null,"An individually developed Android application on Google Play Store to help users get a better understanding of First Aid skills and techniques. The app allows users to read passages and test themselves through quizzes."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/FirstAidEdAndroidApp"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"Kotlin"))))),l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://formtracker776.netlify.app/"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Website")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/lQ0ICnM0mA58EtKrMW/giphy.gif",alt:"discord-bot"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"Form and Payment Tracker"),l.a.createElement("p",null,"A front and backend appllication that allows admin users to track members' forms and payments. Basic authentication is used to ensure privacy and automated emails are sent to members that have overdue payments and forms."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/emails_sja"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"JavaScript"),l.a.createElement("span",{className:"languages"},"MySQL"),l.a.createElement("span",{className:"languages"},"Python"))))),l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/Discord-Bot"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Github")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/igsVJZ6i3ob4y0jKgU/giphy.gif",alt:"discord-bot"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"Discord Bot"),l.a.createElement("p",null,"A client bot to enhance the daily functions and messaging platform of the Discord Application. The bot can perform multiple operations such as helping people decide where to eat, playing music and responding to certain messages."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/Discord-Bot"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"JavaScript"))))),l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/FTP-Application"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Github")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/lo4hWSPgBJLlUjGYeK/giphy.gif",alt:"ftp"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"FTP Server"),l.a.createElement("p",null,"A simple FTP server application that takes a file from UBC server and transfers it to your local computer. The server follows RFC 959 protocol and implements most of the basic responses."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/FTP-Application"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"C"),l.a.createElement("span",{className:"languages"},"Server Application"))))),l.a.createElement(E.a,{left:!0},l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/Bus-Application"},l.a.createElement("div",{className:"hover-github"},l.a.createElement("h4",null,"Github")),l.a.createElement("img",{className:"project-pic",src:"https://media.giphy.com/media/LSdd8cnhNgFGGZkpyJ/giphy.gif",alt:"bus"})),l.a.createElement("div",{className:"project-info"},l.a.createElement("h3",null,"Buses R Us"),l.a.createElement("p",null,"An Android Bus Application that allows the user to find their nearest stop using Google Maps API. The application retrieves all the bus times and bus routes from the Translink API and presents it in a user-friendly manner for any given stop."),l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/calvinc03/Bus-Application"},l.a.createElement("img",{src:"https://img.icons8.com/material-sharp/48/000000/github.png",alt:"github"})),l.a.createElement("div",{className:"language-container"},l.a.createElement("span",{className:"languages"},"Java"),l.a.createElement("span",{className:"languages"},"xml"),l.a.createElement("span",{className:"languages"},"Android Application"))))))))}}]),t}(n.Component),w=t(70),k=t.n(w),y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(k.a,{width:"100%",height:"100%",style:{position:"fixed",top:0,left:0,width:"100%",height:"100%"},params:{particles:{number:{value:8,density:{enable:!1,value_area:800}},color:{value:"#1b1e34"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:160,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:8,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}})}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"intro-screen"},l.a.createElement("div",{className:"intro-box"},l.a.createElement("div",{className:"box-top"}),l.a.createElement("div",{className:"box-left"}),l.a.createElement("div",{className:"box-right"}),l.a.createElement("div",{className:"box-bottom"}),l.a.createElement("h1",null,"Calvin Chen")),l.a.createElement("h2",null,"Website Portfolio"))}}]),t}(n.Component),C=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"showPage",value:function(){setTimeout((function(){document.getElementById("container").style.display="block",document.getElementById("home").style.display="block",document.getElementById("intro-screen").style.display="none"}),3500)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app",onLoad:function(){return e.showPage()}},l.a.createElement(N,null),l.a.createElement("div",{id:"home-background"},l.a.createElement(y,null)),l.a.createElement(p,null),l.a.createElement("div",{id:"container"},l.a.createElement(f,null),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(h,null)))}}]),t}(n.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(l.a.createElement(C,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/website",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/website","/service-worker.js");S?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()},71:function(e,a,t){e.exports=t(251)},76:function(e,a,t){},77:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.81c76144.chunk.js.map