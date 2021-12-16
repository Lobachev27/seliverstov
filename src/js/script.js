/*Главный слайдер*/

$(document).ready(function() {
    var swiper = new Swiper(".intro .swiper-container", {
        loop: true,
        /*autoplay: {
            delay: 10000
        },*/
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoHeight: true,
        grabCursor: true,
        pagination: {
            el: ".intro .swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><div class="swiper_slide_name">' + '0' + (index + 1) + '</div></div>';
            }
        }
    });
});

/*Уникальность пограмм превращаются в слайдер на мобиле*/

$(document).ready(function() {
    var swiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 1250 && swiper == undefined) {
            swiper = new Swiper('.advantages_list .swiper-container', {
                loop: true,
                autoplay: {
                    delay: 5000
                },
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 0,
                autoHeight: 'true',
                pagination: {
                    el: '.advantages_list .swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    575: {
                        slidesPerView: 1
                    }
                }
            });
        } else if (screenWidth > 1249 && swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
            $('.intro .swiper-wrapper').removeAttr('style');
            $('.intro .swiper-slide').removeAttr('style');
        }
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });
});

/*Слайдер тренировки и обучение*/

$(document).ready(function() {
    var swiper = new Swiper(".workout_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 25,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.workout_slider .swiper-button-next',
            prevEl: '.workout_slider .swiper-button-prev'
        },
        breakpoints: {
            1499: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });
});

/*Слайдер штаб*/

$(document).ready(function() {
    var swiper = new Swiper(".base_slider .swiper-container", {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 25,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.base_slider .swiper-button-next',
            prevEl: '.base_slider .swiper-button-prev'
        },
        breakpoints: {
            650: {
                slidesPerView: 2
            }
        }
    });
});

/*Слайдер СМИ и медиа*/

$(document).ready(function() {
    var swiper = new Swiper(".about-content_slider .swiper-container", {
        loop: true,
        autoplay: {
            delay: 3000
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 0,
        autoHeight: true,
        grabCursor: true,
        navigation: {
            nextEl: '.about-content_slider .swiper-button-next',
            prevEl: '.about-content_slider .swiper-button-prev'
        },
        breakpoints: {
            767: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });
});

/*Слайдер карточка товара*/

$(document).ready(function() {
    var galleryThumbs = new Swiper('.card-product_slider .gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 5,
        direction: 'horizontal',
        autoHeight: true,
        loop: false,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            1919: {
                slidesPerView: 4,
                loopedSlides: 4
            },
            1499: {
                spaceBetween: 20,
                slidesPerView: 4,
                loopedSlides: 4
            },
            1249: {
                spaceBetween: 20,
                slidesPerView: 5,
                loopedSlides: 5
            },
            767: {
                spaceBetween: 20,
                slidesPerView: 4,
                loopedSlides: 4
            },
            480: {
                spaceBetween: 20,
                slidesPerView: 3,
                loopedSlides: 3
            }
        }
    });
    var galleryTop = new Swiper('.card-product_slider .gallery-top', {
        spaceBetween: 0,
        loop: true,
        autoHeight: true,
        grabCursor: true,
        loopedSlides: 5, //looped slides should be the same
        thumbs: {
            swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.card-product_slider .swiper-button-next',
            prevEl: '.card-product_slider .swiper-button-prev'
        },
        breakpoints: {
            1919: {
                loopedSlides: 4
            },
            1249: {
                loopedSlides: 5
            },
            767: {
                loopedSlides: 4
            },
            480: {
                loopedSlides: 3
            }
        }
    });
});

/*Слайдер рекомендуемые товары*/

