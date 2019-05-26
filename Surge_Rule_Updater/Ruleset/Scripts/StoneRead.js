// [MITM]
// hostname = app.stoneread.com
// http-response https?://app.stoneread.com/api/apiClient/index?data script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/StoneRead.js

let path = '/api/apiClient/index';
var obj = JSON.parse(body)
if (url.indexOf(path) != -1) {
   obj["data"]["vvip_deadline"] = "3044071653";
   obj["data" ]["vvip"] = "1";
   obj["data" ]["u_credits"] = "666666"

}

JSON.stringify(obj)