// [MITM]
// hostname = api.zhihu.com
// http-response https?://api.zhihu.com/topstory/recommend script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/Zhihu_Recommend.js

var obj = JSON.parse(body);

obj1=obj['data'];

obj1.forEach(function (element, index, array) {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       obj1.splice(index,1)  
    }

   });

obj['data']=obj1

JSON.stringify(obj);