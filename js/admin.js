(function($) {
	$(function() {
		
		// Check to make sure the input box exists
		if( 0 < $('#datepicker').length ) {
			$('#datepicker').datepicker();
		} // end if
		
	});
}(jQuery));