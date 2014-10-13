// $(document).ready(function() {
//   $("#links a").click(function() {
//     $(this).css("color", "blue");
//     // var fontSize = $(this).css("font-size");
//     // $(this).css("fontSize", (Math.random() * 100) + "px");
//
//   });
//
// });
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
