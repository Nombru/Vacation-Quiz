$(document).ready(function() {
  $("#questions").submit(function(event){
  //  console.log("Hi");
    var q_OneInput = parseInt($("#q_One").val());
    var q_TwoInput = parseInt($("#q_Two").val());
    var q_ThreeInput = parseInt($("#q_Three").val());

    //console.log(q_OneInput);

    var total = q_OneInput + q_TwoInput + q_ThreeInput;
    console.log(total);

    if(total === 3){
      $("#a_One").show();
    } else if (total === 2) {
      $("#a_Two").show();
    } else if (total === 1) {
      $("#a_Three").show();
    } else {
      $("#a_Four").show();
    }
    
    event.preventDefault();
  });

});
