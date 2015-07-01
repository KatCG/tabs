//var variable = "string"; // 10,['a', 'b'];
//function nombreFuncion(){
//	//contenido funcion
//}

//if(/*condicion*/){
//	//accion
//	}

//sector javascript
//document.getElementById('nombre-id');
//document.getElementsByClassName('nombre-clase');
//document.getElementsByTagName('nombre-tag');

//selector jquery simple
//$('#nombre-id');
//$('.nombre-clase');
//$('nombre-tag');

// selector compuesto
//$('#nombre-id, .nombre-clase');
//$('div p strong');

// en jquery los onclick no existen, todo se maneja a nivel de js

//hace que el js se cargue cuando la pagina este lista (cargada)

$(document).ready(function(){

//$('.test-jquery').click(function(){
	//trabajar aqui!
//	alert('Esta es nuestra primera funcion con jquery');
//	$('.test-jquery').css('color', 'red');
//	$(this).css('color', 'red'); //se selecciona solo ese elemento
	//editar el css a través de js
	//var elemento = document.getElementsByClassName('test-jquery');
	//elemento.style.color = "red";
	//});
	$('ul li').click(function(){
		var target =$(this).attr('data-target');
		//$('section').css('display', 'none');
		//$('section').hide();
		//$(target).show();
		//$(target).css('display', 'block');
		//$('section').fadeOut('fast');
		//$(target).fadeIn('slow');
		$('section').slideUp();
		$(target).slideDown();

		$('ul li').removeClass('active');
		$(this).addClass('active');
	});

});

//al presionar li se ejecuta una funcion

//click = evento