let inp = document.getElementById("inp");
let sub = document.getElementById("sub");

let numberList = document.getElementById("numberList");

let n;

sub.addEventListener("click",function(){
let d = new Date().getTime();
    n = Number(inp.value);
console.log(d);

   let data=''   ;
    for(let i =1 ;i <= n ;i++){
        
        let val ='' ;
        let x = i;

        // x = String(i);

        // if(i%15 == 0)
        // {
        //     val.innerText = 'FizzBuzz';
        // }
        // else if(i%5==0)
        // {
        //     val.innerText = 'Buzz';
        // }
        // else if(i%3==0)
        // {
        //     val.innerText = 'Fizz';
        // }
        // else
        // {
        //      val.innerText = i;
        // }

        if(i%3==0){
            val = 'fuzz';
        }

        if(i%5==0){
            val+='buzz';
        }

        if(val==''){
            val =i;
        }
      
        data += "<li>" + val + "</li>";

    }

    let u = document.createElement("li");

    u.innerHTML =data;

    numberList.appendChild(u);

    let e = new Date().getTime();
    console.log(e);
    console.log(e-d);

})