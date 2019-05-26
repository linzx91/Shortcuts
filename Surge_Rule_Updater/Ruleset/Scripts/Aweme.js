// [MITM]
// hostname = aweme-eagle.snssdk.com
// http-response https?://aweme-eagle.snssdk.com/aweme/v1/feed script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/Aweme.js,max-size=-1

function replaceAll(str, find, replace){
	return str.replace(new RegExp(find, 'g'), replace);
}

var keyword = ['watermark=1'];

var result = body;

keyword.forEach(function(k) {
	result = replaceAll(result, k, 'watermark=0');
});

result;