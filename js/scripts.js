$(document).ready(function() {
  $("#questions").submit(function(event){
// trying to get the Name Input to work here
  var nameInput = $("input#fullName").val();
  $(".nameInput").append(nameInput);

// Capturing the values of each elecg
    var q_OneInput = parseInt($("#q_One").val());
    var q_TwoInput = parseInt($("#q_Two").val());
    var q_ThreeInput = parseInt($("#q_Three").val());
    var q_FourInput = parseInt($("#q_Four").val());
    var q_FiveInput = parseInt($("#q_Five").val());

    //console.log(q_OneInput);

    var total = q_OneInput + q_TwoInput + q_ThreeInput + q_FourInput + q_FiveInput;

    console.log(total);

    if(total === 5){
      $("#a_One").show();
      $("#questions").fadeOut("slow");
    } else if (total <=8) {
      $("#a_Two").show();
      $("#questions").fadeOut("slow");
    } else if (total === 10) {
      $("#a_Four").show();
      $("#a_One").show();
      $("#a_Two").show();
      $("#a_Three").show();
      $("#questions").fadeOut("slow");
    } else {
      $("#a_Three").show();
      $("#questions").fadeOut("slow");
    }
    event.preventDefault();
  });
});

  //  console.log("Hi");
