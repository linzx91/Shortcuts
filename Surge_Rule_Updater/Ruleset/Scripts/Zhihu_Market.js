// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/market/header script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/Zhihu_Market.js

var obj = JSON.parse(body); 

obj['sub_webs'].splice(0,1)
obj['sub_webs'].splice(1,1)

JSON.stringify(obj);