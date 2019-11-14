var bns = require('../build/Release/bns.node');

var result = bns.get_service_conf('infinite-sandbox.BML.yq01');

console.log('service info: ', JSON.stringify(JSON.parse(result), null, 4));

result = bns.get_instance_by_service('infinite-sandbox.BML.yq01');

console.log('service info: ', JSON.stringify(result, null, 4));

result = bns.get_instance_list(['infinite-sandbox.BML.yq01', 'group.adp-juping-shows-all.FENGCHAO.all']);

console.log('get_instance_list service info: ', JSON.stringify(result, null, 4));

bns.get_instance_by_service_async('group.adp-juping-shows-all.FENGCHAO.all', function (err, result) {
    console.log('async service info: ', JSON.stringify(result, null, 4));
});

bns.get_instance_by_service_async('aaa', function (err, result) {
    console.log('invalid service info: ', err, result);
});

bns.get_service_conf_async('group.adp-juping-shows-all.FENGCHAO.all', function (err, result) {
    console.log('async service conf: ', err, result);
});

bns.get_service_conf_async('infinite-sandbox.BML.yq01', function (err, result) {
    console.log('empty service conf: ', err, result);
});

bns.get_service_conf_async('aaaa', function (err, result) {
    console.log('invalid service conf: ', err, result);
});