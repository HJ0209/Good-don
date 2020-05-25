$(function() {
    $("#Period_Direct").hide();

    $("#period").change(function(){
        console.log("change");
        if($("#period").val() == "direct") {
            console.log("show");
            $(this).hide();
            // $(this).attr('class','hide');
            $("#Period_Direct").show();
            
        } else {
            console.log("hide");
            $("Period_Direct").hide();
        }
    })
});


// $(function(){
//     //직접입력 인풋박스 기존에는 숨어있다가

// $("#Period_Direct").hide();



// $("#selbox").change(function() {

      

//               //직접입력을 누를 때 나타남

//       if($("#selbox").val() == "direct") {

//           $("#Period_Direct").show();

//       }  else {

//           $("#Period_Direct").hide();

//       }

      

//   }) 

  

// });



// $(document).ready(function() {
//     $('#period').change(function() {
//         var period_Direct = $('#period').val();
//         if(period_Direct == 'direct') {
//             $("#period").replaceWith("<input type='text' id='direct' placeholder='직접입력'>");
//         }
//     })
// })