/**
 *
 * @param {number|string|Date} time
 * @param {string} format default:yyyy-MM-dd HH:mm:ss
 *  y-year M-month d-date h-hours m-minutes s-seconds q-quarter S-milliseconds E-week
 * @returns {string}
 */
export function formatTime(time, format = 'yyyy-MM-dd HH:mm:ss') {
    let curDate = time;
    const invalidTime = '--';
    if (typeof time === 'number') {
       const  timestampLength = (time + '').length;
        if (timestampLength === 10) {
            curDate = new Date(time * 1e3);
        } else if (timestampLength === 13) {
            curDate = new Date(time);
        } else {
            return invalidTime;
        }
    } else if (typeof time === 'string') {
        curDate = new Date(time);
    }
    if (!curDate instanceof Date) {
        return invalidTime;
    }
    const o = {
        'M+': curDate.getMonth() + 1,
        'd+': curDate.getDate(),
        'h+': curDate.getHours(),
        'H+': curDate.getHours(),
        'm+': curDate.getMinutes(),
        's+': curDate.getSeconds(),
        'q+': Math.floor((curDate.getMonth() + 3) / 3),
        'S+': curDate.getMilliseconds()
    };

    // TODO: week显示中文或英文
    const week = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    };

    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (curDate.getFullYear() + '').substring(4 - RegExp.$1.length));
    }

    if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1)
            ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468')
                : '') + week[curDate.getDay() + '']);
    }

    for (const k in o) {
        if ((new RegExp(`(${k})`)).test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k])
                : ((`00${o[k]}`).substring((`${o[k]}`).length)));
        }
    }
    return format;
}