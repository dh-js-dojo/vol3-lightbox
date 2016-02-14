$(function(){

    var baseSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAAxJREFUCNdjYGBgAAAABAABJzQnCgAAAABJRU5ErkJggg==";

    // サムネイルクリック
    $(".thumbnail li a").on("click",function(e){

        // リンク処理キャンセル
        e.preventDefault();

        // イメージソース取得
        var showSrc = $(this).attr("href");

        // レイヤー追加
        $(".overlay").addClass("show");

        // イメージソース変更
        $(".inner_item__box img").attr("src", showSrc);

    });

    // 閉じるボタン
    $(".inner_item__top>a").on("click", function(e){

        e.preventDefault();

        $(".overlay").removeClass("show");
        $(".inner_item__box i").attr("src", baseSrc);

    });

});



