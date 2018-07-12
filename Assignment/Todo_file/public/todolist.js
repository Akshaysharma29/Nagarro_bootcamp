var todos =[]; 
var audio;
var checking =[];
//var temptodo = [];


$("div").on("click","input[type='checkbox']",function(){
    $(this).parent().parent().toggleClass('completed');
})

$("div").on("click",".down",function(){
    //console.log($(this).parent().parent().next())
    $($(this).parent().parent()).insertAfter($($(this).parent().parent().next()));
    refill();
})



$("div").on("click",".up",function(){
    //console.log($(this).parent().parent().prev())
    $($(this).parent().parent().prev()).insertAfter($($(this).parent().parent()));
    refill();
})

$(".Add").click(function(){

  if($("input[type='text']").val()){  
    let text = $("input[type='text']").val();
    
    let data="<li><span><input type='checkbox' class='chk'></span> "+ text +" <span><i class='fas fa-arrow-up up'></i></span><span><i class='fas fa-arrow-down down'></i></span></li>";

    todos.push(text);

    $('ul').append(data);

    $("input[type='text']").val("");

    refill();
  } 
})

$("div").on("click",'.Delete',function(){

    $(".chk:checked").each(function() {
        //console.log($(this).parent().parent())
        var l = $(this).parent().parent().text().length;
        var tx =$(this).parent().parent().text().slice(1,l-2);
        //console.log(typeof($(this).parent().parent().text().slice(1,l-9)));
        console.log(l);
        console.log(tx);
        //todos.splice( $.inArray(tx, todos), 1 );

        todos = $.grep(todos, function(value) {
            return value != tx;
          });

        $(this).parent().parent().fadeOut(500,function(){
            $(this).remove();
            // console.log(($('ul li').length-1));
            refill();
        })
	});     
    
})

$("div").on("click",'.Sort',function(){
    //console.log($('ul li').length);

    $(".chk:checked").each(function() {
        var temp = $('ul li').length;
        //console.log($(this).parent().parent())
        //console.log(temp)
        $($(this).parent().parent()).insertAfter("ul li:nth-child("+temp+")");

	});

    refill();
})

$("div").on("click",".Save",function(){
    //audio.pause();
    // console.log("hi");
    update();
    alert("Changes Saved");
    var str = JSON.stringify(todos);
    //localStorage.setItem("todos",str);

    // $.post({"/save", function(req,res){
    //     res.render("server.js",{ data : str});
    // });

    $.post(
        '/json',
        {
            'json':str
        },
        function(){
            
        }
    )

    //for checking
    var strc = JSON.stringify(checking);
    
    $.post(
        '/jsonc',
        {
            'jsonc':strc
        },
        function(){
            
        }
    )

})

function getTodos(){
    var str =$.get({
        url:'/json',
        async:false
    });
    //console.log(str);
    todos =JSON.parse(str.responseText);
    //console.log(todos)
    //localStorage.removeItem("todos");
    if(todos==undefined){
        todos =[] //['Complete Assignment','Pack Bag for Nagarro','Submit Assignment to Arnav Bhaiyya']
    }
    //console.log(todos)


    

    // $.get("/", function(){
    // });


    //for checking
    var strc = $.get({
        url:'/jsonc',
        async:false
    });
    checking =JSON.parse(strc.responseText);
    // //console.log(todos)
    // //localStorage.removeItem("todos");
    if(checking==undefined){
        checking =[] //['Complete Assignment','Pack Bag for Nagarro','Submit Assignment to Arnav Bhaiyya']
    }
}

function listtodos(){

    for(var i =0;i<todos.length;i++){
        
        let data;
        var c=0;

        for(var j=0;j<checking.length;j++){
            if(checking[j]==i){

                var tempc=checking[j];
                console.log(tempc);
                tempc++;
                c=1;
                console.log(tempc);
                console.log($( "ul li:nth-child("+tempc+")"));
                
                data="<li class='completed'><span><input type='checkbox' checked='True' class='chk'></span>"+ todos[i] +" <span><i class='fas fa-arrow-up up'></i></span><span><i class='fas fa-arrow-down down'></i> </span></li>";    
                
                //($( "ul li:nth-child("+tempc+")")).addClass('completed')           
            }
        }

        if(c==0)
        {
            data="<li><span><input type='checkbox' class='chk'></span> "+ todos[i] +" <span><i class='fas fa-arrow-up up'></i></span><span><i class='fas fa-arrow-down down'></i> </span></li>";
        }

        $('ul').append(data);



    }

    refill();

    // audio = $.playSound("http://sc59.lon.llnw.net:80/stream/bbcmedia_radio1_mf_p");
    // audio.play();
    //localStorage.removeItem("todos");
}

getTodos();
listtodos();
 

// $('#container').html();
//localStorage.content = $('#container').html();
// $('#container').html(localStorage.content);
//checked='True'

function refill(){
    var i=0;

    // if(($('ul li').length-1)==i)
    // {
    //   $( "li" ).each(function(){
    //       $( this ).find("span .down").hide();
    //       $( this ).find("span .up").hide();
    //   }
    // }
    // else{
    //console.log(($('ul li').length-1));
    $( "li" ).each(function() {
        if(i==0){
            $( this ).find("span .up").hide();
            $( this ).find("span .down").show();
        }
        else if(($('ul li').length-1)==i){
            $( this ).find("span .down").hide();
            $( this ).find("span .up").show();
        }
        else{
            $( this ).find("span .down").show();
            $( this ).find("span .up").show();
        }
        i++;
      });
    //}
    

}

function update(){

    todos = [];
    checking = [];
    $( "li" ).each(function() {
        todos.push($( this ).text());
    });

    $(".chk:checked").each(function(){
        checking.push($(this).parent().parent().index());
        });

}