// 类型比较
export function isType(obj, type) {
    const _toString = Object.prototype.toString;
    let flag = false;
    if (typeof obj === "object") {
        switch (type) {
            case "Array":
                flag = _toString.call(obj) === "[object Array]";
                break;
            case "Date":
                flag = _toString.call(obj) === "[object Date]";
                break;
            case "Json":
                flag = _toString.call(obj) === "[object Object]";
                break;
            case "RegExp":
                flag = _toString.call(obj) === "[object RegExp]";
                break;
            default:
                flag = false;
                break;
        }
    }
    return flag;
}
// 获取正则通配符
export function regExpWildcard(reg) {
    var flags = "";
    if (reg.global) flags += "g";
    if (reg.ignoreCase) flags += "i";
    if (reg.multiline) flags += "m";
    return flags;
}

// 深度拷贝
export function deepCopy(arg) {
    if (isType(arg, "Json")) {
        const proto = Object.getPrototypeOf(arg);
        const json = Object.create(proto);
        for (let key in arg) {
            json[key] = deepCopy(arg[key]);
        }
        return json;
    } else if (isType(arg, "Array")) {
        const arr = [];
        arg.forEach((index) => {
            arr.push(deepCopy(index));
        });
        return arr;
    } else if (isType(arg, "Date")) {
        return new Date(arg.getTime());
    } else if (isType(arg, "RegExp")) {
        const reg = new RegExp(arg.source, regExpWildcard(arg));
        if (arg.lastIndex) {
            reg.lastIndex = arg.lastIndex;
        }
        return reg;
    } else {
        return arg;
    }
}
