$(document).ready(function () {

    // настройка якоря
    window.onscroll = ()=>{
        let img  = $(".div-img");
        console.log(img);
        let header  = document.querySelector(".header").getBoundingClientRect().bottom;
        const imgcor = img[2].getBoundingClientRect().top;
        const coorwindow = document.documentElement.clientHeight;
        if(imgcor < 0 || imgcor < coorwindow){
            $(".jacor-help").css("opacity","1");
        }else{
            $(".jacor-help").css("opacity","0");
        }
        // ljgbcfnm
        if(header < -250){
            $(".heddiv2").css("top",`0`)
        }else{
            $(".heddiv2").css("top",`-180px`)
        }
        console.log(header,coorwindow,imgcor)
    }

	// Это для подвижного слайдера

	$(".input").focus(function () {
		$(this).parent().addClass('focus');
    }).blur(function(){
    	if($(this).val() === ""){
    	$(this).parent().removeClass('focus');
    	}
    });

    // Это для форм рег. и логина

     $(".input-wind").focus(function () {
		$(this).parent().addClass('focus-wind');
    }).blur(function(){
    	if($(this).val() === ""){
    	$(this).parent().removeClass('focus-wind');
    	}
    });

    // Настройка переключения форм в мод окне

   $('.main-modal-window').on('click', '.first-w-label', function(){
   $('.main-modal-window').find('.active').removeClass('active');
   $(this).addClass('active');
   $('.form-window').eq($(this).index()).addClass('active');
 });

    // Это добавляет всем ссылкам target="_blank"

    $('body a').attr('target', '_blank');

    // Сыллки в которых не должно присутсвывать target="_blank"

    // $('.jacor-link').removeAttr('target', '_blank');
    // $('.button-link').removeAttr('target', '_blank');
    // $('.link-button').removeAttr('target', '_blank');
    // $('.linkOfmodWind').removeAttr('target', '_blank');
    // $('.linkOfmodWind').removeAttr('target', '_blank');
$('.act').removeAttr('target', '_blank');

    // Настройка видвежного списка // Потом укаратить код

    $('.sp1').on('mouseover', function(){
    	$('.li1').attr('style', 'top: 39px;');
    	$('.li2').attr('style', 'top: 79px;');
    	$('.li3').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.li1').attr('style', 'top: 0;');
    	$('.li2').attr('style', 'top: 0;');
    	$('.li3').attr('style', 'top: 0;');
    });

    $('.drop-li1').on('mouseover', function(){
    	$('.sp1').attr('style', 'background-color: #2FCFCAFF;transition: all .3s;border-radius: 5px;');
    	$('.li1').attr('style', 'top: 39px;');
    	$('.li2').attr('style', 'top: 79px;');
    	$('.li3').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.sp1').removeAttr('style', 'background-color: #2FCFCAFF;transition: all .3s;border-radius: 5px;');
    	$('.li1').attr('style', 'top: 0;');
    	$('.li2').attr('style', 'top: 0;');
    	$('.li3').attr('style', 'top: 0;');
    });

    $('.sp2').on('mouseover', function(){
    	$('.li4').attr('style', 'top: 39px;');
    	$('.li5').attr('style', 'top: 79px;');
    	$('.li6').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.li4').attr('style', 'top: 0;');
    	$('.li5').attr('style', 'top: 0;');
    	$('.li6').attr('style', 'top: 0;');
    });

    $('.drop-li2').on('mouseover', function(){
    	$('.sp2').attr('style', 'background-color: #2FCFCAFF;transition: all .3s;border-radius: 5px;');
    	$('.li4').attr('style', 'top: 39px;');
    	$('.li5').attr('style', 'top: 79px;');
    	$('.li6').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.sp2').removeAttr('style', 'background-color: #2FCFCAFF;transition: all .3s;border-radius: 5px;');
    	$('.li4').attr('style', 'top: 0;');
    	$('.li5').attr('style', 'top: 0;');
    	$('.li6').attr('style', 'top: 0;');
    });

    $('.sp3').on('mouseover', function(){
    	$('.li7').attr('style', 'top: 39px;');
    	$('.li8').attr('style', 'top: 79px;');
    	$('.li9').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.li7').attr('style', 'top: 0;');
    	$('.li8').attr('style', 'top: 0;');
    	$('.li9').attr('style', 'top: 0;');
    });

    $('.drop-li3').on('mouseover', function(){
    	$('.sp3').attr('style', 'background-color: #2FCFCAFF;transition: .3s;border-radius: 5px;');
    	$('.li7').attr('style', 'top: 39px;');
    	$('.li8').attr('style', 'top: 79px;');
    	$('.li9').attr('style', 'top: 118px;');
    }).on('mouseleave', function(){
    	$('.sp3').removeAttr('style', 'background-color: #2FCFCAFF;transition: .3s;border-radius: 5px;');
    	$('.li7').attr('style', 'top: 0;');
    	$('.li8').attr('style', 'top: 0;');
    	$('.li9').attr('style', 'top: 0;');
    });

 //  Открытие и закрытие модального окна

 $('.butt1').on('click', function(){
   $('.h-w').removeClass('sc-mod');
   $('.w-lab2').removeClass('active');
   $('.w-lab1').addClass('active');
   $('.f-w2').removeClass('active');
   $('.f-w').addClass('active');
 });

 $('.cross').click(function(){
   $('.h-w').addClass('sc-mod');
 })

 $('.butt2').on('click', function(){
    $('.h-w').removeClass('sc-mod');
    $('.w-lab1').removeClass('active');
    $('.w-lab2').addClass('active');
    $('.f-w').removeClass('active');
    $('.f-w2').addClass('active');
 });

 // Открытие м окна для телефона

$('.dws').click(function(){
$('.phone-mw-h').attr('style', 'top: 0;');
});

// Закрытие м окна для телефона

$('.buttonForclose').on('click', function(){
$('.phone-mw-h').removeAttr('style', 'top: 0;');
});

// Настройка кастомизирываного алерта

$('.w-butt2').on('click', function (){
if($('.main-pass').val() != $('.check-pass').val()){
	var time = setTimeout(function() {
	$('.alert').removeAttr('style', 'right: -200px;');
}, 3000);
   $('.alert').attr('style', 'right: 0;');
}
});

var pass = 123;
var email = 'sasamazurok@gmail.com';

$('.w-butt1').on('click', function (){
  //
if($('.email').val() && $('.email').val() != "" || $('.inp2-f1').val() != pass && $('.inp2-f1').val() != ""){
  var time = setTimeout(function() {
  $('.alert2').removeAttr('style', 'right: -200px;');
}, 3000);
   $('.alert2').attr('style', 'right: 0;');
}
});

});
