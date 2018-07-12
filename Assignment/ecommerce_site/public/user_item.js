$(function () {
    
    $('.card').on("click",".adduseritem",function () {

        cosole.log($(this));
        cosole.log($(this).parent().parent().find(".productname").text());
        console.log($(this).parent().find(".productprice").val());

        addusers(
            $(this).parent().parent().find(".productname").text(),
            $(this).parent().find(".productprice").val(),
            function (addedProduct) {
                window.alert("useritem Added to Database")
            }
        )


    })

})