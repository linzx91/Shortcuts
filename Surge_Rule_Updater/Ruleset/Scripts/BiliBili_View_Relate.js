// [MITM]
// hostname = api.bilibili.com, app.bilibili.com
// http-response https?://app.bilibili.com/x/v2/view.access_key script-path=https://raw.githubusercontent.com/linzx91/Shortcuts/master/Surge_Rule_Updater/Ruleset/Scripts/BiliBili_View_Relate.js

var obj = JSON.parse(body); 

obj1=obj['data']['relates'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('is_ad')){      
       obj1.splice(index,1)  
    }

   });
   
obj['data']['relates']=obj1

JSON.stringify(obj);