var timeSelect = {
    yearSelect: document.querySelector('#year-select'),
    monthSelect: document.querySelector('#month-select'),
    daySelect: document.querySelector('#day-select'),
    hourSelect: document.querySelector('#hour-select'),
    miniteSelect: document.querySelector('#minite-select'),
    secondSelect: document.querySelector('#second-select'),
    resultWrap: document.querySelector('#result-wrapper'),
    init: function() {
        this.yearSelect.innerHTML = this.optionHtml(2000, 2036);
        this.monthSelect.innerHTML = this.optionHtml(1, 12);
        this.daySelect.innerHTML = this.optionHtml(1, 31); //默认31天
        // 小时
        this.hourSelect.innerHTML = this.optionHtml(0, 23);
        this.miniteSelect.innerHTML = this.optionHtml(0, 59);
        this.secondSelect.innerHTML = this.optionHtml(0, 59);
        this.selectTime();

    },
    optionHtml: function(start, end) {
        var _html = '';
        for (var i = start, len = end; i <= len; i++) {
            _html += '<option value="' + i + '">' + i + '</option>';
        }
        return _html;
    },
    nowTime: function() {
        var d = new Date();

        return d;
    },
    selectTime: function() {
        var _yearValue = this.yearSelect.options[this.yearSelect.selectedIndex].value
        var _monthValue = this.monthSelect.options[this.monthSelect.selectedIndex].value
        var _dayValue = this.daySelect.options[this.daySelect.selectedIndex].value
        var _hourValue = this.hourSelect.options[this.hourSelect.selectedIndex].value
        var _miniteValue = this.miniteSelect.options[this.miniteSelect.selectedIndex].value
        var _secondValue = this.secondSelect.options[this.secondSelect.selectedIndex].value
            // var _date = new Date('2014-04-23 18:55:49:123');        
            // var _time = _date.getTime();
        return {
            selectYearValue: _yearValue,
            selectMonthValue: _monthValue,
            selectDayValue: _dayValue,
            selectHourValue: _hourValue,
            selectminiteValue: _miniteValue,
            selectsecondValue: _secondValue
        }

    },
    getSelectTIme(date) {
        var _selectTime = new Date(date);
        return _selectTime
    },
    getDaysInMonth(year, month) {
        var date = new Date(year, month, 1);
        return new Date(date.getTime() - 864e5).getDate();
    },
    // 返回所在星期
    getDayFn(day) {
        var nowDay = day.getDay();

        var dayArr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

        return dayArr[nowDay]
    },
    compare() {
        var _nowTimeObj = this.nowTime();
        var _nowTimeC = _nowTimeObj.getTime();
        var _timeObj = this.selectTime();
        //选择的时间戳
        var _selecTime = this.getSelectTIme(_timeObj.selectYearValue + '-' + _timeObj.selectMonthValue + '-' + _timeObj.selectDayValue + ' ' + _timeObj.selectHourValue + ':' + _timeObj.selectminiteValue + ':' + _timeObj.selectsecondValue);
        var _selecTimeC = _selecTime.getTime();
        //星期
        var isWeek = this.getDayFn(_selecTime)
            //过去的时间
        if (_nowTimeC > _selecTimeC) {
            var resultTime = this.diffTime(_nowTimeC, _selecTimeC);
            this.resultWrap.innerHTML = '现在距离 "所选时间" 已经过去' + resultTime;
        } else {
            var resultTime = this.diffTime(_selecTimeC, _nowTimeC);
            this.resultWrap.innerHTML = '现在距离 ' + _timeObj.selectYearValue + '年' + _timeObj.selectMonthValue + '月' + _timeObj.selectDayValue + '日' + isWeek + ' ' + _timeObj.selectHourValue + ':' + _timeObj.selectminiteValue + ':' + _timeObj.selectsecondValue + ' 还有' + resultTime;
        }
    },
    diffTime: function(endDate, startDate) {
        var diff = endDate - startDate; //时间差的毫秒数  

        //计算出相差天数  
        var days = Math.floor(diff / (24 * 3600 * 1000));

        //计算出小时数  
        var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数  
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数  
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数  
        var minutes = Math.floor(leave2 / (60 * 1000));

        //计算相差秒数  
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数  
        var seconds = Math.round(leave3 / 1000);

        var returnStr = seconds + "秒";
        if (minutes > 0) {
            returnStr = minutes + "分" + returnStr;
        }
        if (hours > 0) {
            returnStr = hours + "小时" + returnStr;
        }
        if (days > 0) {
            returnStr = days + "天" + returnStr;
        }
        return returnStr;
    },

    dayHtml: function() {
        var _timeObj = this.selectTime();
        //获取天数
        var _day = this.getDaysInMonth(_timeObj.selectYearValue, _timeObj.selectMonthValue);
        this.daySelect.innerHTML = this.optionHtml(1, _day);


    }
}

window.onload = function() {
    timeSelect.init();
}

document.querySelector('#month-select').onchange = function() {
    timeSelect.dayHtml();
}

var selectBox = document.querySelector('#select-box');
selectBox.addEventListener('change', function(event) {
    if (event.target.nodeName === "SELECT") {
        timeSelect.compare();
    }
})