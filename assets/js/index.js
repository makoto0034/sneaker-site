// ハンバーガーメニュー開けた時
$('.hamburger-menu').on('click',function(){
    $('#header').toggleClass('open');
})

// ハンバーガーメニュー閉じた時
$('#bg-nav').on('click',function(){
    $('#header').toggleClass('open');
})

// ハンバーガーメニューのリンクをクリックした時
$('.site-nav a').on('click',function(){
    $('#header').removeClass('open');
})

// スライダー
$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
  });

// スムーススクロール
$('a[href^="#"]').on('click',function(){
    // 要素の高さを取得
    let position = $($(this).attr('href')).offset().top -50;
    // スクロールする
    $('html,body').animate({scrollTop:position},600,'swing');
    return false;
})


$(window).scroll(function(){
    $('.fade-in').each(function(){
        // スクロール量を取得
        let scroll = $(window).scrollTop(); 
        // 要素の位置を取得
        let targetElement = $(this).offset().top;

        // 要素が画面内に入り200px以上スクロールされたら
        if(scroll > targetElement - $(window).height() + 200){
            $(this).css('opacity','1');
            $(this).css('transform','translateY(0)');
        }
    })
})
