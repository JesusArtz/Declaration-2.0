let no=document.getElementsByName('btn-no');
no.addEventListener("mousemove", function(e){
    let x = Math.round( Math.random() * 93);
    let x = Math.round( Math.random() * 93);
    no.style.left = x+"%";
    no.style.top = y+"%";
})