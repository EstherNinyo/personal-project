function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className ===" topNav"){
         x.clasName +=" responsive";
    } else {
        x.className = "topnav";
    }    
}