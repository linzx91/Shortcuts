// [MITM]
// hostname = *.kuwo.cn
// http-response https?://vip1.kuwo.cn/vip/ script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/KuwoMusic.js

var result = body

let path = '/vip/v2/user/vip';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.data.isNewUser = 2;
    jsbody.data.vipLuxuryExpire = 1738717749000;
    jsbody.data.isYearUser = 2;
    jsbody.data.vipmExpire = 1738717749000;
    jsbody.data.vipOverSeasExpire = 1738717749000;
    jsbody.data.vipExpire = 1738717749000;
    jsbody.data.vip3Expire = 1738717749000;
    result = JSON.stringify(jsbody);
}

result;