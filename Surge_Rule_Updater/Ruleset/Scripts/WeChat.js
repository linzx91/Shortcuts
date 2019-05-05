var result = body

let path = '/mp/getappmsgad?f=';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.advertisement_info = [];
    result = JSON.stringify(jsbody);
}

result;

// [MITM]
// hostname = mp.weixin.qq.com