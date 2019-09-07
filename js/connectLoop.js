// 测试链式调用

class person{

    $Onit(){
        console.log("初始化调用方法");
    }

    eat(){
        console.log("吃饭");
        debugger;
        console.log(this);
        return this;
    }

    run(){
        console.log("跑路");
        console.log(this);
        return this;
    }
}

function connectLoop(){

    let personOne = new person();
    console.log(personOne.eat().run());
}