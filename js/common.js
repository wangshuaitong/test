(function(pp){
    console.log('立即执行函数');
    var ningjia = "立即执行函数参数";
    console.log(ningjia);
    var para = "参数";
    debugger;
    console.log(pp);
})(12);

!function(para){
    console.log("转化成立即执行函数");
    console.log(ninjia);
    console.log(para);
    console.log("立即函数只执行自身的函数");
}(10);