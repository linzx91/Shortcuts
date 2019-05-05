var obj = JSON.parse(body); 

obj['data']['sections'].splice(0,1)

obj['data']['sections'][0]['items'].splice(3,1)
obj['data']['sections'][0]['items'].splice(4,3)
obj['data']['sections'][1]['items'].splice(1,3)

JSON.stringify(obj);

// [MITM]
// hostname = api.bilibili.com, app.bilibili.com