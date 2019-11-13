(function(pp){
    console.log('立即执行函数');
    var ningjia = "立即执行函数参数";
    // /console.log(ningjia);
    var para = "参数";
    debugger;
    console.log(pp);
})(12);

!function(para){
    console.log("转化成立即执行函数");
    // console.log(ninjia);
    console.log(para);
    console.log("立即函数只执行自身的函数");
}(10);


// cook().then(function(data){

//     // 开始执行-----------
//     console.log("开始执行-------------");
//     return eat(data);
// }).then(function(data){
//     return wash(data);
// }).then(function(data){
//     console.log(data);
// });

// readFile("example.txt",function(err,contents){
//     if(err){
//         throw err;
//     }

//     console.log(contents);
// });

// console.log("Hi");
cook()
.then(function(data){
    throw new Error('米饭被打翻了！');
    eat(data);
})
.catch(function(data){
    console.log(data);
});