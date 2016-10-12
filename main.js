$(document).ready(function() {

  $("#menu-icon").click(function() {
    toggleMenu();
  });

});

var toggleMenu = function() {
  if ($("nav .container").css("right") == '0px') {
    $("nav .container").animate({'right': '-200px'});
  }
  else if ($("nav .container").css("right") == '-200px') {
    $("nav .container").animate({'right': '0px'});
  }
  else {
    console.log("Error toggling menu!");
  }
};
