/*!
 * Copyright 2016-2018 http://v.shoutu.cn
 */
$(document).ready(function ($) {
  var recente = $.cookie("mac_history_dianying");
  var len = 0;
  var canadd = true;
  if (recente) {
    recente = eval("(" + recente + ")");
    len = recente.length;
    $(recente).each(function () {
      if (vod_name == this.vod_name) {
        canadd = false;
        var json = "[";
        $(recente).each(function (i) {
          var temp_name, temp_url, temp_part;
          if (this.vod_name == vod_name) {
            temp_name = vod_name;
            temp_url = vod_url;
            temp_part = vod_part;
          } else {
            temp_name = this.vod_name;
            temp_url = this.vod_url;
            temp_part = this.vod_part;
          }
          json += "{\"vod_name\":\"" + temp_name + "\",\"vod_url\":\"" + temp_url + "\",\"vod_part\":\"" + temp_part + "\"}";
          if (i != len - 1)
            json += ",";
        })
        json += "]";
        $.cookie("mac_history_dianying", json, {
          path: "/",
          expires: (2)
        });
        return false;
      }
    });
  }
  if (canadd) {
    var json = "[";
    var start = 0;
    var isfirst = "]";
    isfirst = !len ? "]" : ",";
    json += "{\"vod_name\":\"" + vod_name + "\",\"vod_url\":\"" + vod_url + "\",\"vod_part\":\"" + vod_part + "\"}" + isfirst;
    if (len > 9)
      len -= 1;
    for (i = 0; i < len - 1; i++) {
      json += "{\"vod_name\":\"" + recente[i].vod_name + "\",\"vod_url\":\"" + recente[i].vod_url + "\",\"vod_part\":\"" + recente[i].vod_part + "\"},";
    }
    if (len > 0) {
      json += "{\"vod_name\":\"" + recente[len - 1].vod_name + "\",\"vod_url\":\"" + recente[len - 1].vod_url + "\",\"vod_part\":\"" + recente[len - 1].vod_part + "\"}]";
    }
    $.cookie("mac_history_dianying", json, {
      path: "/",
      expires: (2)
    });
  }
})
