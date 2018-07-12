function greeter(greeting){
    function greet(name){
        console.log( greeting + " " + name);
    }

    return greet;
}

let gm = greeter("Good morning");

gm("Akshay");

function fun1(){
    console.log("this is fun1");
}

function fun2(f){
    console.log("this is fun2");
    f();
}

fun2(fun1)