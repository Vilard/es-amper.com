$(document).ready(function() {
	// body...
	$('.calc select').change(function(){
		var $wires = $('select.room').val();
		var $price = 230;
		var $summ = $wires * $price;
		console.log($summ);
		$('span#final_price').text($summ);
	});
	
});
