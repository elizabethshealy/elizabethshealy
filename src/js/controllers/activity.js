'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('aboutme', function () {
  var activityHTML = views['aboutme'];

  $('.main-content').html(activityHTML);

});
