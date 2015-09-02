'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('chatti', function () {
  var activityHTML = views['chatti'];

  $('.main-content').html(activityHTML);

});
