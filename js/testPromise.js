// (function testPromise(){
//     let a = '1';
//     console.log(a);

//     let b = "2";
//     console.log(b);
// })();


// setTimeout(function(){
//     console.log('定时器开始啦')
// });

// new Promise(function(resolve){
//     console.log('马上执行for循环啦');
//     for(var i = 0; i < 10000; i++){
//         i == 99 && resolve();
//     }
// }).then(function(){
//     console.log('执行then函数啦')
// });
    
// console.log('代码执行结束');
// let data = [];
// debugger;
// $.ajax({
//     type:'post',
//     url:"https://www.javascript.com/",
//     contentType:'application/x-www-form-urlencoded',
//     data:data,
//     success:() => {
//         console.log('发送成功!');
//     }
// })
// console.log('代码执行结束');
// console.log('1')
// debugger;
// setTimeout(() => {
//   console.log('2')
// })
// new Promise((resolve, rejects) => {
//   console.log('3')
//   resolve()
// }).then(() => {
//   console.log('4')
// })
// console.log(5)

(
    function testFn(){
        console.log(this);
        let name = "药尘";
        let obj = {
            name:"萧薰儿",
            test:{
                    name:"萧炎",
                    //console.log(this.name);
                    e:function (){
                        debugger;
                        name:"萧炎";
                        console.log(this.name);
                        console.log(name+"test");
                }
            }
        }
        obj.test.e();
        obj.test.e.call(obj);
        // obj.test.e.call();
    }
    
)();