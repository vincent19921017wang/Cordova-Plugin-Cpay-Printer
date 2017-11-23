var exec = require('cordova/exec');

var CpayPrinter2 = {
    connect:function (fnSuccess,fnError) {
        exec(fnSuccess, fnError, "CpayPrinter2", "connect", [name]);
    },
    printTextAsImage:function (fnSuccess,fnError) {
        exec(fnSuccess,fnError,"CpayPrinter2","print",[text]);
    },
    sayHello:function (fnSuccess,fnError) {
        exec(fnSuccess,fnError,"CpayPrinter2","sayHello",[hehe]);
    },
    getCardInfo:function (fnSuccess,fnError) {
        exec(fnSuccess,fnError,"CpayPrinter2","getCardInf",[haha]);
    }
};

module.exports = CpayPrinter2;