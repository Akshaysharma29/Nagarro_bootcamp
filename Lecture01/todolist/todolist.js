let task = document.getElementById("task");
let addtask = document.getElementById("addtask");
let todolist = document.getElementById("todolist");

addtask.addEventListener("click",function(){
    let val = document.createElement("li");

    let item = document.createElement("button");

    let itemup = document.createElement("button");

    let itemdown = document.createElement("button");

    itemup.innerText = 'up';

    itemdown.innerText = 'down';

    item.innerText = 'x';

    val.innerText = task.value;

    val.appendChild(item);
    val.appendChild(itemup);
    val.appendChild(itemdown);

    item.setAttribute('data-id',5); 

    item.addEventListener("click",function(){
    
        console.log(event.target.getAttribute('data-id'));
        todolist.removeChild(event.target.parentElement);
    })

    itemdown.addEventListener("click",function(){

        if(val.nextSibling){
            val.parentNode.insertBefore(val.nextSibling,val);
        }
    })

    itemup.addEventListener("click",function(){

        if(val.previousSibling){
            val.parentNode.insertBefore(val,val.previousSibling);
        }
    })
     
    todolist.appendChild(val);
})