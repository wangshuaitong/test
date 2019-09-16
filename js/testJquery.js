// 测试jQuery对的加载使用

$(document).ready(
    function(){
        // $(function(){
        //     $("#Image").bind("click",myBindFun);
        //     // $("#Image").bind("click",{dl:"c#",d2:"java"},myBindFun);
        // });
        // function myBindFun(){
        //     debugger;
        //     alert("图片名称");
        //     // alert("图片名称"+e.data.dl+"出版社"+e.data.d2);
        // }

        $("#Image").bind("click", function(event){
            var str = "( " + event.pageX + ", " + event.pageY + " )";
            alert(str);
            $("span").text("Click happened! " + str);
        });
    }
)