(this["webpackJsonpfirebase-auth-app"]=this["webpackJsonpfirebase-auth-app"]||[]).push([[0],{19:function(e,t,r){},42:function(e,t,r){},64:function(e,t,r){"use strict";r.r(t);var s=r(3),n=r.n(s),a=r(17),c=r.n(a),i=(r(42),r(5)),l=r.n(i),o=r(7),u=r(10),d=(r(19),r(23));d.a.initializeApp({apiKey:"AIzaSyCP-FvKLrkNtTxcSFtteLeo8b5EV9KYwjw",authDomain:"cinespire-7ab7d.firebaseapp.com",projectId:"cinespire-7ab7d",storageBucket:"cinespire-7ab7d.appspot.com",messagingSenderId:"519022354411",appId:"1:519022354411:web:5fbd66f07b14b2d44683ae",measurementId:"G-M0RDEZ4NVW"});var h=d.a,p=r(18),j=function(e){var t=Object(s.useState)(e),r=Object(u.a)(t,2),n=r[0],a=r[1];return{value:n,onChange:function(e){a(e.target.value)}}},b=r(2),m=h,v=function(e){var t=e.setCurrentUser,r=e.setColorTheme,s=e.setPageOpen,n=e.setmsOpen,a=e.setmlOpen,c=e.setlsOpen,i=j(""),u=j(""),d=function(){var e=Object(o.a)(l.a.mark((function e(o){var d,p,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.preventDefault(),e.prev=1,!m){e.next=17;break}return e.next=5,m.auth().createUserWithEmailAndPassword(i.value,u.value);case 5:if(!(d=e.sent)){e.next=17;break}return p=JSON.stringify(d.user.email),j=h.auth().currentUser.uid,e.next=11,h.firestore().collection("users").doc(j).set({email:p,theme:"light",watched:[],watchlist:[]});case 11:t(j),r("light"),s("ms"),n(!0),a(!1),c(!1);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),alert(e.t0.message);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"SignupCard",children:[Object(b.jsx)("div",{className:"SignupHeader",children:Object(b.jsx)("h3",{children:"Sign Up"})}),Object(b.jsx)("div",{className:"SignupForm",children:Object(b.jsxs)("form",{onSubmit:d,children:[Object(b.jsx)("input",Object(p.a)({placeholder:"email"},i)),Object(b.jsx)("input",Object(p.a)({type:"password",placeholder:"password"},u)),Object(b.jsx)("button",{type:"submit",children:"Create Account"})]})})]})},O=h,f=function(e){var t=e.setCurrentUser,r=e.setColorTheme,s=e.setPageOpen,n=e.setmsOpen,a=e.setmlOpen,c=e.setlsOpen,i=j(""),u=j(""),d=function(){var e=Object(o.a)(l.a.mark((function e(d){var p,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.preventDefault(),e.prev=1,!O){e.next=18;break}return e.next=5,O.auth().signInWithEmailAndPassword(i.value,u.value);case 5:if(!(p=e.sent)){e.next=16;break}return alert("Welcome back "+p.user.email),t(p.user.email),e.next=11,h.auth().currentUser.uid;case 11:return j=e.sent,e.next=14,h.firestore().collection("users").doc(j).get().then(function(){var e=Object(o.a)(l.a.mark((function e(t){var i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=t.data(),r(i.theme),s("ms"),n(!0),a(!1),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 14:e.next=18;break;case 16:alert("failed"),t(null);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),alert(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"SigninCard",children:[Object(b.jsx)("div",{className:"SigninHeader",children:Object(b.jsx)("h3",{children:"Sign In"})}),Object(b.jsx)("div",{className:"SigninForm",children:Object(b.jsxs)("form",{onSubmit:d,children:[Object(b.jsx)("input",Object(p.a)({placeholder:"email"},i)),Object(b.jsx)("input",Object(p.a)({type:"password",placeholder:"password"},u)),Object(b.jsx)("br",{}),Object(b.jsx)("button",{type:"submit",children:"Sign In"})]})})]})},x=function(e){var t=e.setCurrentUser,r=e.setColorTheme,s=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.auth().signOut();case 3:t(null),alert("signed out"),r("light"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("button",{className:"LogoutButton",onClick:function(){return s()},children:"Log Out"})},g=r(15),S=r.n(g);var w=function(e){e.currentUser;var t=e.setUpdatingWatchlistFlag,r=e.updatingWatchlistFlag,n=e.colorTheme,a=e.setSelectedMovie,c=e.setPageOpen,i=e.setmsOpen,d=e.setmlOpen,p=e.setlsOpen,j=function(e,t){var r=Object(s.useState)([]),n=Object(u.a)(r,2),a=n[0],c=n[1];return Object(s.useEffect)(Object(o.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=h.auth().currentUser.uid,h.firestore().collection("users").doc(r).get().then((function(t){var r=t.data();c(r.watchlist),e(!1)}));case 2:case"end":return t.stop()}}),t)}))),[t]),a}(t,r),m=0;function v(){return(v=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({url:"http://www.omdbapi.com/?&apikey=fb8a95d8&t=".concat(t,"&type=movie&plot=full"),method:"get"});case 2:r=e.sent,a(r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"Watchlist"+n,children:[Object(b.jsx)("h2",{children:"Watch List"}),Object(b.jsx)("div",{children:j.map((function(e){return Object(b.jsxs)("div",{className:"WatchlistEntry"+n,children:[Object(b.jsxs)("p",{children:[e.Title," "]}),Object(b.jsxs)("div",{className:"WatchlistButtons"+n,children:[Object(b.jsx)("button",{onClick:function(){!function(e){v.apply(this,arguments)}(e.Title),c("ms"),i(!0),d(!1),p(!1)},children:"More Details"}),Object(b.jsx)("button",{onClick:Object(o.a)(l.a.mark((function r(){var s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=h.auth().currentUser.uid,r.next=3,h.firestore().collection("users").doc(s).get().then(function(){var r=Object(o.a)(l.a.mark((function r(n){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.data().watchlist.filter((function(t){return t.imdbID!==e.imdbID})),r.next=3,h.firestore().collection("users").doc(s).update({watchlist:a});case 3:t(!0);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)}))),children:"Remove from List"})]})]},e.id+"wl"+m++)}))})]})};var k=function(e){e.currentUser;var t=e.setUpdatingWatchedFlag,r=e.updatingWatchedFlag,n=e.colorTheme,a=e.setSelectedMovie,c=e.setPageOpen,i=e.setmsOpen,d=e.setmlOpen,p=e.setlsOpen,j=function(e,t){var r=Object(s.useState)([]),n=Object(u.a)(r,2),a=n[0],c=n[1];return Object(s.useEffect)(Object(o.a)(l.a.mark((function t(){var r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=h.auth().currentUser.uid,h.firestore().collection("users").doc(r).get().then((function(t){var r=t.data();c(r.watched),e(!1)}));case 2:case"end":return t.stop()}}),t)}))),[t]),a}(t,r),m=0;function v(){return(v=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({url:"http://www.omdbapi.com/?&apikey=fb8a95d8&t=".concat(t,"&type=movie&plot=full"),method:"get"});case 2:r=e.sent,a(r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"Watched"+n,children:[Object(b.jsx)("h2",{children:"Watched"}),Object(b.jsx)("div",{children:j.map((function(e){return Object(b.jsxs)("div",{className:"WatchedEntry"+n,children:[Object(b.jsxs)("p",{children:[e.Title," "]}),Object(b.jsxs)("div",{className:"WatchedButtons"+n,children:[Object(b.jsx)("button",{onClick:function(){!function(e){v.apply(this,arguments)}(e.Title),c("ms"),i(!0),d(!1),p(!1)},children:"More Details"}),Object(b.jsx)("button",{onClick:Object(o.a)(l.a.mark((function r(){var s;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s=h.auth().currentUser.uid,r.next=3,h.firestore().collection("users").doc(s).get().then(function(){var r=Object(o.a)(l.a.mark((function r(n){var a;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.data().watched.filter((function(t){return t.imdbID!==e.imdbID})),r.next=3,h.firestore().collection("users").doc(s).update({watched:a});case 3:t(!0);case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)}))),children:"Remove from List"})]})]},e.id+"wd"+m++)}))})]})};r(35),r(36);function N(e){var t=e.selectedMovie,r=e.setSelectedMovie,s=e.setUpdatingWatchlistFlag,n=e.setUpdatingWatchedFlag,a=e.colorTheme,c=(e.currentUser,e.currentReviewURL),i=e.currentReviewSuggestedText,u=e.setCurrentReviewURL,d=e.setCurrentReviewSuggestedText,p=function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.auth().currentUser.uid,e.next=3,h.firestore().collection("users").doc(r).update({watchlist:h.firestore.FieldValue.arrayUnion(t)});case 3:s(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.auth().currentUser.uid,e.next=3,h.firestore().collection("users").doc(r).update({watched:h.firestore.FieldValue.arrayUnion(t)});case 3:n(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(""!==t){var m=function(){var e=Object(o.a)(l.a.mark((function e(){var r,s,n,a,c,i,o,h,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="01",s="01",n="01",a=parseInt(t.Year),c=parseInt(t.Year),"Jan"==(i=t.Released.substring(3,6))?(n="2",s="12",r=t.Released.substring(0,2),a=parseInt(c)-1):"Feb"==i?(n="03",s="01",r=t.Released.substring(0,2)):"Mar"==i?(n="04",s="02",r=t.Released.substring(0,2)):"Apr"==i?(n="05",s="03",r=t.Released.substring(0,2)):"May"==i?(n="06",s="04",r=t.Released.substring(0,2)):"Jun"==i?(n="07",s="05",r=t.Released.substring(0,2)):"Jul"==i?(n="08",s="06",r=t.Released.substring(0,2)):"Aug"==i?(n="09",s="07",r=t.Released.substring(0,2)):"Sep"==i?(n="10",s="08",r=t.Released.substring(0,2)):"Oct"==i?(n="11",s="09",r=t.Released.substring(0,2)):"Nov"==i?(n="12",s="10",r=t.Released.substring(0,2)):"Dec"==i?(n="01",s="11",r=t.Released.substring(0,2),c=parseInt(c)+1):c=c++,o=a+"-"+s+"-"+r,h=c+"-"+n+"-"+r,e.prev=9,e.next=12,S()({url:"https://api.nytimes.com/svc/movies/v2/reviews/search.json?opening-date=".concat(o,":").concat(h,"&api-key=eiol1fy9uW3jyANb4ZtUlai96rau5OGb"),method:"get",params:{query:t.Title}});case 12:p=e.sent,console.log(p),u(p.data.results[0].link.url),d("Suggested NYTimes Review "+JSON.stringify(p.data.results[0].link.suggested_link_text)),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(9),u(""),d("No Suggested Articles Available");case 22:case"end":return e.stop()}}),e,null,[[9,18]])})));return function(){return e.apply(this,arguments)}}(),v=0;return Object(b.jsxs)("div",{className:"CurrentCard"+a,children:[Object(b.jsx)("div",{className:"CardBar"+a,children:Object(b.jsx)("div",{className:"ImmediateInfoOuter"+a,children:Object(b.jsxs)("div",{className:"ImmediateInfo",children:[Object(b.jsx)("img",{className:"Image",src:t.Poster,alt:"Poster for "+t,width:160}),Object(b.jsxs)("div",{className:"Details"+a,children:[Object(b.jsx)("p",{className:"Title",children:t.Title}),Object(b.jsxs)("p",{className:"Year",children:["(",t.Year,")"]}),Object(b.jsx)("p",{children:"Starring:"}),Object(b.jsx)("div",{children:t.Actors.split(",").map((function(e){return Object(b.jsx)("p",{className:"Name",children:e},v++)}))}),Object(b.jsxs)("p",{className:"Name",children:["Directed by ",t.Director]})]})]})})}),Object(b.jsx)("div",{className:"MoreDetailsDiv"+a,children:Object(b.jsxs)("div",{className:"MoreDetails"+a,children:[Object(b.jsxs)("div",{className:"Logistics",children:[Object(b.jsxs)("div",{className:"LogisticsData",children:[Object(b.jsx)("h3",{children:"Runtime"}),Object(b.jsx)("p",{children:t.Runtime})]}),Object(b.jsxs)("div",{className:"LogisticsData",children:[Object(b.jsx)("h3",{children:"Rated"}),Object(b.jsx)("p",{children:t.Rated})]}),Object(b.jsxs)("div",{className:"LogisticsData",children:[Object(b.jsx)("h3",{children:"Genre"}),Object(b.jsx)("p",{children:t.Genre})]})]}),Object(b.jsxs)("div",{className:"Synopsis",children:[Object(b.jsx)("h3",{children:"Synopsis"}),Object(b.jsx)("p",{children:t.Plot})]}),Object(b.jsx)("button",{className:"ReviewButton",onClick:function(e){m()},children:"Check for NYTimes Movie Reviews!"}),Object(b.jsxs)("div",{className:"ReviewLink",children:[Object(b.jsx)("p",{children:"Note: This feature works best for recent and/or culturally significant movies (i.e. The Godfather, Star Wars Ep. VII, Godzilla v. Kong)"}),Object(b.jsx)("a",{href:c,children:i})]}),Object(b.jsx)("button",{className:"BacklogButton",onClick:function(){p(t)},children:"Add to WatchList!"}),Object(b.jsx)("button",{className:"WatchedButton",onClick:function(){j(t)},children:"Already Seen It!"}),Object(b.jsx)("button",{className:"Hide",onClick:function(){r("")},children:"Hide"})]})})]})}return Object(b.jsx)("div",{className:"SearchPromptDiv"+a,children:Object(b.jsx)("div",{className:"Center",children:"Search to get Started!"})})}function C(e){var t,r=e.movieSearcherCurrentResults,s=e.setMovieSearcherCurrentResults,n=(e.selectedMovie,e.setSelectedMovie),a=e.setCurrentReviewURL,c=e.setCurrentReviewSuggestedText;if(""===r)t=Object(b.jsx)("p",{children:"No Results Yet!"});else{var i=function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({url:"https://www.omdbapi.com/?&apikey=fb8a95d8&t=".concat(t.Title,"&type=movie&plot=full"),method:"get"});case 2:r=e.sent,n(r.data),a(""),c(""),s([]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t=Object(b.jsx)("div",{className:"AutoCompleteSuggestions",children:r.map((function(e){return Object(b.jsxs)("button",{className:"AutoCompleteResult",onClick:function(){i(e)},children:[e.Title," - (",e.Year,")"]},e.imdbID)}))})}return t}var y=function(e){var t=e.movieSearcherCurrentResults,r=e.setMovieSearcherCurrentResults,n=e.selectedMovie,a=e.setSelectedMovie,c=e.currentUser,i=e.setUpdatingWatchlistFlag,d=e.setUpdatingWatchedFlag,h=e.colorTheme,p=Object(s.useState)(""),j=Object(u.a)(p,2),m=j[0],v=j[1],O=Object(s.useState)(""),f=Object(u.a)(O,2),x=f[0],g=f[1];return Object(b.jsxs)("div",{className:"MovieSearcher",children:[Object(b.jsx)("div",{className:"SearchSide",children:Object(b.jsxs)("div",{className:"SearchSection",children:[Object(b.jsx)("input",{type:"text",placeholder:"Search Movies By Title!",className:"MovieSearchBar",onChange:function(){var e=Object(o.a)(l.a.mark((function e(t){var s,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.target.value,e.next=3,S()({url:"https://www.omdbapi.com/?&apikey=fb8a95d8&s=".concat(s,"&type=movie"),method:"get"});case 3:if(n=e.sent,e.prev=4,void 0===n.data.Search){e.next=11;break}return a=n.data.Search.filter((function(e){return"movie"===e.Type})),c=[],a.forEach((function(e){c.some((function(t){return t.imdbID==e.imdbID}))||c.push(e)})),e.next=11,r(c);case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(4),e.next=17,r([]);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()}),Object(b.jsx)(C,{movieSearcherCurrentResults:t,setMovieSearcherCurrentResults:r,selectedMovie:n,setSelectedMovie:a,setCurrentReviewURL:v,setCurrentReviewSuggestedText:g})]})}),Object(b.jsx)(N,{selectedMovie:n,setSelectedMovie:a,setUpdatingWatchlistFlag:i,setUpdatingWatchedFlag:d,colorTheme:h,currentUser:c,currentReviewURL:m,currentReviewSuggestedText:x,setCurrentReviewURL:v,setCurrentReviewSuggestedText:g})]})},R=r(24),U=function(){return Object(b.jsx)(R.b,{googleMapsApiKey:"AIzaSyAkB7B1ttQoSCSN3fKnhamljAxxaO49i4I",children:Object(b.jsx)(R.a,{mapContainerStyle:{height:"100%",width:"100%",display:"inline-block",position:"relavtive"},zoom:10,center:{lat:40,lng:2}})})};function M(e){var t=e.local_movie,r=e.setSelectedMovie,s=e.colorTheme,n=e.address,a=e.setAddress;function c(){return(c=Object(o.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({url:"https://www.omdbapi.com/?&apikey=fb8a95d8&t=".concat(t,"&type=movie&plot=full"),method:"get"});case 2:s=e.sent,r(s.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S()({url:"https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAkB7B1ttQoSCSN3fKnhamljAxxaO49i4I",method:"get",params:{address:"Regal Belltower Stadium 20,33912"}});case 2:t=e.sent;try{a(t.data.results[0].formatted_address)}catch(r){a("No Address Available")}alert(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"LocalMovie"+s,children:[Object(b.jsx)("a",{href:t.officialUrl,className:"LocalTitle"+s,children:t.title}),Object(b.jsx)("p",{children:t.shortDescription}),Object(b.jsx)("select",{children:t.showtimes.map((function(e){return Object(b.jsxs)("option",{className:"MovieShowing",href:e.ticketURI,children:[e.theatre.name," at ",e.dateTime]},e.ticketURI+e.theatre.id+e.dateTime)}))}),Object(b.jsx)("button",{onClick:function(){return alert("redirect here")},children:"Purchase Tickets"}),Object(b.jsx)("button",{onClick:function(){return function(){return i.apply(this,arguments)}()},children:"Purchase Tickets"}),Object(b.jsx)("button",{onClick:function(){return function(e){return c.apply(this,arguments)}(t.title)},children:"View More Movie Details"})]})}function T(e){var t=e.localResults,r=e.setSelectedMovie,s=e.colorTheme,n=e.address,a=e.setAddress;return""===t?Object(b.jsx)("p",{children:"No Results Yet!"}):Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)("div",{className:"LocalSearcherMovie"+s,children:Object(b.jsx)(M,{local_movie:e,setSelectedMovie:r,colorTheme:s,address:n,setAddress:a})},e.tmsId)}))})}var W=function(e){var t=e.setSelectedMovie,r=e.colorTheme,n=Object(s.useState)(""),a=Object(u.a)(n,2),c=a[0],i=a[1],d=Object(s.useState)(""),h=Object(u.a)(d,2),p=h[0],j=h[1],m=Object(s.useState)(""),v=Object(u.a)(m,2),O=v[0],f=v[1],x=Object(s.useState)(""),g=Object(u.a)(x,2),w=g[0],k=g[1];function N(){return(N=Object(o.a)(l.a.mark((function e(t){var r,s,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.zip,t.range,"dvv6x2m364c35wsxqx595a3p",r=new Date,s=r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate(),e.next=6,S()({url:"https://data.tmsapi.com/v1.1/movies/showings?startDate=".concat(s,"&zip=").concat(p,"&radius=").concat(O,"&api_key=dvv6x2m364c35wsxqx595a3p")});case 6:return n=e.sent,e.next=9,i(n.data);case 9:console.log(c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"LocalExterior"+r,children:[Object(b.jsxs)("div",{className:"LocalSearcher"+r,children:[Object(b.jsxs)("div",{className:"LocalSearcherConsole"+r,children:[Object(b.jsx)("p",{children:"Local Searcher"}),Object(b.jsx)("input",{type:"text",pattern:"[0-9]{5}",placeholder:"Enter Zip",onInput:function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:5===(r=t.target.value).length&&j(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(b.jsx)("input",{type:"number",min:5,max:100,placeholder:"Enter Range",onInput:function(){var e=Object(o.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.target.value,f(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(b.jsx)("button",{onClick:function(e){!function(e){N.apply(this,arguments)}(p,O)},children:"Search"})]}),Object(b.jsx)(T,{localResults:c,setSelectedMovie:t,colorTheme:r,address:w,setAddress:k})]}),Object(b.jsx)(U,{})]})};var I=function(e){var t=e.pageOpen,r=e.movieSearcherCurrentResults,s=e.setMovieSearcherCurrentResults,n=e.selectedMovie,a=e.setSelectedMovie,c=e.currentUser,i=e.setUpdatingWatchlistFlag,l=e.setUpdatingWatchedFlag,o=e.colorTheme,u=e.updatingWatchlistFlag,d=e.updatingWatchedFlag,h=e.setPageOpen,p=e.setmsOpen,j=e.setmlOpen,m=e.setlsOpen;return"ms"==t?Object(b.jsx)(y,{movieSearcherCurrentResults:r,setMovieSearcherCurrentResults:s,selectedMovie:n,setSelectedMovie:a,currentUser:c,setUpdatingWatchlistFlag:i,setUpdatingWatchedFlag:l,colorTheme:o}):"ml"==t?Object(b.jsxs)("div",{className:"Lists"+o,children:[Object(b.jsx)(w,{currentUser:c,setUpdatingWatchlistFlag:i,updatingWatchlistFlag:u,colorTheme:o,setSelectedMovie:a,setPageOpen:h,setmsOpen:p,setmlOpen:j,setlsOpen:m}),Object(b.jsx)(k,{currentUser:c,setUpdatingWatchedFlag:l,updatingWatchedFlag:d,colorTheme:o,setSelectedMovie:a,setPageOpen:h,setmsOpen:p,setmlOpen:j,setlsOpen:m})]}):Object(b.jsx)("div",{children:Object(b.jsx)(W,{setSelectedMovie:a,colorTheme:o})})},F=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)([]),c=Object(u.a)(a,2),i=c[0],d=c[1],p=Object(s.useState)(""),j=Object(u.a)(p,2),m=j[0],O=j[1],g=Object(s.useState)(!1),S=Object(u.a)(g,2),w=S[0],k=S[1],N=Object(s.useState)(!1),C=Object(u.a)(N,2),y=C[0],R=C[1],U=Object(s.useState)("light"),M=Object(u.a)(U,2),T=M[0],W=M[1],F=Object(s.useState)("ms"),A=Object(u.a)(F,2),D=A[0],L=A[1],P=Object(s.useState)(!0),B=Object(u.a)(P,2),E=B[0],Y=B[1],z=Object(s.useState)(!1),J=Object(u.a)(z,2),K=J[0],G=J[1],H=Object(s.useState)(!1),V=Object(u.a)(H,2),_=V[0],q=V[1];return Object(s.useEffect)((function(){h&&h.auth().onAuthStateChanged((function(e){!function(e){e?(n(e.uid),O(""),L("ms"),Y(!0),G(!1),q(!1)):n(null)}(e)}))}),[]),h.auth().currentUser?Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{className:"AppHeader",children:[Object(b.jsx)("h1",{children:"CineSpire"}),Object(b.jsx)("button",{className:"ThemePicker",onClick:Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("light"!=T){e.next=6;break}return W("dark"),e.next=4,h.firestore().collection("users").doc(h.auth().currentUser.uid).update({theme:"dark"});case 4:e.next=9;break;case 6:return W("light"),e.next=9,h.firestore().collection("users").doc(h.auth().currentUser.uid).update({theme:"light"});case 9:case"end":return e.stop()}}),e)}))),children:T}),Object(b.jsx)(x,{setCurrentUser:n,setColorTheme:W})]}),Object(b.jsxs)("div",{className:"PageSelector",children:[Object(b.jsx)("button",{className:"selected"+E,onClick:function(){L("ms"),Y(!0),G(!1),q(!1)},children:"Search Movies By Title"}),Object(b.jsx)("button",{className:"selected"+K,onClick:function(){L("ml"),Y(!1),G(!0),q(!1)},children:"My Lists"}),Object(b.jsx)("button",{className:"selected"+_,onClick:function(){L("ls"),Y(!1),G(!1),q(!0)},children:"Search for local movies"})]}),Object(b.jsx)(I,{pageOpen:D,movieSearcherCurrentResults:i,setMovieSearcherCurrentResults:d,selectedMovie:m,setSelectedMovie:O,currentUser:r,setUpdatingWatchlistFlag:k,setUpdatingWatchedFlag:R,colorTheme:T,updatingWatchlistFlag:w,updatingWatchedFlag:y,setPageOpen:L,setmsOpen:Y,setmlOpen:G,setlsOpen:q})]}):Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"AppHeader",children:Object(b.jsx)("h1",{children:"CineSpire"})}),Object(b.jsx)("div",{className:"SigninSignupExt",children:Object(b.jsxs)("div",{className:"SignInSignUp",children:[Object(b.jsx)(f,{setCurrentUser:n,setColorTheme:W,setPageOpen:L,setmsOpen:Y,setmlOpen:G,setlsOpen:q}),Object(b.jsx)(v,{setCurrentUser:n,setColorTheme:W,setPageOpen:L,setmsOpen:Y,setmlOpen:G,setlsOpen:q})]})})]})})},A=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,65)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(F,{})}),document.getElementById("root")),A()}},[[64,1,2]]]);
//# sourceMappingURL=main.8e7739c6.chunk.js.map