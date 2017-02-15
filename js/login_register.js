$(document).ready(function(){

  /* Visibility */
  $('.actionderoule').on( 'click',function(){
		minimizeOtherForms($(this));
		var cible = $(this).attr('cible');
		maximizeActualForm($(this), cible);
  });
  $('.actionenroule').on( 'click', function(){
		var cible = $(this).attr('cible');
		var expandedZone = $('.deroule_'+cible);
		var minimizedZone = $('.deroule_'+cible).siblings()[0];
		minimizeForm(expandedZone, minimizedZone);
  });
  
  /* Navigation */
  $('.btn-login').on('click', function login() {
	  /*var myApp = angular.module('myApp');
	  $(myApp).controller('myCtrl', function($scope) {
		  /*var loginEmail = $scope.loginEmail;
		  $(scope).loginEmail = "John Doe";
		  $(scope).loginEmail = "John Doe";
	  });*/
      window.open('file:///D:/Ilai Hawkeye/Programs/programación/raspberry pi/index.html', '_blank');
  });
  
  function maximizeActualForm(obj, cible) {
	  $('.deroule_'+cible).show("slow");
	  $(obj).hide("fast");
  }
	
  function minimizeOtherForms(obj) {
		var otherForm = $(obj).parent().siblings()[0];
		var expandedZone = $(otherForm).children(".login_form")[0];
		var minimizedZone = $(otherForm).children(".actionderoule")[0];
		if ($(expandedZone).css("display") == "block"){
			minimizeForm(expandedZone, minimizedZone);
		}
  }
  
  function minimizeForm(expandedZone, minimizedZone){
		$(expandedZone).hide("fast");
		$(minimizedZone).show("slow");
  }
});