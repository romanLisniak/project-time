$(document).ready(function(){
    $('.carusel-block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../src/img/chevron-left-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../src/img/chevron-right-solid.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              
            }
          },
        ]
      });
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })

      // modal
      $('[data-modal=consultation]').on('click', function() {
      $('.overlay,#consultation').fadeIn('slov');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, .overlay2, .overlay3, #consultation, #thanks, #order').fadeOut('slov')
      });
      $('.catalog-item__btn').on('click', function(){
      });
      $('.catalog-item__btn').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
          $('.overlay2, #order').fadeIn('slov');
        });
      });
      function valideForms(form){
        $(form).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true,
            }
          },
          messages: {
            name: "Введите своё имя",
            phone: "введите свой номер телефона",
            email: {
              required: "Введите свою почту",
              email: "неправильно введён адрес",
            }
          }
        });
      };
      valideForms('#consultation-form');
      valideForms('#consultation form');
      valideForms('#order form');
});