//LOADING
window.setTimeout(bringIn, 4100);
window.setTimeout(randomDeterminer, 1000);
window.setTimeout(update, 1000);
window.setTimeout(updateStats, 1000);

//FINISH TRANSITION
function bringIn() {
  document.getElementById("h1").style.opacity = 1;
  document.getElementById("h2").style.opacity = 1;
  document.getElementById("question").style.opacity = 1;
  document.getElementById("statistics").style.opacity = 1;
  document.getElementById("note").style.opacity = 1;
}

//RANDOM NUMBER GENERATOR
function random(max) {
  number = Math.floor(Math.random() * max);
}

//QUESTION PICKER
function randomDeterminer() {
  random(5);
  if (number == 0) {
    questionType = "Sequences";
    setSequence();
  } else if (number == 1) {
    questionType = "Linear Slope";
    setSlope();
  } else if (number == 2) {
    questionType = "Exponential Growth/Decay";
    setExpGD();
  } else if (number == 3) {
    questionType = "Exponent Laws";
    setExpL();
  } else if (number == 4) {
    questionType = "parper";
    setParper();
  }
  if (questionType == "Exponential Growth/Decay") {
    document.getElementById("answers").type = "text";
  } else if (questionType == "parper") {
    document.getElementById("answers").type = "text";
  }
  else {
    document.getElementById("answers").type = "number";
  }
}

//LOCAL STORAGE FETCHER
function fetch(key) {
  if (localStorage.getItem(key) == null) {
    localStorage.setItem(key, 0);
  }
  return localStorage.getItem(key);
}

//LOCAL STORAGE SAVER
function save(key, toSave) {
  localStorage.setItem(key, toSave);
}

//IF QUESTIONTYPE = SEQUENCE
function setSequence() {
  random(2);
  if (number == 0) {
    sequenceType = "Arithmetic";
  } else if (number == 1) {
    sequenceType = "Geometric";
  }

  random(2);
  if (number == 0) {
    sequenceQuestionType = "find-ratio";
  } else if (number == 1) {
    sequenceQuestionType = "find-term";
  }

  if (sequenceType == "Arithmetic") {
    random(1000);
    ratio = number + 1;
    random(1000);
    term1 = number;

    random(4);
    if (number == 1) {
      ratio = ratio * -1;
    } else if (number == 2) {
      ratio = ratio * -1;
      if (term1 != 0) {
        term1 = term1 * -1;
      }
    } else if (number == 3) {
      if (term1 != 0) {
        term1 = term1 * -1;
      }
    }

    term2 = term1 + ratio;
    term3 = term2 + ratio;
    term4 = term3 + ratio;
    term5 = term4 + ratio;
    term6 = term5 + ratio;

  } else if (sequenceType == "Geometric") {
    random(8);
    ratio = number + 1;
    random(12);
    term1 = number + 1;

    random(4);
    if (number == 1) {
      ratio = ratio * -1;
    } else if (number == 2) {
      ratio = ratio * -1;
      term1 = term1 * -1;
    } else if (number == 3) {
      term1 = term1 * -1;
    }

    term2 = term1 * ratio;
    term3 = term2 * ratio;
    term4 = term3 * ratio;
    term5 = term4 * ratio;
    term6 = term5 * ratio;
  }

  if (sequenceQuestionType == "find-ratio") {
    correctAnswer = ratio;
    if (sequenceType == "Arithmetic") {
      document.getElementById("questionText1").innerHTML = "Find the common difference.";
    } else if (sequenceType == "Geometric") {
      document.getElementById("questionText1").innerHTML = "Find the common ratio.";
    }
  } else if (sequenceQuestionType == "find-term") {
    if (sequenceType == "Arithmetic") {
      random(7);
      termNumber = number + 7;
      correctAnswer = term1 + (termNumber - 1) * ratio;
    } else if (sequenceType == "Geometric") {
      random(4);
      termNumber = number + 7;
      correctAnswer = term1 * Math.pow(ratio, (termNumber - 1));
    }
    document.getElementById("questionText1").innerHTML = "Find the " + termNumber + "th term.";
  }

  finalSequence = term1 + ", " + term2 + ", " + term3 + ", " + term4 + ", " + term5 + ", " + term6;


  document.getElementById("questionType").innerHTML = "Question Type: " + questionType;
  document.getElementById("typeType").innerHTML = "Sequence Type: " + sequenceType;
  document.getElementById("questionText2").innerHTML = finalSequence;

  console.log(questionType);
  console.log(sequenceType);
  console.log(sequenceQuestionType);
  console.log(ratio);
  console.log(term1);
  console.log(finalSequence);
  if (sequenceQuestionType == "find-term") {
    console.log(termNumber);
  }
  console.log(correctAnswer);
}

