//This is code that will select a new picture every 24hours trying to do the picture of the day

// $( document ).ready(function() {  
//     SetImage();
//     window.setInterval(SetImage,1000);
// });

// function SetImage(){     
//     var nowdate = new Date() ;
    
//     var waketime = new Date();     
//     waketime.setHours(6);
//     waketime.setMinutes(30);
    
//     var bedtime = new Date();     
//     bedtime.setHours(18);
//     bedtime.setMinutes(30);
    
//     if(waketime < nowdate  && nowdate < bedtime){
//          $('#day').show();
//          $('#night').hide();
//     }else{
//          $('#night').show();
//          $('#day').hide();
//     }
// }

// <img id="night" src="">
// <img id="day" src=""></img>


// or using a time interval but need to place the seconds to equal 24 hours
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  //86400 seconds in 24hours
  .fadeOut(86400)
  .next()
  .fadeIn(86400)
  .end()
  .appendTo('#slideshow');
}, 300000);