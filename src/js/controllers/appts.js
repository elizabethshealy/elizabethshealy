'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('appts', function () {
  var activityHTML = views['appts'];

  $('.main-content').html(activityHTML);

});
