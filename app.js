var temp = 0 ;


setInterval(function(){
    ++temp;
    timer();
},1000);

function timer(){
    document.getElementById('timer').innerHTML = `Timer : ${temp}`;
}
