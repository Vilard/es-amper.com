$(document).ready(function() {
	// body...
	$('.calc select').change(function(){
		var $price = 230; 
		//комнаты
		var $kitchen = 1;																	//кухня переменные
		var $hallway = 1;																	//Прихожая переменные
		var $room = $('select.room').val();													//комнаты переменные
		var $bathroom = $('select.bathroom').val();											//санузел переменные
		var $lumber_room = $('select.lumber_room').val();									//кладовка переменные
		var $balcony = $('select.balcony').val();											//Балконы
		$room = parseInt($room);
		$bathroom = parseInt($bathroom);
		$lumber_room = parseInt($lumber_room);
		$balcony = parseInt($balcony);
		$premiss = $balcony + $room + $bathroom + $kitchen + $hallway + $lumber_room;		//расчет кол-ва помещений
		if ($bathroom == 0 || $room == 0){													//проверка на выбор необходимых параметров для расчета
			$premiss = 0;																	
		};
		var $socket = $('select.socket').val(); 											//розетки
		var $switch = $premiss;																//колличество выключателей
		var $point = 0; 																	//колличество точек
		var $ceiling_height = $('select.ceiling_height').val(); 							//извлечение и присваивание перемменной высоты потолка
		var $electrical_box = $premiss * 2;													//Объем щита
		var	$cutout = $electrical_box + 2;													//колличество автоматов
		var $electrical_board = 0 ;															//Величина щита
		var $wires = $room * 100;															//провода
		var $electrical_chases_length = 0;
		$electrical_box = parseInt($electrical_box);
		$cutout = parseInt($cutout);
		$electrical_board = parseInt($electrical_board);
		$electrical_chases_length = parseInt($electrical_chases_length);
		$ceiling_height = parseInt($ceiling_height);
		$wires = parseInt($wires);
		$socket = parseInt($socket);
		if ($premiss != 0) {
			$point = $switch + $socket;
		};
		if ($ceiling_height > 90 && $point > 0){
		 	$electrical_chases_length = ($ceiling_height - 90) * $point; 					//расчет длинны штроб
		};
		var $electrical_box_price = $electrical_box * 350;
		var $electrical_board_price = 0;
		if ( $cutout <= 12){
			$electrical_board_price = 1500;
			$electrical_board = 12;}
			/*else if ( 12 < $cutout <= 18){
			$electrical_board_price = 2250;
			$electrical_board = 18;}*/
				else if ( 12 < $cutout <= 24){
				$electrical_board_price = 3000;
				$electrical_board = 24;}
					/*else if ( 24 < $cutout <= 36 ){
					$electrical_board_price = 4500;
					$electrical_board = 36;
		};*/
		var	$commutation_electrical_board_price = $cutout * 110;													//колличество автоматов
		var $electrical_chases_price = $electrical_chases_length / 100 * 110 + 800;
		if ($electrical_chases_length == 0){
			$electrical_chases_price = 0;
		};
		var $wires_price = $wires * 40;
			$point_price = ($point) * 350; 												//розетки
		var $summ_advanced = 0
		if ($summ_advanced == NaN || $electrical_box_price == 0 || $wires_price == 0 || $point_price == 0){
			$summ_advanced = 0;
		} else $summ_advanced = $electrical_box_price + $electrical_board_price + $commutation_electrical_board_price + $electrical_chases_price + $wires_price + $point_price; 
		
		$('#advanced_result').click(function(){
			$('span#final_price_advanced').text($summ_advanced);
			$('td#final_price_advanced').text($summ_advanced + ' p.');
		});

		$('td.electrical_box').text($electrical_box);
		$('td.electrical_box_price').text($electrical_box_price + ' p.');
		
		$('td.electrical_board').text($electrical_board);
		$('td.electrical_board_price').text($electrical_board_price + ' p.');
		
		$('td.cutout').text($cutout);
		$('td.commutation_electrical_board_price').text($commutation_electrical_board_price + ' p.');
		
		$('td.electrical_chases_length').text($electrical_chases_length / 100);
		$('td.electrical_chases_price').text($electrical_chases_price + ' p.');
		
		$('td.wires').text($wires);
		$('td.wires_price').text($wires_price + ' p.');
		
		$('td.point').text($point);
		$('td.point_price').text($point_price + ' p.');
		
		if ($room  == 0) {
			$('select.room').css("border-color", "red");
			} else $('select.room').css("border-color", "green");
		if ($bathroom  == 0) {
			$('select.bathroom').css("border-color", "red");
			} else $('select.bathroom').css("border-color", "green");
		if ($ceiling_height  == 0) {
			$('select.ceiling_height').css("border-color", "red");
			} else $('select.ceiling_height').css("border-color", "green");
		if ($socket  == 0) {
			$('select.socket').css("border-color", "red");
			} else $('select.socket').css("border-color", "green");
		/*console.log("точки " + $point);
		console.log("длинна штроб " + $electrical_chases_length);
		console.log("высота потолка " + $ceiling_height);*/
		/*var $softcalc = $('select.softcalc').val();
		var $summ = $softcalc * $price;
		$('.hide').hide();*/
		//console.log($electrical_box_price);
		console.log($electrical_board);

		$('#result').click(function(){
			$('span#final_price').text($summ);
		});
	});
	
});
