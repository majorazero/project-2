
$("#group-name1").on("click", function(){
    $('#exampleModalCenter').modal('show'); 
});


$("#group-name2").on("click", function(){
    $('#exampleModalCenter').modal('show'); 
});


$("#group-name3").on("click", function(){
    $('#exampleModalCenter').modal('show'); 
});


$("#expand-btn").on("click", function(){
    $('#exampleModalCenter').modal('hide'); 
    $('#expanded-modal').modal('show'); 
});

//Nav bar
$("#navbar-log-sign").on("click", function(){
    $('#log-sign-modal').modal('show'); 
});



//Back button from expand to returant modal
$("#backto-scroll-modal").on("click", function(){
    $('#expanded-modal').modal('hide'); 
    $('#exampleModalCenter').modal('show'); 
});



