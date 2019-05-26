// [MITM]
// hostname = i.weiread.qq.com
// http-response https?://i.weread.qq.com/pay/memberCardSummary?pf script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/WeRead.js

var result = body
let path = "/pay/memberCardSummary";
if (url.indexOf(path) != -1){
  var obj = JSON.parse(body);
  obj["expiredTime"] = 1747624048;
  obj["remainTime"] = 189302400;
  result = JSON.stringify(obj);
}

result;