$('.encontra_items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.diferenciais_items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.servicos_item').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  


  $('.produto_items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  

  $('.missao_visao_items').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });  
  
  $('.imagem_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumb_slider'
  });
  $('.thumb_slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.imagem_slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });

  $('.imagem_principal_produto').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.thumb_produto'
  });
  $('.thumb_produto').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.imagem_principal_produto',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });  
  
  $('.linha').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.slick-slide:first-child').addClass('linhafina');
  $('.slick-active:last-child').addClass('meuslick');
  $('.slick-slide').click(function() {
       $('.slick-slide').removeClass('linhafina');
         $(this).addClass('linhafina');
  }
  );
  
  
  $('.ano').click(function() {
         $('.ano > .linhaHover').hide('slow');
         $(this).children('.linhaHover').show('slow', function(){
          
         });
        });
    

  $(".custom-select2").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select2-trigger">' + $(this).attr("name") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select2-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select2-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select2").removeClass("opened");
    });
    $(this).parents(".custom-select2").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select2-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select2").removeClass("opened");
    $(this).parents(".custom-select2").find(".custom-select2-trigger").text( '' + $(this).text());
  });
  
  // Quantidade
  $('.quantity-up').on('click', function(){
    var elem = $(this).closest('.quantity').find('.quantity-val');
    var val = Number(elem.val())+1;
    elem.val(val);
  });
  
  $('.quantity-down').on('click', function(){
    var elem = $(this).closest('.quantity').find('.quantity-val');
    var val = Number(elem.val())-1;
    if (val < 1) val = 1;
    elem.val(val);
  });

  $(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if( target.length ) {
      
      event.preventDefault();
      var top = (target.offset().top) - 140;
      $('html, body').stop().animate({
          scrollTop: top
      }, 1000);
  }
});