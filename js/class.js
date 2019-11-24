class Test{

    constructor(name){
        this.name = name;
        this.age;
        this.sex
    }

    // constructor(high,weight){
    //     this.high = high;
    //     this.weight = weight;
    // }
    Test(){
        alert(this.name);
    }

    print (print){
        this.age = 10;
        console.log("实现打印的效果",this.name);
        console.log("直接使用构造方法的属性"+this.age);
    }
}

