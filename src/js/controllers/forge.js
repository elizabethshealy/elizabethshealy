'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');

router.route('forge', function () {
  var activityHTML = views['forge'];

  $('.main-content').html(activityHTML);

});
