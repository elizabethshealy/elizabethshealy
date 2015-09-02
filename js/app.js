(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var router=require("../router"),$=require("jquery"),_=require("underscore"),views=require("views"),pdf=require("../utilities/pdfobject.js");router.route("aboutme",function(){var e=views.aboutme;$(".main-content").html(e)});

},{"../router":9,"../utilities/pdfobject.js":11,"jquery":"jquery","underscore":"underscore","views":"views"}],2:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("appts",function(){var r=views.appts;$(".main-content").html(r)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],3:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("chatti",function(){var r=views.chatti;$(".main-content").html(r)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],4:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("contactme",function(){var e=views.contactme;$(".main-content").html(e)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],5:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("forge",function(){var r=views.forge;$(".main-content").html(r)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],6:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("","index",function(){var e=views.home;$(".main-content").html(e)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],7:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("smashingboxes",function(){var e=views.smashingboxes;$(".main-content").html(e)});

},{"../router":9,"jquery":"jquery","underscore":"underscore","views":"views"}],8:[function(require,module,exports){
"use strict";var router=require("./router");({controllers:{aboutme:require("./controllers/aboutme.js"),appts:require("./controllers/appts.js"),chatti:require("./controllers/chatti.js"),contactme:require("./controllers/contactme.js"),forge:require("./controllers/forge.js"),home:require("./controllers/home.js"),smashingboxes:require("./controllers/smashingboxes.js")}}),router.init();

},{"./controllers/aboutme.js":1,"./controllers/appts.js":2,"./controllers/chatti.js":3,"./controllers/contactme.js":4,"./controllers/forge.js":5,"./controllers/home.js":6,"./controllers/smashingboxes.js":7,"./router":9}],9:[function(require,module,exports){
"use strict";var SortedRouter=require("./sorted-router");module.exports=new SortedRouter;

},{"./sorted-router":10}],10:[function(require,module,exports){
"use strict";var Backbone=require("backbone"),_=require("underscore"),SortedRouter=Backbone.Router.extend({sortedRoutes:{},route:function(){for(var e=arguments.length-1,t=arguments[arguments.length-1],r=0;e>r;++r)this.sortedRoutes[arguments[r]]=t},init:function(){var e=-1e6,t=this;_.chain(_.pairs(this.sortedRoutes)).sortBy(function(t){var r=t[0];return r.indexOf("*")>=0?e:-r.split(":").length}).each(function(e){Backbone.Router.prototype.route.apply(t,e)}),Backbone.history.start()}});module.exports=SortedRouter;

},{"backbone":"backbone","underscore":"underscore"}],11:[function(require,module,exports){
var PDFObject=function(e){if(!e||!e.url)return!1;var n,t,r="1.2",i=e.id||!1,a=e.width||"100%",o=e.height||"100%",c=e.pdfOpenParams,u=function(){var e=null;return window.ActiveXObject&&(e=new ActiveXObject("AcroPDF.PDF"),e||(e=new ActiveXObject("PDF.PdfCtrl")),null!==e)?!0:!1},d=function(){var e,n=navigator.plugins,t=n.length,r=/Adobe Reader|Adobe PDF|Acrobat/gi;for(e=0;t>e;e++)if(r.test(n[e].name))return!0;return!1},l=function(){var e=navigator.mimeTypes["application/pdf"];return e&&e.enabledPlugin},f=function(){var e=null;return d()||u()?e="Adobe":l()&&(e="generic"),e},s=function(){var e=document.getElementsByTagName("html");if(!e)return!1;var n=e[0].style,t=document.body.style;n.height="100%",n.overflow="hidden",t.margin="0",t.padding="0",t.height="100%",t.overflow="hidden"},h=function(e){var n,t="";if(!e)return t;for(n in e)e.hasOwnProperty(n)&&(t+=n+"=",t+="search"===n?encodeURI(e[n]):e[n],t+="&");return t.slice(0,t.length-1)},b=function(e){var u=null;switch(e){case"url":u=n;break;case"id":u=i;break;case"width":u=a;break;case"height":u=o;break;case"pdfOpenParams":u=c;break;case"pluginTypeFound":u=t;break;case"pdfobjectversion":u=r}return u},g=function(e){if(!t)return!1;var r=null;if(e){if(r=e.nodeType&&1===e.nodeType?e:document.getElementById(e),!r)return!1}else r=document.body,s(),a="100%",o="100%";return r.innerHTML='<object	data="'+n+'" type="application/pdf" width="'+a+'" height="'+o+'"></object>',r.getElementsByTagName("object")[0]};return n=encodeURI(e.url)+"#"+h(c),t=f(),this.get=function(e){return b(e)},this.embed=function(e){return g(e)},this};

},{}]},{},[8])


//# sourceMappingURL=app.js.map