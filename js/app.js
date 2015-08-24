(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("aboutme",function(){var e=views.aboutme;$(".main-content").html(e)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],2:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("appts",function(){var r=views.appts;$(".main-content").html(r)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],3:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("contactme",function(){var e=views.contactme;$(".main-content").html(e)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],4:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("forge",function(){var r=views.forge;$(".main-content").html(r)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],5:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("","index",function(){var e=views.home;$(".main-content").html(e)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],6:[function(require,module,exports){
"use strict";var $=require("jquery"),_=require("underscore"),views=require("views"),router=require("../router");router.route("smashingboxes",function(){var e=views.smashingboxes;$(".main-content").html(e)});

},{"../router":8,"jquery":"jquery","underscore":"underscore","views":"views"}],7:[function(require,module,exports){
"use strict";var router=require("./router");({controllers:{aboutme:require("./controllers/aboutme.js"),appts:require("./controllers/appts.js"),contactme:require("./controllers/contactme.js"),forge:require("./controllers/forge.js"),home:require("./controllers/home.js"),smashingboxes:require("./controllers/smashingboxes.js")}}),router.init();

},{"./controllers/aboutme.js":1,"./controllers/appts.js":2,"./controllers/contactme.js":3,"./controllers/forge.js":4,"./controllers/home.js":5,"./controllers/smashingboxes.js":6,"./router":8}],8:[function(require,module,exports){
"use strict";var SortedRouter=require("./sorted-router");module.exports=new SortedRouter;

},{"./sorted-router":9}],9:[function(require,module,exports){
"use strict";var Backbone=require("backbone"),_=require("underscore"),SortedRouter=Backbone.Router.extend({sortedRoutes:{},route:function(){for(var e=arguments.length-1,t=arguments[arguments.length-1],r=0;e>r;++r)this.sortedRoutes[arguments[r]]=t},init:function(){var e=-1e6,t=this;_.chain(_.pairs(this.sortedRoutes)).sortBy(function(t){var r=t[0];return r.indexOf("*")>=0?e:-r.split(":").length}).each(function(e){Backbone.Router.prototype.route.apply(t,e)}),Backbone.history.start()}});module.exports=SortedRouter;

},{"backbone":"backbone","underscore":"underscore"}]},{},[7])


//# sourceMappingURL=app.js.map