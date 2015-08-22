'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('smashingboxes', function () {
  var activityHTML = views['smashingboxes'];

  $('.main-content').html(activityHTML);

});
