//$(document).ready(function(){
//
//init();
//
//});


$(function(){
//   $("#kezd").click(init);
   $("#kezd").click("click",init);
});



function init(){
//    $("div").eq(0).html("ide <b> írd</b>");
//   alert($("div").eq(0).html());
   $("#jatekter").empty();
   for (var i = 0; i < 5; i++) {
//    $("#jatekter").append("<img src='hatter.jpg' alt='kartyalap'>");
    $("#jatekter").append("<div>");
      $("#jatekter div").eq(i).append("<img>");
//     $("#jatekter img").eq(1).attr("src","hatter.jpg");
//     $("#jatekter img").eq(1).attr("alt","kartyalap");
$("#jatekter img").eq(i).attr({"src":"hatter.jpg","alt":"kartyalap"});   
   
}
$("#jatekter div").css({"background-color":"cyan","padding":"2%"});
$("#jatekter div").mouseenter(
    function(){
        $(this).css({"background-color":"red"});
       
        
    }
    );
    $("#jatekter div").mouseleave(
    function(){
        $(this).css({"background-color":"cyan"});
    }
        );
$("#jatekter div").click(
    function(){
        $(this).hide(1000);
        $(this).show(1000);
    }
    );
}

    
    