//IF QUESTIONTYPE = SLOPE
function setSlope() {
  document.getElementById("questionType").innerHTML = "Question Type: Linear Equation";

  random(100);
  intercept = number;
  random(21);
  slope = number + 2;

  random(2);
  if (number == 1) {
    slopeQuestionType = "identify-y-inter";
    document.getElementById("typeType").innerHTML = "Identifying: Intercept";
    document.getElementById("questionText1").innerHTML = "Find the y-intercept.";
    correctAnswer = intercept;
  } else if (number == 0) {
    slopeQuestionType = "identify-slope";
    document.getElementById("typeType").innerHTML = "Identifying: Slope";
    document.getElementById("questionText1").innerHTML = "Find the slope.";
    correctAnswer = slope;
  }

  equation = "y = " + slope + "x";
  if (intercept != 0) {
    equation += " + " + intercept;
  }

  document.getElementById("questionText2").innerHTML = equation;

  console.log(questionType);
  console.log(slopeQuestionType);
  console.log(correctAnswer);
  console.log(equation);
}

//IF QUESTIONTYPE = EXPGD
function setExpGD() {
  document.getElementById("questionType").innerHTML = "Question Type: Exponential Equation";
  document.getElementById("typeType").innerHTML = "Identify: Growth/Decay";
  document.getElementById("questionText1").innerHTML = "Case Sensitive; Use: 'Decay', 'Growth', 'Neither' ";
  
  random(10000000);
  start = number + 1;
  random(200);
  percent = (number + 1)/100;

  if (percent < 1) {
    correctAnswer = "Decay";
  } else if (percent == 1) {
    correctAnswer = "Neither";
  } else if (percent > 1) {
    correctAnswer = "Growth";
  }

  equation = start + "(" + percent + ")<sup>x</sup>";
  document.getElementById("questionText2").innerHTML = equation;

  console.log(questionType);
  console.log(start);
  console.log(percent);
  console.log(equation);
}

//IF QUESTIONTYPE = EXPL
function setExpL() {
  document.getElementById("questionType").innerHTML = "Laws of Exponents";
  document.getElementById("questionText1").innerHTML = "What will the exponent of x be, when simplified (No Denominator)?";

  random(4);
  if (number == 0) {
    rule = "Product";
    random(30);
    power1 = number;
    random(30);
    power2 = number;
    correctAnswer = power1 + power2;
    equation = "x<sup>" + power1 + "</sup> * x<sup>" + power2 + "</sup>";
  } else if (number == 1) {
    rule = "Quotient";
    random(30);
    power1 = number;
    random(30);
    power2 = number;
    correctAnswer = power1 - power2;
    equation = "x<sup>" + power1 + "</sup> / x<sup>" + power2 + "</sup>";
  } else if (number == 2) {
    rule = "Power";
    random(12);
    power1 = number + 1;
    random(12);
    power2 = number + 1;
    correctAnswer = power1 * power2;
    equation = "(x<sup>" + power1 + "</sup>)<sup>" + power2 + "</sup>";
  } else if (number == 3) {
    rule = "Zero";
    correctAnswer = 1;
    equation = "x<sup>0</sup>";
    document.getElementById("questionText1").innerHTML = "What number does this simplify to?";
  }
  document.getElementById("questionText2").innerHTML = equation;
  document.getElementById("typeType").innerHTML = "Law: " + rule;

  console.log(correctAnswer);
  console.log(questionType);
  console.log(rule);
  console.log(equation);
}

