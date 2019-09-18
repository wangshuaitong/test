class Test{

    constructor(name){
        this.name = name;
    }

    // constructor(high,weight){
    //     this.high = high;
    //     this.weight = weight;
    // }
    Test(){
        alert(this.name);
    }

    print (print){

        console.log("实现打印的效果",this.name);
    }
}

