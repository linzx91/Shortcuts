// [MITM]
// hostname = *.uve.weibo.com
// http-response https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/Weibo_Launch.js

const path1 = "/interface/sdk/sdkad.php";
const path2 = "/wbapplua/wbpullad.lua";

var result = body;
if (url.indexOf(path1) != -1) {
    result = result.replace('OK','');
    var obj = JSON.parse(result);
    if (obj.background_delay_display_time) {
        obj.background_delay_display_time = 60*24*365;
    }
    if (obj.show_push_splash_ad) {
        obj.show_push_splash_ad = false;
    }
    if (obj.ads) {
        obj.ads = [];
    }
    result = JSON.stringify(obj) + 'OK';
    console.log(result);
}

if (url.indexOf(path2) != -1) {
    var obj = JSON.parse(result);
    if (obj.cached_ad && obj.cached_ad.ads) {
        obj.cached_ad.ads = [];
    }
    result = JSON.stringify(obj);
    console.log(result);
}

result;