function Go() {
    console.log("Go");
}

function GoSteps(n) {
    n = n === undefined ? 1 : Number(n);
    if (!isNaN(n)) {
        if (positiveNumber(n)) {
            n = Math.floor(n);
            while (n--) {
                Go()
            }
        }

    }
}

//判断是否为正数
function positiveNumber(num) {
    var reg = /^\d+(?=\.{0,1}\d+$|$)/
    if (reg.test(num)) return true;
    return false;
}


// GoSteps(10); // Go 10次
// GoSteps(1); // Go 1次
// GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
// GoSteps(0); // 0次
// GoSteps(-1); // 0次
// GoSteps(1.4); // Go 1次
// GoSteps(1.6); // Go 1次
// GoSteps(-1); // 0次
// GoSteps(true); // Go 1次
// GoSteps(false); // 0次
// GoSteps("Test"); // 0次
// GoSteps(NaN); // 0次
// GoSteps(null); // 0次
// GoSteps(3.4);




// clock

var timeBox = document.querySelector('#time');


// 返回所在星期
function getDay(day, type) {
    type = type === undefined ? 1 : type;
    var nowDay = day.getDay();
    if (type === 1) {
        var dayArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    } else {
        var dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Thursday', 'Saturday '];
    }
    return dayArr[nowDay]
}

function fillUp(day) {
    var year = day.getFullYear(); //年
    var month = day.getMonth() + 1; //月
    var d = day.getDate(); //某一天
    var hour = day.getHours(); //时
    var minute = day.getMinutes(); //分
    var second = day.getSeconds(); //秒
    month = month < 10 ? ('0' + month) : month;
    d = d < 10 ? ('0' + d) : d;
    hour = hour < 10 ? ('0' + hour) : hour;
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return {
        year: year,
        month: month,
        d: d,
        hour: hour,
        minute: minute,
        second: second
    }
}

// 格式为 YYYY 年 MM 月 DD 日 星期 D HH:mm:ss
function format(type) {
    type = type === undefined ? 1 : type;
    var d = new Date();
    var isWeek = getDay(d, type);
    var time = fillUp(d);
    if (type === 1) {
        return time.year + '年' + time.month + '月' + time.d + '日' + isWeek + ' ' + time.hour + ':' + time.minute + ':' + time.second
    } else {
        var timeLock = '上午';
        if (time.hour > 12) {
            timeLock = '下午'
        }
        return time.year + '-' + time.month + '-' + time.d + ' ' + isWeek + ' ' + time.hour + ':' + time.minute + ':' + time.second + ' ' + timeLock
    }
}

// 为 format添加参数就可以改变输出
timeBox.innerHTML = format();
setInterval(function() {
    timeBox.innerHTML = format();
}, 1000)