$("#clickRequest").on("click",function(){
    //alert("请求百度");
    console.log("执行第一个函数！");
    report();
    console.log("执行第三部");
    test(report);
    // console.log(xunhuan);
    debugger;
    sk();

    console.log("==================");
    Object.setPrototypeOf(obj,first);

    console.log(obj.constructor);
    // 执行测试原型
    // console.log(obj);
    // console.log(obj.firstName);
    // console.log(obj.secondName);
    // // console.log(obj.method.secondName);
    // console.log(obj.method.firstName);
    // console.log(obj);
    // obj.test();
    // console.log(obj._protp_);
    // 测试表明函数内部的var变量不能再函数之外进行使用，但是如果在内部变量在全局变量中有相同的变量，那么就以离的最近的变量为主。
    // console.log(111111111111111111+testVar);

    // let max_num = 423;
    // const num = {};
    // console.log(num);
    // max_num.properties = 222;
    // num.properties = "属性";
    // console.log(num.properties);
    var aaa = {
        name:"23",
        age:"444"
    }
        
    doSome(aaa);
})

function report(){

    console.log("执行第二个函数！");
}

function test(test){
    test();
}

function doSome(obj){
    var _ada = {
        name:'wangshuaitong',
        age:24,
        prize:18
    }


    for (var i in _ada) {
         _ada[i] = obj[i] || _ada[i];
        console.log(_ada[i]);
        //console.log(_ada[i]);
    }
}

// 测试原型属性
const obj = {
    firstName:'wangshuaitong',
    method:{
        secondName:'shuaishuai'
    },
    test:function tt(){
        console.log(1);
        // console.log(this.method.firstName);
    }
}

const first = {
    second:{
        method:function back(){
            return {
                name:'wang',
                age:34
            }
        }
    }
}

function Person() {}
Person.prototype.name = 'Zaxlct';
Person.prototype.age  = 28;
Person.prototype.job  = 'Software Engineer';
Person.prototype.sayName = function() {
  alert(this.name);
}


