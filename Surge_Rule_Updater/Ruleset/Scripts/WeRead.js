var result = body

let path = '/pay/memberCardSummary';

if (url.indexOf(path) != -1) {
    var jsbody = JSON.parse(body);
    jsbody.remainTime = 86313600;
    result = JSON.stringify(jsbody);
}

result;

// [MITM]
// hostname = i.weiread.qq.com