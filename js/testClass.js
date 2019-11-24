
let testClass = new Test("wangshuaitong");
testClass.print();
// testClass.Test();

let classTe = class {

    // 创建类表达式
    // constructor(){

    //     // 构造函数
    // }

    say(){

        //创建函数方法

        console.log("执行犯法");

        return 1;
    }
}
let te = new classTe();
console.log(typeof classTe);

// 疑问：为何会打印出undefined ---> 解答：因为函数无返回值 return 1;
console.log(te.say());