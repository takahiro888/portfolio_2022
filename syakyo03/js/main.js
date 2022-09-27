$(function(){
//ハンバーガーメニュー
//ハンバーガーメニューをクリックした時
$('.hamburger').on('click',function(){
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});
// メニューのリンクをクリックした時
$('#navi a').on('click',function(){
  // ハンバーガーメニューの共通処理を呼び出す
  hamburger();
});

// Inview(画面に表示されたタイミングで処理を実行)
// JJJが選ばれる理由(スライド左)
$('.inview-slide-left').on('inview', function(event,isInview,visiblePartX,visiblePartY){
if(isInview){
  // 要素が表示されたらslide-leftクラスを追加
  $(this).stop().addClass('slide-left');
}
});
// JJJが選ばれる理由(スライド右)
$('.inview-balloon').on('inview', function(event,isInview,visiblePartX,visiblePartY){
  if(isInview){
    // 要素が表示されたらslide-rightクラスを追加
    $(this).stop().addClass('slide-right');
  }
});
// 受講生の声(ふきだし)
$('.inview-balloon').on('inview',function(event,isInview,visiblePartX,visiblePartY){
  if(isInview){
    // 要素が表示されたらballoonクラスを追加
    $(this).stop().addClass('balloon');
  }
});
});

// ハンバーガーメニュー共通処理
// ハンバーガーメニューをクリックした時とメニュー内のリンクを
// クリックした時の処理が同じなので処理を共通化する
function hamburger(){
  // toggleClassを使用することで、hamburgerクラスにactiveクラス
  // が存在する場合は削除、存在しない場合は追加する処理を自動で行ってくれる
  $('.hamburger').toggleClass('active');

  if ($('.hamburger').hasClass('active')){
    // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
    $('#navi').addClass('active');
  }else{
    //hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
    $('#navi').removeClass('active');
  }
}