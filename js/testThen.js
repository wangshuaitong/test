// 测试then方法和Promise的特征。

// 做饭

function cook(){
    debugger;
    console.log("开始做饭");

    var p = new Promise(function(resolv,reject){
        setTimeout(function(){
            console.log("做饭完成");
            resolv("鸡蛋炒饭");
        },1000);
    });

    return p;
}

// 吃饭

function eat(data){
    console.log("开始吃饭"+data);

    var p = new Promise(function(resolv,reject){
        setTimeout(() => {
            console.log("吃饭完毕");
            reject("一块碗和一双筷子");
        }, 2000);
    });

    return p;
}

// 洗碗

function wash(data){
    console.log("开始洗碗"+data);

    var p = new Promise(function(resole,reject){
        setTimeout(() => {
            console.log("洗碗完毕！");
            console.log("干净的碗筷");
        }, 2000);
    });
    
    return p;
}



