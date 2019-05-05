var obj = JSON.parse(body); 

delete obj['data']['rec_channel'];


obj1=obj['data']['region_top'];
obj2=obj['data']['region_bottom'];

obj1.forEach(function (element, index, array){
    if(element['tid']==167||element['tid']==177||element['tid']==65543){      
       obj1.splice(index,1)  
    }

   })

obj2.forEach(function (element, index, array){
    if(element['tid']==65537||element['tid']==3||element['tid']==5||element['tid']==11||element['tid']==23||element['tid']==165){      
       obj2.splice(index,1)  
    }

   })


obj['data']['region_top']=obj1;
obj['data']['region_bottom']=obj2;

JSON.stringify(obj);

// [MITM]
// hostname = api.bilibili.com, app.bilibili.com