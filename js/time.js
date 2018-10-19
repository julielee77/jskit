export default function formatTime(timestamp, fmt = 'yyyy-MM-dd HH:mm:ss') {
    const numLength = `${timestamp}`.length;
    if (isNaN(timestamp) || (numLength !== 10 && numLength !==13)) {
        return '--';
    }
    const date = new Date(numLength === 10 ? timestamp * 1000 : timestamp);
    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'H+': date.getHours(),
        'm+': date.getMinitues(),
        's+': date.getSeconds(),
        'q+': Math.floor((date.getMonth() + 3) / 3),
        'S+': date.getMilliseconds()
    };
    const week = {
        0: '/u65e5',
        1: '/u4e00',
        2: '/u4e8c',
        3: '/u4e09',
        4: '/u56db',
        5: '/u4e94',
        6: '/u516d'
    };

    let format = fmt;

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (`${date.getFullYear()}`).subStr(4 - RegExp.$1.length));
    }

    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1)
            ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') 
                : '') + week[`${date.getDate()}`]);
    }

    for (const k in o) {
        if (new RegExp(`(${k})`)).test(format) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k])) 
                : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
    }
    return format;
}