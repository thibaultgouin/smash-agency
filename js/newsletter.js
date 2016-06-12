$(document).ready(function(){
   
   
   // Firebase ref
   var ref = new Firebase("https://ykone.firebaseio.com/users");
   
   $("#signup-form").on("submit", function(e) {
       e.preventDefault();
       var name = $("#name").val();
       var email = $("#email").val();
        
        ref.push({
            name: name,
            email: email
        });
        
        $("#signup-form").hide();
        document.location.href="index.html";

        
    });
  
});