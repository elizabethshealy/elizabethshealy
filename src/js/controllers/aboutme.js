'use strict';

var router = require('../router');
var $ = require('jquery');
var _ = require('underscore');
var views = require('views');
var pdf = require('../utilities/pdfobject.js');

router.route('aboutme', function () {

  var activityHTML = views['aboutme'];
  $('.main-content').html(activityHTML);

});






// $(document).ready(function() {
//     $(".thumbnail-left").click(function () {
//         $(this).toggleClass('project-thumbnail-image-left');
//     });
//
//     $(".thumbnail-right").click(function () {
//         $(this).toggleClass('project-thumbnail-image-right');
//     });
// });
