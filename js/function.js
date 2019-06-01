var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1210:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        720: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    } 
});

$(document).ready(
    function(){
        let contador = 0;
        $("#contraste").click(
             
            function(){

                if (contador == 0){
                    $(".contrastejs").addClass("formata");
                    contador++;
                } 
                else{
                    $(".contrastejs").removeClass("formata");
                    return contador = 0;
                }
            }
            

        )
    }
)