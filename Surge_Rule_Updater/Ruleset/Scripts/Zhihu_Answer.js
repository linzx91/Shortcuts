// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/v4/questions script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/Zhihu_Answer.js

var obj = JSON.parse(body);

delete obj['ad_info']

JSON.stringify(obj);