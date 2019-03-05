function handleStartButton(){

$(".startPage").on("click", ".b1", function() {

$(this).closest("div").detach();

renderQuestion();

showCounts();

} )

}

function handleSubmit(){

$('.jsQuestions').submit(event => {

event.preventDefault();

let selected = $('input:checked').val();

if (selected === Answers[questionNum]){

renderAnswerCorrect();

incrementScore();

} else {

renderAnswerIncorrect();

}

renderCounts();

}

)


}


function handleNextQ(){

$('.jsQuestions').on("click", ".b3", function(){

renderCounts();

if (questionNum === 9) {

createResults();

showCounts();

} else {

incrementQ();

renderCounts();

renderQuestion();

}

})

}

function handleRestart(){

$('.jsQuestions').on("click", ".b4", function(event){

document.location.reload();

})

}

function incrementQ(){

questionNum ++;

}


function incrementScore(){

score ++;

}


function showCounts(){$('ul.scores').toggleClass("hidden");}


function createResults(){

$('.jsQuestions').html(resultGen(score)); 

}


function renderCounts(){

$(".qNo").text(`Question: ${questionNum+1}/10`);

$(".sNo").text(`Correct Answers: ${score}`);

}


function renderAnswerCorrect(){

$('.jsQuestions').html(CorrectGen(questionNum));

};


function renderAnswerIncorrect(){

$('.jsQuestions').html(IncorrectGen(questionNum))};


function renderQuestion(){

$('.jsQuestions').html(Qgen(questionNum));

}


function initialize(){

handleStartButton();

handleSubmit();

handleNextQ();

renderCounts();

handleRestart();

}

$(initialize);

