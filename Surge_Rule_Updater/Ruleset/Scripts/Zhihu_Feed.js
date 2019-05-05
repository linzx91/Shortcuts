var obj = JSON.parse(body); 
obj1=obj['data'];

obj1.forEach(function (element, index, array) {
     if(element.hasOwnProperty('ad')){      
       obj1.splice(index,1)  
    }

   });

obj['data']=obj1

JSON.stringify(obj);

// [MITM]
// hostname = api.zhihu.com