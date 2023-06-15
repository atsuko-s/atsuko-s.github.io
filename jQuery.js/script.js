$(document).ready(function() {
    $('h1').on('inview', function() {
        console.log('H1 element is in view!');
    });
});

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