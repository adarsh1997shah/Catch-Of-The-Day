(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{35:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(15),i=a.n(r),l=a(32),o=a(1),c=a(3),u=a(4),h=a(6),m=a(5);function d(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function p(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(p(e),"-").concat(p(e),"-").concat(p(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var g=a(31),v=a.n(g),b=a(11),y=a.n(b),E=(a(41),y.a.initializeApp({apiKey:"AIzaSyDIw8Z9UQfzqW0ZYKh0-S5I-tX8v4VVe70",authDomain:"catch-of-the-day-76b13.firebaseapp.com",databaseURL:"https://catch-of-the-day-76b13.firebaseio.com"}),v.a.createClass(y.a.database())),O=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.state.current||e.setState({storeName:t.target.value})},e.goToStore=function(t){t.preventDefault(),e.props.history.push("store/".concat(e.state.storeName))},e.state={storeName:f(),current:"",isLoading:!0},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.fetch("CurrentUrl",{context:this}).then((function(t){e.setState({isLoading:!1}),""!==t&&e.setState({storeName:t,current:t})}))}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.state.isLoading?"":s.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},s.a.createElement("h2",null,"Please Enter A Store"),s.a.createElement("input",{type:"text",required:!0,placeholder:"Store Name",onChange:this.handleChange,value:this.state.storeName,disabled:!!this.state.current}),s.a.createElement("button",{type:"submit"},"Visit Store \u2192"),this.state.current?s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",null,"Note:"),s.a.createElement("p",null,"You are logged into above url.You cant change it unless you log out of current url.")):""))}}]),a}(s.a.Component),S=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("header",{className:"top"},s.a.createElement("h1",null,"Catch",s.a.createElement("span",{className:"ofThe"},s.a.createElement("span",{className:"of"},"of"),s.a.createElement("span",{className:"the"},"the")),"Day"),s.a.createElement("h3",{className:"tagline"},s.a.createElement("span",null,this.props.tagline))))}}]),a}(s.a.Component),C=a(12),k=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).calcTotalPrice=function(){return Object.keys(e.props.orders).reduce((function(t,a){var n=e.props.fishes[a],s=e.props.orders[a];return!(!n||"available"!==n.status)?t+s*n.price:t}),0)},e.renderOrder=function(t){var a=e.props.fishes[t],n=e.props.orders[t],r=!(!a||"available"!==a.status);return a?r?s.a.createElement(C.CSSTransition,{timeout:300,classNames:"order",key:t},s.a.createElement("li",{key:t},s.a.createElement("span",null,s.a.createElement(C.TransitionGroup,{component:"span",className:"count"},s.a.createElement(C.CSSTransition,{timeout:300,classNames:"count",key:n},s.a.createElement("span",null,n))),"lbs ",a.name," ",d(a.price*n),s.a.createElement("button",{onClick:function(){return e.props.deleteOrder(t)}},"\xd7")))):s.a.createElement("li",{key:t},"Sorry ",a?a.name+"has been sold out":"fish is no longer availble"):null},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"order"},s.a.createElement("h2",null,"Order"),s.a.createElement(C.TransitionGroup,{component:"ul",className:"order"},Object.keys(this.props.orders).map(this.renderOrder)),s.a.createElement("div",{className:"total"},s.a.createElement("span",null,"Total:"),s.a.createElement("strong",null,d(this.calcTotalPrice())))))}}]),a}(s.a.Component),j=a(34),F=a(16),N=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({[t.target.name]:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({price:parseInt(e.state.price)}),e.props.addFish(e.state),e.setState(e.initialstate)},e.state={name:"",price:"",status:"available",desc:"",image:""},e.initialstate=e.state,e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"fish-edit",onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"Fish Name",required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",name:"price",value:this.state.price,placeholder:"Fish Price",required:!0,onChange:this.handleChange}),s.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.state.status},s.a.createElement("option",{value:"available"},"Fresh"),s.a.createElement("option",{value:"unavailable"},"Sold Out")),s.a.createElement("textarea",{name:"desc",value:this.state.desc,placeholder:"Fish Description",required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",name:"image",value:this.state.image,placeholder:"Fish Image",onChange:this.handleChange}),s.a.createElement("button",{type:"submit"},"Add Fish +")))}}]),a}(s.a.Component),w=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.editFish(e.props.index,t.target.name,t.target.value)},e.handleClick=function(){e.props.deleteFish(e.props.index)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.desc,n=e.name,r=e.price,i=e.status;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"fish-edit"},s.a.createElement("input",{type:"text",name:"name",value:n,placeholder:"Fish Name",required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",name:"price",value:r,placeholder:"Fish Price",required:!0,onChange:this.handleChange}),s.a.createElement("select",{name:"status",onChange:this.handleChange,value:i},s.a.createElement("option",{value:"available"},"Fresh"),s.a.createElement("option",{value:"unavailable"},"Sold Out")),s.a.createElement("textarea",{name:"desc",value:a,placeholder:"Fish Description",required:!0,onChange:this.handleChange}),s.a.createElement("input",{type:"text",name:"image",value:t,placeholder:"Fish Image",onChange:this.handleChange}),s.a.createElement("button",{onClick:this.handleClick},"Remove Fish")))}}]),a}(s.a.Component),x=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"login"},s.a.createElement("h2",null,"Inventory Login"),s.a.createElement("p",null,"Sign in to manage your ","store's"," Inventory"),s.a.createElement("button",{className:"facebook",onClick:function(){return e.props.authenticate("Facebook")}},"Log In With Facebook"),s.a.createElement("button",{className:"github",onClick:function(){return e.props.authenticate("Github")}},"Log In With GitHub")))}}]),a}(s.a.Component),I=(a(53),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).authHandler=function(e){var t={};n.setState({isLoading:!0}),E.fetch(n.props.storeId,{context:Object(F.a)(n)}).then((function(a){a.owner||(t={uid:e.user.uid,email:e.user.email,name:e.user.displayName},E.post("".concat(n.props.storeId,"/owner"),{data:Object(j.a)({},t)})),n.setState({isLoading:!1,uid:e.user.uid,owner:a.owner?a.owner.uid:e.user.uid,name:e.user.displayName})})).catch((function(e){console.log("Opps you have an error "+e.message)}))},n.authenticate=function(e){var t=new(y.a.auth["".concat(e,"AuthProvider")]);y.a.auth().signInWithPopup(t).then(n.authHandler).catch((function(e){console.log("Opps you got some error! "+e.message)}))},n.logout=function(){y.a.auth().signOut().then((function(){console.log("sign out successfull"),n.setState({uid:null,current:null}),E.post("CurrentUrl",{data:""})})).catch((function(e){console.log("Opps problem with signing out",e.message)}))},n.state={isLoading:!0,uid:null,owner:null,name:null,current:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.auth().onAuthStateChanged((function(t){t?(e.authHandler({user:t}),E.post("CurrentUrl",{data:e.props.storeId})):e.setState({isLoading:!1})}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"inventory"},s.a.createElement("h2",null,"Inventory"))):this.state.uid?this.state.uid!==this.state.owner?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement("button",{onClick:this.logout},"Log Out"),s.a.createElement("div",null,"Sorry you are not the owner"))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"inventory"},s.a.createElement("h2",null,"Inventory"),s.a.createElement("h4",null,s.a.createElement("center",null,"Welcome, ",this.state.name)),s.a.createElement("button",{onClick:this.logout},"Log Out"),Object.keys(this.props.fishes).map((function(t){return s.a.createElement(w,{key:t,index:t,details:e.props.fishes[t],editFish:e.props.editFish,deleteFish:e.props.deleteFish})})),s.a.createElement(N,{addFish:this.props.addFish}),s.a.createElement("button",{onClick:this.props.loadSampleFish},"Load Sample Fishes"))):s.a.createElement(s.a.Fragment,null,s.a.createElement(x,{authenticate:this.authenticate}))}}]),a}(s.a.Component)),L={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},T=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){e.props.addOrder(e.props.index)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.details,t=e.image,a=e.desc,n=e.name,r=e.price,i="available"===e.status;return s.a.createElement(s.a.Fragment,null,s.a.createElement("li",{className:"menu-fish",style:{transitionDelay:"".concat(150*(parseInt(this.props.transitionIndex)+1),"ms")}},s.a.createElement("img",{src:t,alt:n}),s.a.createElement("h3",{className:"fish-name"},n,s.a.createElement("span",{className:"price"},d(r))),s.a.createElement("p",null,a),s.a.createElement("button",{disabled:!i,onClick:this.handleClick},i?"Add To Cart":"Sold Out!")))}}]),a}(s.a.Component),A=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).addFish=function(t){var a=e.state.fishes;a["fish".concat(Object.keys(a).length+1)]=t,e.setState({fishes:a})},e.editFish=function(t,a,n){var s=e.state.fishes;s[t][a]=n,e.setState({fishes:s})},e.deleteFish=function(t){var a=e.state.fishes;a[t]=null,e.setState({fishes:a})},e.loadSampleFish=function(){e.setState({fishes:L})},e.addOrder=function(t){var a=e.state.orders;a[t]?a[t]++:a[t]=1,e.setState({orders:a})},e.deleteOrder=function(t){var a=e.state.orders;delete a[t],e.setState({orders:a})},e.state={fishes:{},orders:{}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=localStorage.getItem(this.props.match.params.store);e&&this.setState({orders:JSON.parse(e)}),this.mounted&&(this.ref=E.syncState("".concat(this.props.match.params.store,"/fishes"),{context:this,state:"fishes"}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.store,JSON.stringify(this.state.orders))}},{key:"componentWillUnmount",value:function(){this.mounted=!1,E.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"catch-of-the-day"},s.a.createElement("div",{className:"menu"},s.a.createElement(S,{tagline:"Fresh Seafood Market"}),s.a.createElement(C.TransitionGroup,{className:"fishes",component:"ul"},Object.keys(this.state.fishes).map((function(t,a){return s.a.createElement(C.CSSTransition,{key:t,classNames:"fish",timeout:300},s.a.createElement(T,{key:t,index:t,transitionIndex:a,details:e.state.fishes[t],addOrder:e.addOrder}))})))),s.a.createElement(k,{fishes:this.state.fishes,orders:this.state.orders,deleteOrder:this.deleteOrder}),s.a.createElement(I,{addFish:this.addFish,loadSampleFish:this.loadSampleFish,fishes:this.state.fishes,editFish:this.editFish,deleteFish:this.deleteFish,storeId:this.props.match.params.store})))}}]),a}(s.a.Component),D=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"Sorry you are in the wrong page."))},P=function(){return s.a.createElement(l.a,null,s.a.createElement(o.c,null,s.a.createElement(o.a,{exact:!0,path:"/",component:O}),s.a.createElement(o.a,{path:"/store/:store",component:A}),s.a.createElement(o.a,{component:D})))};a(57);i.a.render(s.a.createElement(P,null),document.getElementById("main"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ae6ebd08.chunk.js.map