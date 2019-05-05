var obj = JSON.parse(body); 

delete obj['ad_info']

JSON.stringify(obj);

// [MITM]
// hostname = api.zhihu.com