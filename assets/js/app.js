$(function(){

	var header= document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();
	//menu responsive
//calculamos ancho de  la  pagina 
	var ancho = $(window).width(), //calculamos ancho del  dipositivo
		enlaces = $('#enlaces'),
		btnMenu= $('#btnMenu'),
		icono = $('#btnMenu .icono');
	//creamos una codicion que diga si el usuario 
//esta en un tamaño menos a 700px
	if(ancho < 700){
		enlaces.hide();
		icono.addClass('fa-search');

	}
	btnMenu.on('click', function(e){
		enlaces.slideToggle();
		icono.toggleClass('fa-search');
		icono.toggleClass('fa-times');

	});
	$(window).on ('resize', function(){
		//si el tamaño de la ventana es mas grande de 700 px 
		//

		if ($(this).width() > 700){
			enlaces.show();
			icono.addClass('fa-times');
			icono.addClass('fa-search');
		} else{
			enlaces.hide();
			//reiniciamos los iconos
			icono.addClass('fa-search');
			icono.addClass('fa-times');
		}

	})

});


$(document).ready(main);
//cuando el documento este listo ejecuta la funcion main
 //var contador igual a 1
var contador = 1;
 //funcion main se crea 
function main(){
	
	//manejador de eventos cuando el usuario de click en el menu 
	//seleccionamos el elemento

	$('.menu_bar').click(function(){
		 $('nav').toggle(); 
 
		if(contador == 1){
			$('header nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('header nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};


