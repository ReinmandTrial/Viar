$(document).ready(function () {


   $(document).on('click', '.amount__btn-plus', function () {
      var btn = $(this);
      var Block = btn.closest('.amount');
      var kol = Block.find('.amount__input').val();
      if (kol <= 100) {
         kol++;
      }
      Block.find('.amount__input').val(kol);
      Block.find('.amount__input').trigger('change');
      if (Block.find('.amount__input').val() == 0) {
         Block.find('.amount__input').val('1')
      }
   });
   ///quantity minus
   $(document).on('click', '.amount__btn-minus', function () {
      var btn = $(this);
      var Block = btn.closest('.amount');
      var kol = Block.find('.amount__input').val();
      if (kol > 0) {
         kol--;
      }
      Block.find('.amount__input').val(kol);
      Block.find('.amount__input').trigger('change');
      if (Block.find('.amount__input').val() == 0) {
         Block.find('.amount__input').val('1')
      }
   });

   // express
   $('.manufacturing-radio__input').on('click', function () {
      if ($(this).is(':checked') && $(this).hasClass('manufacturing-radio__input--express')) {
         let thisPrise = $(this).closest('.manufacturing-radio').find('.manufacturing-radio__price').text();

         $(this).closest('.cart-sidebar').find('.cart-checkout__rows').append(`<dl class="cart-checkout__row cart-checkout__row--express">\
            <dt class= "cart-checkout__row-title" > Изготовление:</dt>\
            <dd class="cart-checkout__row-descr">Экспресс ${thisPrise}</dd>\
         </dl>`);
      } else {
         $(this).closest('.cart-sidebar').find('.cart-checkout__row--express').remove();
      }

   })
   // express
   // coupon
   $('.cart-checkout__coupon-btn').on('click', function () {
      let discountaAmount = "10%";
      let newPrice = '235€';


      $(this).closest('.cart-sidebar').find('.cart-checkout__head.main-price').addClass('old-price');
      $(this).closest('.cart-sidebar').find('.cart-checkout__price-rows').append(`<dl
      class="cart-checkout__row cart-checkout__head new-price">
         <dt class="cart-checkout__row-title">С ${discountaAmount} скидкой от купона: </dt>
         <dd class="cart-checkout__row-descr"> ${newPrice}</dd>
      </dl>`);
      $(this).closest('.cart-sidebar').find('.cart-checkout__coupon').hide();
   })
   // coupon
   // courier
   $('input[name="payment-radio"]').on('click', function () {
      if ($(this).closest('.payment-radio__item').hasClass('payment-radio__item--courier')) {
         let amount = $(this).closest('.payment-radio__item').find('.payment-radio__text span').text();

         $('.cart-checkout__rows').append(`<dl
         class="cart-checkout__row cart-checkout__row--courier">
         <dt class="cart-checkout__row-title">Оплата курьеру: </dt>
         <dd class="cart-checkout__row-descr"> ${amount}</dd>
         </dl>`);
      } else {
         $('.cart-checkout__row--courier').remove();
      }
   })
   // courier

   // select
   $('.js-select-head').on('click', function () {
      let block = $(this).closest('.js-select');
      let body = block.find('.js-select-body');

      if (block.hasClass('active')) {
         $('.js-select').removeClass('active');
         $('.js-select-body').slideUp();
      } else {
         $('.js-select').removeClass('active');
         $('.js-select-body').slideUp();
         block.addClass('active');
         body.slideDown();
      }
   })
   $(document).on('click', function (e) {
      if (!e.target.closest('.js-select-head') && !e.target.closest('.js-select-body')) {
         $('.js-select').removeClass('active');
         $('.js-select-body').slideUp();
      }
   })
   $('.js-select-body-item').on('click', function () {
      let thisText = $(this).find('.js-select-text').html();

      $(this).closest('.js-select').find('.js-select-head-text').html(thisText);
      $(this).closest('.js-select').find('.js-select-head-value').val(thisText);
      $(this).closest('.js-select').find('.js-select-head').addClass('fill')

      $(this).closest('.js-select').removeClass('active');
      $(this).closest('.js-select').find('.js-select-body').slideUp();
   })
   // select 

   // steps
   $('.cart-checkout__btn').on('click', function () {

      let block = $(this).closest('.cart');

      let textBtn2 = 'ПЕРЕЙТИ К ДОСТАВКЕ';
      let textBtn3 = 'ПЕРЕЙТИ К ОПЛАТЕ';
      let textBtn4 = 'ПОТВЕРДИТЬ ЗАКАЗ';

      if (block.hasClass('cart--step-one')) {
         block.find('.cart-progress__item--step-one').removeClass('active');
         block.find('.cart-progress__item--step-one').addClass('passed');
         block.find('.cart-progress__item--step-two').addClass('active');
         block.find('.cart-manufacturing').hide();
         block.find('.cart-main--step-one').hide();
         block.find('.cart-main--step-two').show();
         block.removeClass('cart--step-one');
         block.addClass('cart--step-two');
         $(this).text(textBtn2);

         $('.cart-progress').animate({
            scrollLeft: '+=300'
         });
         $('.cart-main__btn-back.--mobile').show();

      } else if (block.hasClass('cart--step-two')) {
         block.find('.cart-progress__item--step-two').removeClass('active');
         block.find('.cart-progress__item--step-two').addClass('passed');
         block.find('.cart-progress__item--step-three').addClass('active');
         block.find('.cart-main--step-two').hide();
         block.find('.cart-main--step-three').show();
         block.removeClass('cart--step-two');
         block.addClass('cart--step-three');


         $(this).text(textBtn3);
      } else if (block.hasClass('cart--step-three')) {
         block.find('.cart-progress__item--step-three').removeClass('active');
         block.find('.cart-progress__item--step-three').addClass('passed');
         block.find('.cart-progress__item--step-four').addClass('active');
         block.find('.cart-main--step-three').hide();
         block.find('.cart-main--step-four').show();
         block.removeClass('cart--step-three');
         block.addClass('cart--step-four');
         block.find('.cart-sidebar__agreement').show();

         let deliveryRadio = block.find('.cart-progress__item--step-three').find('.delivery-radio__item.active');
         let deliveryCourier = 'Курьером 5€'
         let deliveryPickUp = 'В пункте 3€'
         let deliveryWorkshop = 'В мастерской 0€'

         if (deliveryRadio.hasClass('delivery-radio__item--courier')) {
            block.find('.cart-checkout__row--delivery .cart-checkout__row-descr').text(deliveryCourier);
         } else if (deliveryRadio.hasClass('delivery-radio__item--pick-up')) {
            block.find('.cart-checkout__row--delivery .cart-checkout__row-descr').text(deliveryPickUp);
         } else {
            block.find('.cart-checkout__row--delivery .cart-checkout__row-descr').text(deliveryWorkshop);
         }

         $(this).text(textBtn4);
      }
      $('html').animate({
         scrollTop: '0'
      });

   })
   $('.cart-main__btn-back').on('click', function () {

      let block = $(this).closest('.cart');

      let textBtn1 = 'ОФОРМИТЬ ЗАКАЗ';
      let textBtn2 = 'ПЕРЕЙТИ К ДОСТАВКЕ';
      let textBtn3 = 'ПЕРЕЙТИ К ОПЛАТЕ';

      if (block.hasClass('cart--step-two')) {
         block.find('.cart-progress__item--step-two').removeClass('active');
         block.find('.cart-progress__item--step-one').removeClass('passed');
         block.find('.cart-progress__item--step-one').addClass('active');
         block.find('.cart-manufacturing').show();
         block.find('.cart-main--step-two').hide();
         block.find('.cart-main--step-one').show();
         block.removeClass('cart--step-two');
         block.addClass('cart--step-one');
         $('.cart-progress').animate({
            scrollLeft: '-=300'
         });
         block.find('.cart-checkout__btn').text(textBtn1);
         $('.cart-main__btn-back.--mobile').hide();
      } else if (block.hasClass('cart--step-three')) {
         block.find('.cart-progress__item--step-three').removeClass('active');
         block.find('.cart-progress__item--step-two').removeClass('passed');
         block.find('.cart-progress__item--step-two').addClass('active');
         block.find('.cart-main--step-three').hide();
         block.find('.cart-main--step-two').show();
         block.removeClass('cart--step-three');
         block.addClass('cart--step-two');
         block.find('.cart-checkout__btn').text(textBtn2);
      } else if (block.hasClass('cart--step-four')) {
         block.find('.cart-progress__item--step-four').removeClass('active');
         block.find('.cart-progress__item--step-three').removeClass('passed');
         block.find('.cart-progress__item--step-three').addClass('active');
         block.find('.cart-main--step-four').hide();
         block.find('.cart-main--step-three').show();
         block.removeClass('cart--step-four');
         block.addClass('cart--step-three');
         block.find('.cart-sidebar__agreement').hide();

         block.find('.cart-checkout__btn').text(textBtn3);
      }
      $('html').animate({
         scrollTop: '0'
      });
   })

   // steps

   // radio delivery
   $('.delivery-radio__item').on('click', function () {
      $('.delivery-radio__item').not(this).removeClass('active');
      $('.delivery-radio__item').not(this).find('.delivery-radio__body').slideUp();
      $(this).addClass('active');
      $(this).find('.delivery-radio__body').slideDown();
   })
   // radio delivery

})
