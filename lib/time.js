import toInteger from 'lodash/toInteger';

// 判断2个日期对象年月日是否相同
export function isSameDate(date1, date2) {
    const [d1, d2] = [new Date(date1), new Date(date2)];
    return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDay() === d2.getDay();
}

export function current() {
    return Date.now();
}

export function currentYear() {
    return new Date().getFullYear();
}

export function currentDay() {
    return new Date().getDate();
}

export function currentMonth() {
    return new Date().getMonth();
}

/**
 * @Description 传入某个时间戳，返回该时间戳所在星期第一天 0 点的时间戳
 * @param todayTimeStamp(ms) 传入的时间戳
 * @returns {number} (ms)
 */
export function getMondayTimeStamp(todayTimeStamp) {
    let currentDay = new Date(todayTimeStamp).getDay(); // 当前是本周的第几天
    let minusDay = currentDay !== 0 ? currentDay - 1 : 6; // day == 0 为星期天, 所以要减去6天, 如果不为 0
    return todayTimeStamp - minusDay * 24 * 3600 * 1000;
}

/**
 * @Description 传入某个时间戳，返回该时间戳所在月份第一天 0 点的时间戳
 * @param todayTimeStamp(ms) 传入的时间戳
 * @returns {number} (ms)
 */
export function getFirstDayTimeStamp(todayTimeStamp) {
    let date = new Date(todayTimeStamp), currentMonth = date.getMonth(), currentYear = date.getFullYear();
    return new Date(currentYear, currentMonth, 1).getTime(); // 本月1号0点的时间戳
}

/**
 * 获取当天 00:00:00 点 或者 23:59:59 的时间戳
 * @param toTodayLastSecond 默认为 false, 返回 00:00:00 的时间戳，当为 true 的时候, 返回当天 23:59:59 的时间戳
 * @returns {number}
 */
export function getTodayTimeStamp(toTodayLastSecond = false) {
    let datetime = new Date();

    if (toTodayLastSecond) {
        return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate(), 23, 59, 59).getTime();
    }

    return new Date(datetime.getFullYear(), datetime.getMonth(), datetime.getDate()).getTime();
}


/**
 * @description 返回从现在开始，往前 N 天的时间戳
 *  86400000 = 24 * 3600 * 1000 为精确到毫秒的一天
 *  days -1 的原因是认为当前天为一整天
 * @param days
 * @returns {Date}
 */
export function getPrevNDays(days) {
    return new Date(current() - 86400000 * (days - 1));
}

/**
 * @description 返回从现在开始，往前 N 天的时间戳
 *  86400000 = 24 * 3600 * 1000 为精确到毫秒的一天
 *  days -1 的原因是认为当前天为一整天
 * @param days
 * @returns {Date}
 */
export function getNextNDays(days) {
    return new Date(current() + 86400000 * (days - 1));
}


/**
 * @Description 指定某个类型，返回该类型的起始和结束时间戳
 * @param type: string 某个具有意义的时间范围
 * @param: toTodayLastSecond boolean 是否返回以毫秒计数的 BeginTime/EndTime 格式
 * @returns {startDate: Date, endDate: Date, BeginTime: number, EndTime: number}
 */
export function getTimeRange(type) {
    let BeginTime = 0, EndTime = 0,
        toTime = this.getTodayTimeStamp(true), // 今日 23：59：59 点时间戳
        todayTimeStamp = this.getTodayTimeStamp(); // 今日0点时间戳

    switch (type) {
        case 'today':
            BeginTime = todayTimeStamp;
            EndTime = toTime;
            break;
        case 'yesterday':
            BeginTime = todayTimeStamp - 24 * 3600 * 1000;
            EndTime = todayTimeStamp - 1000;
            break;
        case 'thisWeek':
            BeginTime = this.getMondayTimeStamp(todayTimeStamp);
            EndTime = toTime;
            break;
        case 'thisMonth':
            BeginTime = this.getFirstDayTimeStamp(todayTimeStamp);
            EndTime = toTime;
            break;
        default:
            BeginTime = arguments[0];
            EndTime = arguments[1];
            break;
    }
    console.log({
        startDate: new Date(BeginTime),
        endDate: new Date(EndTime),
        BeginTime: toInteger(BeginTime),
        EndTime: toInteger(EndTime)
    });

    return {
        startDate: new Date(BeginTime),
        endDate: new Date(EndTime),
        BeginTime: toInteger(BeginTime),
        EndTime: toInteger(EndTime)
    };
}


