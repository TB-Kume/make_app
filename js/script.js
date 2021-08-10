
$(window).on('scroll', function () {
    if (20< $(this).scrollTop()) {
        $('.site_header').addClass('change_color');
    } else {
        $('.site_header').removeClass('change_color');
    }
});

$('#myImage').on('change', function (e) {
    var reader = new FileReader();
    reader.onload = function (e) {
        $("#preview").attr('src', e.target.result).css('width','350px');
    }
    reader.readAsDataURL(e.target.files[0]);
});

$('#sub_btn').click(function(){
  if ( $('#sub_menu').css('visibility') == 'hidden' )
    $('#sub_menu').css('visibility','visible');
  else
    $('#sub_menu').css('visibility','hidden');
});

$('#sub_btn2').click(function(){
  if ( $('#sub_menu2').css('visibility') == 'hidden' )
    $('#sub_menu2').css('visibility','visible');
  else
    $('#sub_menu2').css('visibility','hidden');
});

// 画像複数指定  今はつかわない
// $(function(){
//   $('#myImage').change(function(){
//     if ( !this.files.length ) {
//       return;
//     }
//     $('#preview').text('');

//     var $files = $(this).prop('files');
//     var len = $files.length;
//     for ( var i = 0; i < len; i++ ) {
//       var file = $files[i];
//       var fr = new FileReader();

//       fr.onload = function(e) {
//         var src = e.target.result;
//         var img = '<img src="'+ src +'">';
//         $('#preview').append(img);
//       }

//       fr.readAsDataURL(file);
//     }

//     $('#preview').css('display','block');
//   });
// });

(() => {
  //HTMLのid値を使って以下のDOM要素を取得
  const downbutton = document.getElementById('down');
  const upbutton = document.getElementById('up');
  const text = document.getElementById('textbox');
  const reset = document.getElementById('reset');

  //ボタンが押されたらカウント減
  downbutton.addEventListener('click', (event) => {
  //1以下にはならないようにする
  if(text.value >= 2) {
    text.value--;
  }
  });

  //ボタンが押されたらカウント増
  upbutton.addEventListener('click', (event) => {
    text.value++;
  })

})();


