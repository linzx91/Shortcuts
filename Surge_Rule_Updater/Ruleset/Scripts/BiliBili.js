// [MITM]
// hostname = app.bilibili.com
// http-response https?://app.bilibili.com/x/ script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/BiliBili.js

var result = body
let path1 = "/x/v2/account/mine";
let path2 = "/x/playurl"
if (url.indexOf(path1) != -1){
  var obj = JSON.parse(body);
  obj.data.bcoin = 2019;
  obj.data.coin = 520;
  obj.data.audio_type = 2;
  obj.data.vip_type = 2;
  obj.data.level = 8;
  obj.data.vip.due_date = 3041424000000;
  obj.data.vip.status = 1;
  obj.data.vip.type = 2;
  obj.data.vip_section.title = "🍀Meeta(1080p60),vip仅自慰";
 result = JSON.stringify(obj);
  
}
if (url.indexOf(path2) != -1){
  var obj = JSON.parse(body);
  var qua = obj.data.accept_quality[0];
  obj.data.quality = qua;
  result = JSON.stringify(obj);
  
}

result;