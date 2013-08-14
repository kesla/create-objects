var MAX = 100000;
// var MAX = 10;
var classic = function(keys, offset) {
    offset = offset || 0    ;
    return function(array) {
        var obj = {};
        for (var i = 0; i < keys.length; ++i) {
            obj[keys[i]] = array[(i + offset)];
        }
        return obj;
    }
};

var withFunction = function(keys, offset) {
    offset = offset || 0;
    var str = 'return {\n'+
        keys.map(function(key, i) {
            return '  ' + key + ': array[' + (i + offset) + ']';
        }).join(', \n') +
        '   }';

    var func = new Function('array', str);
    return func;
};

console.log('parsing');

function test(min, max) {
    var sample = Math.round(min + (max - min) / 2);
    if (sample === min || sample === max) {
        console.log('The ultimate number is %s', sample);
        return;
    }
    var result = get(sample);
    console.log(result);
    if (result === 0) {
        console.log('An exact result have been found. Nice');
        console.log('%s', sample);
    } else if (result > 0) {
        console.log('test(%s, %s)', min, sample);
        test(min, sample);
    } else {
        console.log('test(%s, %s', sample, max);
        test(sample, max);
    }
}

test(0, 100);


function get(x) {
    var keys = ['categoryName', 'name', 'imgSrc', 'location', 'key', 'changed', 'enabled'];
    var values = [];
    for(var i = 0; i < x; ++i) {
        var row = [];
        values.push(row);
        for(var j = 0; j < keys.length; ++j) {
            row.push(Math.random().toString(36).substring(7));
        }
    }
    return a(keys, values, x) / b(keys, values, x) - 1;
}

function a(keys, values, x) {
    var start = Date.now();
    var objs1 = [];
    var y = Math.round(1000000 / x);
    for(var j = 0; j < y; ++j){
        var parser = classic(keys.slice(1), 1);
        for (var i = 0; i < x; ++i) {
            objs1.push(parser(values[i], 1));
        }
    }
    return (Date.now() - start)/y;
}

function b(keys, values, x) {
    var start = Date.now();
    var objs1 = [];
    var y = Math.round(1000000 / x);
    for(var j = 0; j < y; ++j){
        var parser = withFunction(keys.slice(1), 1);
        for (var i = 0; i < x; ++i) {
            objs1.push(parser(values[i], 1));
        }
    }
    return (Date.now() - start)/y;
}