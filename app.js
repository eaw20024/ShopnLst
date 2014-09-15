$(document).ready(function(){
  function addnewitem () {
    var newitem = $("input[name=input-form]").val();
    $(".item-list").prepend("<li class='newlistitem'>"+ newitem +"</li>");
    $(this).addClass("newlistitem");
    $("#input-form").val("");
   };

   $(".button_submit").click(function(event){
    event.preventDefault();
    addnewitem();

   });

   $(".item").on('click', '.newlistitem', function(event){
    event.preventDefault();
    $(this).removeClass('newlistiem');
    $(this).addClass('crossed-item');

   });

    $(".item-list").on('click', '.crossed-item', function(event){
    event.preventDefault();
    $(this).remove();

    console.log("is this working");
   });

   $("#input-form").on("keydown",function(event){
    console.log("is this still working");
    if (event.keyCode == 13) {
    event.preventDefault();
      addnewitem();
     }
   });
});