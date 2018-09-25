  function myQuiz(){
    var question1 = $("input:radio[name=question1]:checked").val();
    var question2 = $("input:radio[name=question2]:checked").val();
    var question3 = $("input:radio[name=question3]:checked").val();
    var question4 = $("input:radio[name=question4]:checked").val();

    var marks = 0;
    if(question1 === "1") {
      marks++;
    }
    if (question2 === "1") {
      marks++;
    }
    if (question3 === "1") {
      marks++;
    }
    if (question4 === "1") {
      marks++;
    }
    document.getElementById("result").innerHTML="You have got " + marks + " out of 4"
  };