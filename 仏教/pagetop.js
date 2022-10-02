const PageTopBtn = document.getElementById('js-scroll-top');
//任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得する
PageTopBtn.addEventListener('click', () =>{  //イベントリスナー（イベントに合わせて実行させる関数）を登録する
  window.scrollTo({ //ページを指定した位置までスクロールする
    top: 0,
    behavior: 'smooth'
  });
});