//IF QUESTIONTYPE = PARPER
function setParper() {
  document.getElementById("questionType").innerHTML = "Question Type: Types of Lines";
  document.getElementById("typeType").innerHTML = "Identify: Parallel/Perpendicular";
  document.getElementById("questionText1").innerHTML = "Case Sensitive; Use: 'Parallel', 'Perpendicular', 'Neither'";

  random(15);
  intercept1 = number + 1;
  random(15);
  intercept2 = number + 17;

  random(3);
  if (number == 0) {
    correctAnswer = "Parallel";
    random(15);
    slope1 = number + 1;
    slope2 = number + 1;
  } else if (number == 1) {
    correctAnswer = "Perpendicular";
    random(15);
    slope1 = number + 1;
    slope2 = number + 1;
  } else {
    correctAnswer = "Neither";
    random(5);
    slope1 = number + 1;
    random(5);
    slope2 = number + 7;
  }
  equation1 = "y = " + slope1 + "x + " + intercept1;
  if (correctAnswer != "Perpendicular") {
    equation2 = "y = " + slope2 + "x + " + intercept2;
  } else {
    equation2 = "y = -x/" + slope2 + " + " + intercept2;
  }
  document.getElementById("questionText2").innerHTML = equation1 + "<br>" + equation2;
}

//ON ANSWER SUBMISSION
function check() {
  document.getElementById("submit").remove();
  submittedAnswer = document.getElementById("answers").value;
  if (submittedAnswer == correctAnswer) {
    document.getElementById("feedback").innerHTML = "Correct! <br> <h2 class='button' onclick='nextQuestion()'>Next Question</h2><br>";
    if (questionType == "Sequences") {
      if (sequenceType == "Arithmetic") {
        ariSeqCorrect = Number(ariSeqCorrect) + 1;
      } else if (sequenceType == "Geometric") {
        geoSeqCorrect = Number(geoSeqCorrect) + 1;
      }
    } else if (questionType == "Linear Slope") {
      if (slopeQuestionType == "identify-y-inter") {
        interceptCorrect = Number(interceptCorrect) + 1;
      } else if (slopeQuestionType == "identify-slope") {
        slopeCorrect = Number(slopeCorrect) + 1;
      }
    } else if (questionType == "Exponential Growth/Decay") {
      expCorrect = Number(expCorrect) + 1;
    } else if (questionType == "Exponent Laws") {
      if (rule == "Product") {
        prodCorrect = Number(prodCorrect) + 1;
      } else if (rule == "Power") {
        powCorrect = Number(powCorrect) + 1;
      } else if (rule == "Quotient") {
        quoCorrect = Number(quoCorrect) + 1;
      } else if (rule == "Zero") {
        zeroCorrect = Number(zeroCorrect) + 1;
      }
    } else if (questionType == "parper") {
      parCorrect = Number(parCorrect) + 1;
    }
  } else {
    document.getElementById("feedback").innerHTML = "Incorrect (Answer was " + correctAnswer + ")! <br><h2 class='button' onclick='nextQuestion()'>Next Question</h2><br>";
  }
  if (questionType == "Sequences") {
    if (sequenceType == "Arithmetic") {
      ariSeqTotal = Number(ariSeqTotal) + 1;
    } else if (sequenceType == "Geometric") {
      geoSeqTotal = Number(geoSeqTotal) + 1;
    }
  } else if (questionType == "Linear Slope") {
    if (slopeQuestionType == "identify-y-inter") {
      interceptTotal = Number(interceptTotal) + 1;
    } else if (slopeQuestionType == "identify-slope") {
      slopeTotal = Number(slopeTotal) + 1;
    }
  } else if (questionType == "Exponential Growth/Decay") {
    expTotal = Number(expTotal) + 1;
  } else if (questionType == "Exponent Laws") {
    if (rule == "Product") {
      prodTotal = Number(prodTotal) + 1;
    } else if (rule == "Power") {
      powTotal = Number(powTotal) + 1;
    } else if (rule == "Quotient") {
      quoTotal = Number(quoTotal) + 1;
    } else if (rule == "Zero") {
      zeroTotal = Number(zeroTotal) + 1;
    }
  } else if (questionType == "parper") {
    parTotal = Number(parTotal) + 1;
  }
  reloadDatabase();
  updateStats();
}


//WHEN DONE COMPLAINING ABOUT INCORRECT
function nextQuestion() {
  document.getElementById("feedback").innerHTML = "<h2 class='button' id='submit' onclick='check()'>Check</h2> <br>";
  document.getElementById("answers").value = "";
  randomDeterminer();
}

