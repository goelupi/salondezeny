window.addEventListener('load', function () {
  var $button = document.querySelector('.toggle-menu-button');
  var $menu = document.querySelector('.header-site-menu');

  $button.addEventListener('click', function () {
      // メニューの表示・非表示を切り替える
      $menu.classList.toggle('is-show'); 

      // 三本線をバッテンにする
      $button.classList.toggle('is-active');
  });
});
