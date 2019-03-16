$("#time").html("25:00");
var tl=25;
$("#prev").on("click",function(){
  if(tl>1)
    tl-=1;
  $("#time").html(tl+":00");
});
$("#next").on("click",function(){
  tl+=1;
  $("#time").html(tl+":00");
});
$("#start").on("click",function(){
var start=new Date().getTime();
console.log(start);
start+=(tl*60*1000);
  console.log(start);
var x=setInterval(function() {
  var now = new Date().getTime();
var distance=start-now;
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(seconds<10){
    seconds="0"+seconds;
  }
$("#time").html(minutes+":"+seconds);
 if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
   bell = new Audio('https://notificationsounds.com/wake-up-tones/solemn-522/download/mp3');
    bell.play();
   $("#start").html("Reset");
   $("#start").on("click",function(){
     location.reload(true);
   });
    }
},1000);
  });