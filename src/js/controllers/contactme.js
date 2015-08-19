'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('contactme', function () {
  var activityHTML = views['contactme'];

  $('.main-content').html(activityHTML);

});
