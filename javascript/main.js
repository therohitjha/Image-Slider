slideImg();


function slideImg(){
    var ran=Math.floor(Math.random()*6)+1;
        var dice=document.getElementById('img-slide');
        dice.src=('images/'+ran+'.jpg');
    setTimeout(slideImg,5000);
    }



