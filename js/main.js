
$(document).ready(function() {
	$('.accordion').accordion({
		collapsible: true,    
		active: false,     
	});
	$('.directory').accordion({
		collapsible: true,    
		active: false,     
	});
	   
   $("#datepicker").datepicker({
		monthNamesShort: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
                changeMonth: true,

	});
  $("#datepicker table").addClass("datepicker__table");
  // $( ".ui-datepicker-title" ).append( $( "h2" ) );
  $( "<div class = 'arrow'></div>" ).appendTo( ".hasDatepicker" );
});

// $(document).ready(function() {
	
// });
// $.datepicker.setDefaults(
//         $.extend($.datepicker.regional["ru"])
//   );

