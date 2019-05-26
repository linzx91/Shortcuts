// [MITM]
// hostname = api.bilibili.com, app.bilibili.com
// http-response https?://app.bilibili.com/x/v2/feed script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/BiliBili_Feed.js

var obj = JSON.parse(body);

obj1=obj['data']['items'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']=="three_item_h_v2"){      
       obj1.splice(index,1)  
    }

   });

obj['data']['items']=obj1

JSON.stringify(obj);