$(function(){
    /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
    // ハンバーガーメニューをクリックした時
    $('.hamburger').on('click', function() {
       hamburger();
    });
    // メニューのリンクをクリックした時
    $('#navi a').on('click', function() {
      hamburger();
    });
})

function hamburger() {
  $('.hamburger').toggleClass('active');
    if ($('.hamburger').hasClass('active')) {
      $('#navi').addClass('active');
    } else {
    $('#navi').removeClass('active');
    }
}

/*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/

$('.inview-slide-left').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    // 要素が表示されたらslide-leftクラスを追加
    $(this).stop().addClass('slide-left');
  }
});

$('.inview-slide-right').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
  if(isInView){
    // 要素が表示されたらslide-rightクラスを追加
    $(this).stop().addClass('slide-right');
  }
});