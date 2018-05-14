$(document).ready(function(){

  var hslColor;

// 色を表示する
  // マウスの座標を取得
  document.onmousemove = function(e){

    var x = e.pageX;
    var y = e.pageY;


    // 色選択画面の左上隅の座標を取得する

    var leftOffset =  $('.col-left').offset().left;
    var topOffset =  $('.col-left').offset().top;


    // 色を決める
    var hue = (x - leftOffset) * 360 / $('.col-left').width();
    var saturation = 100
    var lightness = (y - topOffset) * 100 / $('.col-left').height();

    // 範囲外の場合の調整, hue
    if(hue<0){
      hue = 0;
    } else if(hue>360){
      hue = 360;
    }

    // 範囲外の場合の調整, lightness
    if(lightness<0){
      lightness = 0;
    } else if(lightness>100) {
      lightness = 100;
    }

    // 小数点2位以下、四捨五入する
    hue = Math.round(hue*10)/10;
    saturation = Math.round(saturation*10)/10;
    lightness = Math.round(lightness*10)/10;

    hslColor = "hsl(" + hue + "," + saturation + "%, " + lightness + "%)";

    // 背景色を変える
    $('.col-left').css('background-color', hslColor);

    // 色の名前を表示する
    // 【未来】⇒hslからhexに色の名前を変更したい

    $('#colorName').text(hslColor);

  };

// 色を選択する
  var selectedColor = [];
  var ctn = 0;
  //clickイベントにて選択
  $('.col-left').on('click', function(event){
    selectedColor[ctn] = hslColor;
  // selectedColorの枠に選択した色を表示する
    // 3つの色を表示する
    if(ctn == 0){
      $('.col-right').css('background-color',selectedColor[ctn]);
    } else if (ctn == 1) {
      $('.col-right').css({
        "background" : "linear-gradient(90deg, " + selectedColor[0] + " 0%, " + selectedColor[0] + " 50%, " + selectedColor[1] + " 50%, " + selectedColor[1] + " 100%)"
      });
    } else if (ctn == 2) {
      $('.col-right').css({
        "background" : "linear-gradient(90deg, " + selectedColor[0] + " 0%, " + selectedColor[0] + " 33.3%, " + selectedColor[1] + " 33.3%, " + selectedColor[1] + " 66.6%, " + selectedColor[2] + " 66.6%, " + selectedColor[2] + " 100% ) "
      });
    }

// 3回clickした後
  // 色の選択をやめる
    ctn++;
    if(ctn == 3){
      $(this).off(event);
    }

  // viewの枠に選択した3色のグラデーションを表示する
    // viewボタンを出す
    if(ctn == 3){

      // viewボタンを表示
      var btnView = '<button type="button" class="btn btn-success btn-view"> View! </button>'
      $('.view-btn-box').append(btnView);


    }



  // wiewボタンをクリックすると、グラデーションを表示させる

    // グラデーションパターンの選択(円形/直線)
    // var graType =

    // グラデーション角度の選択(0~360の数値を選択)
    var angle = Math.random()*360;

    // グラデーション色の選択
    // var graColor

    // グラデーションを表示
    $('.btn-view').on('click',function(){

      $('.contents').css({
        "background" : "linear-gradient("+ angle +"deg, " + selectedColor[0] + ", " + selectedColor[1] + " )"
      });


    })

  })


});
