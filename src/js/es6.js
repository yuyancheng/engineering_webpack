const alongstr = "features\u02343\u0234\u1234";
// console.log(alongstr.startsWith('features', 0))
// console.log(String.fromCodePoint(0x02343))
// console.log(String.fromCodePoint(0x02344))

// const padStr = 'from other'
// const newstr = alongstr.padSatrt(20, padStr)
// console.log(newStr)

const obj_a = {
    a: 123
};
const obj_b = {
    a: 123
};


Object.defineProperty(Object, "is", {
    value: function(x, y) {
        debugger;
        if (x === y) {
            // 针对+0 不等于 -0的情况
            return x !== 0 || 1 / x === 1 / y;
        }
        // 针对NaN的情况
        return x !== x && y !== y;
    },
    configurable: true,
    enumerable: false,
    writable: true
});
// console.log(Object.is(obj_a, obj_b));
// console.log(Object.assign(1)[0])

function* gerneratorDemo() {
    yield 'h';
    yield () => 'dddd3';
}

// hw = gerneratorDemo();
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

const myIterator = {}
// console.log(myIterator[Symbol.iterator])
myIterator[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 4;
}
//console.log([...myIterator])
// const padStr1 = 'ni'.padStart(4, 'baren')
// const padStr2 = 'ni'.padEnd(4, 'baren')
// console.log(padStr1)
// console.log(padStr2)

// const rawStr = 'this is a \n tag';

// console.log(String.raw`Hi\u000A!`);

let symbolValue = Symbol();
// symbolValue = 'hippo';
// console.log(typeof symbolValue);
// console.log(symbolValue);

const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

function sfoo() {
    return 'ss';
}
console.log(typeof sfoo);