//GET SCORES
function update() {
  ariSeqCorrect = fetch("ariSeqCorrect");
  ariSeqTotal = fetch("ariSeqTotal");
  geoSeqCorrect = fetch("geoSeqCorrect");
  geoSeqTotal = fetch("geoSeqTotal");

  slopeTotal = fetch("slopeTotal");
  slopeCorrect = fetch("slopeCorrect");
  interceptTotal = fetch("interceptTotal");
  interceptCorrect = fetch("interceptCorrect");

  expCorrect = fetch("expCorrect");
  expTotal = fetch("expTotal");

  powCorrect = fetch("powCorrect");
  quoCorrect = fetch("quoCorrect");
  prodCorrect = fetch("prodCorrect");
  zeroCorrect = fetch("zeroCorrect");
  powTotal = fetch("powTotal");
  quoTotal = fetch("quoTotal");
  prodTotal = fetch("prodTotal");
  zeroTotal = fetch("zeroTotal");

  parCorrect = fetch("parCorrect");
  parTotal = fetch("parTotal");

  console.log("AriSeq: " + ariSeqCorrect + "/" + ariSeqTotal);
  console.log("GeoSeq: " + geoSeqCorrect + "/" + geoSeqTotal);
  console.log("Slope: " + slopeCorrect + "/" + slopeTotal);
  console.log("Inter: " + interceptCorrect + "/" + interceptTotal);
  console.log("Exp: " + expCorrect + "/" + expTotal);
  console.log("Prod:" + prodCorrect + "/" + prodTotal);
  console.log("Quo:" + quoCorrect + "/" + quoTotal);
  console.log("Pow:" + powCorrect + "/" + powTotal);
  console.log("Zero:" + zeroCorrect + "/" + zeroTotal);

  console.log("Par/Per:" + parCorrect + "/" + parTotal);
}

//SAVE DATA
function reloadDatabase() {
  save("ariSeqCorrect", ariSeqCorrect);
  save("geoSeqCorrect", geoSeqCorrect);
  save("ariSeqTotal", ariSeqTotal);
  save("geoSeqTotal", geoSeqTotal);

  save("interceptTotal", interceptTotal);
  save("interceptCorrect", interceptCorrect);
  save("slopeTotal", slopeTotal);
  save("slopeCorrect", slopeCorrect);

  save("expCorrect", expCorrect);
  save("expTotal", expTotal);

  save("prodCorrect", prodCorrect);
  save("quoCorrect", quoCorrect);
  save("powCorrect", powCorrect);
  save("zeroCorrect", zeroCorrect);
  save("prodTotal", prodTotal);
  save("quoTotal", quoTotal);
  save("powTotal", powTotal);
  save("zeroTotal", zeroTotal);

  save("parCorrect", parCorrect);
  save("parTotal", parTotal);
}

//UPDATE STAT BOARD
function updateStats() {
  document.getElementById("aS").innerHTML = "Arithmetic: " + ariSeqCorrect + "/" + ariSeqTotal + " or " + (ariSeqCorrect*100/ariSeqTotal) + "%";
  document.getElementById("gS").innerHTML = "Geometric: " + geoSeqCorrect + "/" + geoSeqTotal + " or " + (geoSeqCorrect*100/geoSeqTotal) + "%";
  document.getElementById("sL").innerHTML = "Slope: " + slopeCorrect + "/" + slopeTotal + " or " + (slopeCorrect*100/slopeTotal) + "%";
  document.getElementById("yL").innerHTML = "Y-Intercept: " + interceptCorrect + "/" + interceptTotal + " or " + (interceptCorrect*100/interceptTotal) + "%";
  document.getElementById("gdE").innerHTML = "Growth/Decay: " + expCorrect + "/" + expTotal + " or " + (expCorrect*100/expTotal) + "%";
  document.getElementById("Power").innerHTML = "Power Rule: " + powCorrect + "/" + powTotal + " or " + (powCorrect*100/powTotal) + "%";
  document.getElementById("Product").innerHTML = "Product Rule: " + prodCorrect + "/" + prodTotal + " or " + (prodCorrect*100/prodTotal) + "%";
  document.getElementById("Zero").innerHTML = "Quotient Rule: " + zeroCorrect + "/" + zeroTotal + " or " + (zeroCorrect*100/zeroTotal) + "%";
  document.getElementById("Quotient").innerHTML = "Zero Rule: " + quoCorrect + "/" + quoTotal + " or " + (quoCorrect*100/quoTotal) + "%";
  document.getElementById("parper").innerHTML = "Parallel/Perpendicular: " + parCorrect + "/" + parTotal + " or " + (parCorrect*100/parTotal) + "%";
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
  if (e.keyCode == 13) {
    if (document.getElementById("feedback").innerHTML = "<h2 class='button' id='submit' onclick='check()'>Check</h2> <br>") {
      check();
    }
  }
}
