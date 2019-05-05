var obj = JSON.parse(body); 

obj1=obj['data']['items'];

obj1.forEach(function (element, index, array) {
   
    if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']=="three_item_h_v2"){      
       obj1.splice(index,1)  
    }

   });

obj['data']['items']=obj1

JSON.stringify(obj);

// [MITM]
// hostname = api.bilibili.com, app.bilibili.com