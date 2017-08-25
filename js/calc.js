$(document).ready(function() {
	// body...
	$('.calc select').change(function(){
		$wires = $('select.room').val();
		$price = 230;
		$summ = $wires * $price;
		console.log($summ);
	});
	
});
