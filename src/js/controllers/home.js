'use strict';

var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var router = require('../router');
// var pdf = require('../utilities/pdfobject.js');

router.route('', 'index', function () {
  var activityHTML = views['home'];

  $('.main-content').html(activityHTML);
});
