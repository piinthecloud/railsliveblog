// $(document).ready(function() {
//   $("#links a").click(function() {
//     $(this).css("color", "blue");
//     // var fontSize = $(this).css("font-size");
//     // $(this).css("fontSize", (Math.random() * 100) + "px");
//
//   });
//
// });



// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require wysihtml5-0.3.0_rc2.min
//= require bootstrap.min
//= require bootstrap3-wysihtml5
//= require bootstrap3-wysihtml5.all.min
//= require_tree .



$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});
