// [MITM]
// hostname = mp.weixin.qq.com
// http-response https?://mp.weixin.qq.com script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/WeChat.js

var result = body

let path = '/mp/getappmsgad?f=';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.advertisement_info = [];
    result = JSON.stringify(jsbody);
}

result;