$(document).ready(function() {
    var swiper = undefined;
    function initSwiper() {
        var screenWidth = $(window).width();
        if(screenWidth < 768 && swiper == undefined) {
            swiper = new Swiper('.card-product_recommendation .swiper-container', {
                loop: true,
                autoplay: {
                    delay: 5000
                },
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 10,
                autoHeight: 'true',
                breakpoints: {
                    767: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            });
        } else if (screenWidth > 767 && swiper != undefined) {
            swiper.destroy();
            swiper = undefined;
            $('.intro .swiper-wrapper').removeAttr('style');
            $('.intro .swiper-slide').removeAttr('style');
        }
    }

    initSwiper();

    $(window).on('resize', function(){
        initSwiper();
    });
});

/*Выпадающее меню*/

$(document).ready(function() {
    $('.header_hamburger').click(function(){
        $('.sidebar').addClass('active');
        $('body').addClass('ov-hid');
    });

    $('.header_close').click(function(){
        $('.sidebar').removeClass('active');
        $('body').removeClass('ov-hid');
    });
});

/*Переключение табов программы тренировок*/

$(document).ready(function() {
    $(function () {
        var tabContainers = $('.programs_wrapper');
        tabContainers.hide().filter(':first').show();
        $('.programs_item').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $('.programs_item').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
});

/*Переключение табов блог*/

$(document).ready(function() {
    $(function () {
        var tabContainers = $('.article-list_wrapper');
        tabContainers.hide().filter(':first').show();
        $('.article-list_item').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $('.article-list_item').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
});

/*Переключение табов программы*/

$(document).ready(function() {
    $(function () {
        var tabContainers = $('.programs-list_wrapper');
        tabContainers.hide().filter(':first').show();
        $('.programs-list_item').click(function () {
            tabContainers.hide();
            tabContainers.filter(this.hash).show();
            $('.programs-list_item').removeClass('active');
            $(this).addClass('active');
            return false;
        }).filter(':first').click();
    });
});

/*Номера страниц*/

$(document).ready(function() {
    $(".page_nav_number").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});

/*Воспроизведение видео*/

$(document).ready(function() {
    $('.about-content_video_btn').click(function(){
        $('.about-content_video_box').get(0).play();
        $(this).remove();
    });
});

/*Маска номера телефона*/

$(function(){
    if($('input').is('.phone')){
        $(".phone").mask("+7 (999) 999-99-99");
    }
});

/*Модальные окна*/

function open_modal(e) {
    $('#'+ e).addClass('show');
    $('body').addClass('ov-hid');
}
function close_modal(e) {
    $('#'+ e).removeClass('show');
    $('body').removeClass('ov-hid');
}

$(document).click(function(event) {
    if(!$(event.target).closest('.modalDialog_container, .sidebar, .registration').length
        && !$(event.target).hasClass('header_hamburger')
        && !$(event.target).hasClass('header_close')
        && !$(event.target).hasClass('catalog_box_img_wrapper')
        && !$(event.target).hasClass('btn')
        && !$(event.target).hasClass('registration')
        && !$(event.target).hasClass('instagram-block_box_link')
        && !$(event.target).hasClass('schedule_box_link')){
        $(".modalDialog").removeClass('show');
        $('body').removeClass('ov-hid');
    }
});

/*При клике на картинку из инстаграма менять данные в модальном окне*/

$(document).ready(function() {
    $('.instagram-block_box_link').click(function(){
        if($(this).prev()[0].className == 'instagram-block_box_info'){
            $('.instagram-modal_img').attr('src', $(this).prev().prev().attr('src'));
            $('.instagram-modal_like').text($(this).prev().children().children('.instagram-block_box_like').text());
            $('.instagram-modal_comment').text($(this).prev().children().children('.instagram-block_box_comment').text());
        }
    });
});

/*Скрывать / показывать текст*/

window.onload = function () {
    var more = document.querySelectorAll('.programs_box_more');
    var open = document.querySelectorAll('.programs_box_additionally');

    for (let i = 0; i < open.length; i++){
        if (open[i]) {
            open[i].style.maxHeight = "0px";
            if (more[i]) {
                more[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    if (open[i].scrollHeight + "px" == open[i].style.maxHeight) {
                        open[i].style.maxHeight = "0px";
                        more[i].innerHTML = "Что включено";
                        more[i].classList.remove('active');
                    } else {
                        open[i].style.maxHeight = open[i].scrollHeight + "px";
                        more[i].innerHTML = "Скрыть текст";
                        more[i].classList.add('active');
                    }
                });
            }
        }
    }
};

/*Select*/

$(document).ready(function() {
    $('.catalog_sorting_main').click(function(){
        if ($(this).hasClass('active')){
            $(this).removeClass('active');}
        else {$(this).addClass('active');}
        if ($(this).next().hasClass('active')){
            $(this).next().removeClass('active');}
        else {$(this).next().addClass('active');}
    });
    $('.catalog_sorting_item').click(function () {
        var text = $(this).text();
        $(this).parent('.catalog_sorting_list').prev().text(text);
        $('.catalog_sorting_list').removeClass('active');
        $('.catalog_sorting_main').removeClass('active');
    });
    $(document).mouseup(function (e) {
        var container = $(".catalog_sorting");
        if (container.has(this.target).length === 0){
            container.children().removeClass('active');
        }
    });
});

/*Вид показа товаров*/

$(document).ready(function() {
    $(".catalog_view_item, .catalog_nav_link").on("click", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });
});

/*Кнопка добавления в корзину*/

$(document).ready(function() {
    $('.catalog_box_btn, .btn-basket').click(function(){
        $(this).addClass('add');
    });
});

/*Добавлять класс при ховере*/

$(document).ready(function() {
    $(".catalog_box_img_wrapper").mouseover(function(){
        $(this).addClass('hover_block')
    }).mouseout(function(){
        $(this).removeClass('hover_block')
    });

    var images = $('.catalog_box_img_item');
    var tile = $('.catalog_box_img_tile');

    for (let i = 0; i < images.length; i++){
        $(tile[i]).mouseover(function(){
            $(tile[i]).addClass('active');
            $(images[i]).addClass('active');
        }).mouseout(function(){
            $(tile[i]).removeClass('active');
            $(images[i]).removeClass('active');
        });
    }
});

/*Заполнить анкету*/

$(document).ready(function() {
    $('.btn-sidebar, .btn-advantages').click(function(){
        $('.registration').addClass('active');
        $('.btn-sidebar, .btn-advantages').addClass('active').html('...');
        $('.registration_description_mobile').html('Шаг 1 из 2');
        $('body').addClass('ov-hid');
    });

    $('.registration_close').click(function(){
        $('.registration').removeClass('active');
        $('.registration_right').removeClass('active');
        $('.btn-sidebar, .btn-advantages').removeClass('active').html('Заполнить анкету');
        $('body').removeClass('ov-hid');
    });

    $('.registration_next').click(function(){
        $('.registration_right').addClass('active');
        $('.registration_description_mobile').html('Шаг 2 из 2');
    });
});

/*Плавный скролл по якорным ссылкам*/

$(document).ready(function(){
    $(".sidebar_request, .advantages").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    15
});

/*Range slider*/

$(document).ready(function() {

    var s = document.createElement('style');
    document.head.appendChild(s);
    s.textContent ="";
    /* un array de objetos */
    var oInput = Array();

    var inputDiv = document.querySelectorAll('.inputDiv');
    var lng = inputDiv.length;

    for( var i = 0; i< lng; i++){

        var elId = inputDiv[i].id;



        oInput[i]= new Object();

        oInput[i].value = inputDiv[i].getAttribute("data-value");
        oInput[i].width = parseInt(window.getComputedStyle(inputDiv[i], null).getPropertyValue("width"));
        oInput[i].Min = inputDiv[i].getAttribute("data-min");
        oInput[i].Max = inputDiv[i].getAttribute("data-max");

        /* EL INPUT */
        var elInput = document.createElement('input');
        elInput.setAttribute("type", "range");
        elInput.setAttribute("value", oInput[i].value);

        elInput.setAttribute("min", oInput[i].Min);
        elInput.setAttribute("max", oInput[i].Max);
        elInput.setAttribute("autocomplete", "off");
        elInput.style.width = oInput[i].width +"px";

        inputDiv[i].appendChild(elInput);

        /* LA ETIQUETA */
        /* el valor de la etiqueta (el tooltip) */
        var etiqueta = document.createElement('div');
        etiqueta.setAttribute("class", "etiqueta");
        etiqueta.innerHTML = oInput[i].value;

        inputDiv[i].appendChild(etiqueta);

        /* calcula la posición inicial de la etiqueta (el tooltip) */

// 500px / 100%
        oInput[i].pxls = oInput[i].width/100;
        oInput[i].k = (oInput[i].Max - oInput[i].Min)/100;

        var porcienCalculado = Math.round((oInput[i].value - oInput[i].Min)/oInput[i].k);
        var valorCalculado = Math.round(porcienCalculado*oInput[i].pxls);


        /* establece la posición de la etiqueta (el tooltip) */
        oInput[i].style = "#"+elId+ " .etiqueta{left:"+ (valorCalculado - 15)+"px}\n";// 15 = la mitad de la anchura de la etiqueta
        /* establece el estilo inicial del TRACK */
        oInput[i].style += "#"+elId+ " input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, #FA9313 "+porcienCalculado+"%,#707070 "+porcienCalculado+"%)}\n";
        oInput[i].style +="#"+elId+ " input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, #FA9313 "+porcienCalculado+"%,#707070 "+porcienCalculado+"%)}\n"

        s.textContent +=oInput[i].style;



//-------------------------------------------------------------

        elInput.addEventListener('input',function(){

            var elId = this.parentNode.id;
            var j = elId.slice(1);

            /* cambia el valor de la etiqueta (el tooltip) */
            var thisValue = this.value;
            document.querySelector('#'+elId+ ' .etiqueta').innerHTML = thisValue;

            var thisPorcien = (thisValue - oInput[j].Min)/oInput[j].k;
            var thisValorCalculado = thisPorcien*oInput[j].pxls;


            /* cambia la posición de la etiqueta (el tooltip) */
            oInput[j].style = "#"+elId+ " .etiqueta{left:"+ (thisValorCalculado - 15)+"px}\n";// 15 = la mitad de la anchura de la etiqueta
            /* cambia el estilo del TRACK */
            oInput[j].style +="#"+elId+ " input[type=range]::-webkit-slider-runnable-track{ background-image:-webkit-linear-gradient(left, #FA9313 "+thisPorcien+"%,#707070 "+thisPorcien+"%)}\n";
            oInput[j].style +="#"+elId+ " input[type=range]::-moz-range-track{ background-image:-moz-linear-gradient(left, #FA9313 "+thisPorcien+"%,#707070 "+thisPorcien+"%)}\n";
            s.textContent = "";

            for( var l = 0; l<lng; l++){
                s.textContent += oInput[l].style
            }

        }, false);
    }
});

/*Google maps*/

$(document).ready(function() {
    var mapElement = document.getElementById('map');
    if (mapElement) {
        google.maps.event.addDomListener(window, 'load', init);
    }
    function init() {
        var mapOptions = {
            zoom: 17,
            disableDefaultUI: true,
            center: new google.maps.LatLng(55.6831754, 37.5490228),
            styles: [
                {
                    "featureType": "landscape",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "lightness": 57
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "lightness": 24
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                }
            ]
        };

        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.6831754, 37.5490228),
            map: map,
            title: 'Дмитрий Селиверстов',
            icon: {
                url: "../../img/map-marker.svg",
                scaledSize: new google.maps.Size(100, 120)
            }
        });

        var InfoWindow = new google.maps.InfoWindow({
            content: "<div class='marker_info'><div class='marker_name'>Дмитрий Селиверстов</div><p>Адрес: г. Москва, ул. Вавилова, д. 66 ТЦ «Триумфальный», 4 этаж</p><p>Телефон:</p><p>Email: info@seliverstov.rocks</p></div>"
        });

        marker.addListener('click', function(){
            InfoWindow.open(map, marker);
        })
    }
});

/*Открытие фоток*/

$(document).ready(function() {
    $(".base_item a").lightbox();
});