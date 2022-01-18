function show_history(cookie_name) {
  var history = $.cookie("mac_history_dianying");
  var history_data = [];
  var history_html = '';
  if ((history != undefined) && (history != '')) {
    history_data = eval(history);
  }
  if (history_data.length > 0) {
    for (var $i = 0; $i < history_data.length; $i++) {
      history_html += '<li class="list-item"><a href="' + history_data[$i].vod_url + '" title="' + history_data[$i].vod_name + '" class="list-item-link"><i class="icon-play"></i><span>' + history_data[$i].vod_part + '</span>' + history_data[$i].vod_name + '</a></li>';
    }
  } else {
    history_html = '<li class="drop-tips">暂无观影历史</li>';
  }
  $("#history").append(history_html);
}

function show_tip(text) {
  $('.shortcuts-box').show();
  $('#shortcuts-info').html(text);
  setTimeout(function () {
    $('.shortcuts-box').fadeOut(1000);
  }, 2000);
}

$(function () {
  show_history();
  $(".lazyload").lazyload({
    effect: "fadeIn",
    skip_invisible: false,
    event: 'sporty', 
    threshold: 500
  });
  $("#txtKeywords").focus(function () {
    $(".ac_wd,.search-btn").addClass("search-focus");
    $(".ac_hot").removeClass("none");
    $("body").addClass("mobile-open");
  });
  $(document).click(function (e) {
    if ($(e.target).closest("#txtKeywords,.search-box").length == 0 || $(e.target).closest(".cancel-btn").length != 0) {
      $(".ac_hot").addClass("none");
      $(".ac_wd,.search-btn").removeClass("search-focus");
      $("body").removeClass("mobile-open");
    }
  });
  $(".tab-item").click(function () {
    if (!$(this).hasClass("selected")) {
      $(this).addClass("selected").siblings().removeClass("selected");
      $(".tab-list").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
      $(".tab-list").eq($(this).index()).find(".lazyload").lazyload();
    }
    $(".module-tab-drop").removeClass("module-tab-drop");
    $(this).parents(".module-tab-items").siblings(".module-tab-name").children(".module-tab-value").text($(this).attr("data-dropdown-value"));
  });
  $(".downtab-item").click(function () {
    if (!$(this).hasClass("selected")) {
      $(this).addClass("selected").siblings().removeClass("selected");
      $(".downtab-list").eq($(this).index()).addClass("selected").siblings().removeClass("selected");
      $(this).parents(".module-tab-items").siblings(".module-tab-name").children(".module-tab-value").text($(this).attr("data-dropdown-value"));
    }
    $(".module-tab-drop").removeClass("module-tab-drop");
  });
  $(".close-btn").click(function () {
    $(".tips-box").addClass("up");
  });
  $(".btn-screen").click(function () {
    $(".popup-tips").removeClass("none").addClass("open");
  });
  $(".btn-report").click(function () {
    $(".popup-report").removeClass("none").addClass("open");
  });
  $(".domain").click(function () {
    $(".popup-notice").removeClass("none").addClass("open");
  });
  $(".close-popup,.close-popup2").click(function () {
    $(".popup").removeClass("open").addClass("none");
  });
  $(".module-tab .module-tab-name").click(function () {
    $(this).parent(".module-tab").addClass("module-tab-drop");
  });
  $(".shortcuts-mobile-overlay,.close-drop").click(function () {
    $(".module-tab-drop").removeClass("module-tab-drop");
  });
  $(".module-sorttab .module-tab-name").click(function () {
    $(this).parents(".module-sorttab").addClass("module-tab-drop");
  });
  $(".sort-button").click(function () {
    $(this).toggleClass("desc asc");
    $($(this).attr("to")).html($($(this).attr("to")).children().get().reverse());
  });
  $(".more-content").click(function () {
    $(".content-text,.blurb-text,.more-content").toggleClass("none");
  });
  $('.shortcuts-box').click(function () {
    $('.shortcuts-box').hide();
    $('#shortcuts-info').html('');
  });

   $(".historyclean").on("click",function(){
	$.cookie("mac_history_dianying",null,{expires:-1,path: '/'});
    });
  if ($('.qrcode-img').length > 0) {
    $('.qrcode-img').qrcode({
      text: location.href, //设置二维码内容，必须  
      render: "canvas", //设置渲染方式 （有两种方式 table和canvas，默认是canvas）   
      width: 90, //设置宽度    
      height: 90, //设置高度    
    });
  }
  if ($('.share-btn').length > 0) {
    var clipboard = new ClipboardJS('.share-btn');
    clipboard.on('success', function (e) {
      show_tip('分享信息复制成功，分享给好朋友一起看～');
    });
    clipboard.on('error', function (e) {
      console.log(e);
    });
  }
  if ($('.copy').length > 0) {
    var down_clipboard = new ClipboardJS('.copy');
    down_clipboard.on('success', function (e) {
      show_tip('下载地址复制成功');
    });
    down_clipboard.on('error', function (e) {
      console.log(e);
    });
  }
  	$('.player-box-switch').click(function() {
		$('.player-block').toggleClass('open');
	}); 
});

console.log("\n %c 请勿盗用，购买联系：v.444411.xyz %c \n","color: #fadfa3; background: #030307; padding:5px 0;","background: #fadfa3; padding:5px 0;")