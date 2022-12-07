function clock(){
    var time= new Date();
    var hour=time.getHours();
    var mint=time.getMinutes();
    var sec=time.getSeconds();



document.getElementById("hours").innerHTML = hour+'\n'+' hour';
document.getElementById("mins").innerHTML= mint + '\n' + ' mins';
document.getElementById("secs").innerHTML= sec+ '\n'+' secs';


if(hour>12){
    hour = hour-12;
    document.getElementById("hours").innerHTML = hour+'\n'+ ' hour';
    document.getElementById("ap").innerHTML="PM"
}
else{
document.getElementById("ap").innerHTML="AM";}
}
setInterval(clock);

function valuediv1(){
    // for wakeup
    var values1=document.getElementById("wake-select");
    var valuesMsg1=values1.options[values1.selectedIndex].text;
    document.getElementById("valueMsg1").innerHTML="Wake-Up Time: " + valuesMsg1;

}
function valuediv2(){
        // for party
        var values2=document.getElementById("lunch-select");
        var valuesMsg2=values2.options[values2.selectedIndex].text;
        document.getElementById("valueMsg2").innerHTML="Lunch Time: " + valuesMsg2;
}
function valuediv3(){
    // for nap
    var values3=document.getElementById("nap-select");
    var valuesMsg3=values3.options[values3.selectedIndex].text;
    document.getElementById("valueMsg3").innerHTML="Nap Time: " + valuesMsg3;
}
function valuediv4(){
    // for night
    var values2=document.getElementById("night-select");
    var valuesMsg2=values2.options[values2.selectedIndex].text;
    document.getElementById("valueMsg4").innerHTML="Night Time: " + valuesMsg2;
}

function settime(){
    var i = document.getElementById("wake-select").value;
    var j = document.getElementById("lunch-select").value;
    var k = document.getElementById("nap-select").value;
    var l = document.getElementById("night-select").value;
    var hourr=new Date().getHours();

    if(i== hourr){

        document.getElementById("rel_images").style.backgroundImage= "url(./assets\curtains.png)";
        document.getElementById("message_one").innerHTML="WakeUp and See The Sun-Shine";
    }
    else if(j==hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets\party.png)";
        document.getElementById("message_one").innerHTML="Let's make a Party";
    }
    else if(k==hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets\goodEvening.png)";
        document.getElementById("message_one").innerHTML="it's time to tea";
    }
    else if(l==hourr){
        document.getElementById("rel_images").style.backgroundImage= "url(./assets\Night.png)";
        document.getElementById("message_one").innerHTML="Relax And Take Rest!!";
    }
    else{
        document.getElementById("rel_images").style.backgroundImage= "url(./assets\display.webp)";
        document.getElementById("message_one").innerHTML="Set Alaram!!";

    }

    valuediv1();
    valuediv2();
    valuediv3();
    valuediv4();
}

function msg2(){
    var newtime = new Date();
    var hrr = newtime.getHours();
    console.log(hrr);

 if(hrr>=4 && hrr<12){
    document.getElementById("Message_two").innerHTML="Just know that you always bring out <br> the best in me. Good morning, sunshine!";
}
else if(hrr>=12 && hrr<16){
    document.getElementById("Message_two").innerHTML="What a beautiful day. Try to <br> leave work early to enjoy this wonderful day.";
}
else if(hrr>=16 && hrr<20){
  
    document.getElementById("Message_two").innerHTML="Evenings are for relaxing with a cup of tea and <br> preparing yourself for tomorrow. Good evening buddy!";
}
else if(hrr>=20 || hrr<4){
    document.getElementById("Message_two").innerHTML="May the brightest stars twinkle upon your head <br> while you sleep tonight and may your life shine <br> when you wake up tomorrow. Have a good sleep!";
}


}

msg2();