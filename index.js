let scr;
window.addEventListener('scroll', function(){
    if(scr == undefined){
        scr = pageYOffset;
    }
    if(pageYOffset > scr){
        //this.document.getElementById("navdiv").style.display = 'none';
        $("#navdiv").hide("drop", { direction: "up" }, 500);
        $("#footer").show(500);
        scr = pageYOffset;
    }else if(pageYOffset < scr){
        $("#navdiv").show(500);
        $("#footer").hide("drop", { direction: "down" }, 500);
        scr = pageYOffset;
    }
})