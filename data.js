let questionNum=0;

let score=0;

const Qs=[

{

text: `What is the easiest way to distinguish an ape from a monkey?`,

ans: [

`Apes are larger than monkeys.`, 

`Monkeys have prehensile tails.`,

`Apes do not have tails.`,

`Monkeys live in trees.`

],

moreInfo: `Cladistically, apes are monkeys, so in order make a distinction, one must specify features not found in other monkeys.`

},

{

text:`Which of these is NOT an ape?`,

ans:[

`Danny Devito`,

`An angry baboon`,

`A sleepy bonobo`,

`An orangutan wearing a hat`

],

moreInfo: "Humans are apes! Also baboons have tails.",

},

{

text:`Lesser apes is is another name for...`,

ans:[

`Chimpanzees and gorillas`,

`Mandrills`,

`Gibbons`,

`Orangutans`

],

moreInfo: 'Considerably smaller and slighter than other apes gibbons fit this description well.'

},

{

text: `Most apes are found in...`,

ans:[

`Africa`,

`Asia`,

`South America`,

`Antarctica`

],

moreInfo: 'Since humans vastly outnumber other species of ape, and more than half of all humans live in Asia, it follows that most apes are found in Asia.'

},

{

text: `Most species of ape are found...` , 

ans:[

`in Africa`,

`in Asia`,

`in South America`,

`in North America`

],

moreInfo: 'There are quite a few species of gibbon, all of which live in Asia.'

},

{

text: `What is the name of the largest species of ape?`,

ans: [

`Eastern Gorilla`,

`Western Gorilla`,

`Bornean Orangutan`,

`Sumatran Orangutan`

],

moreInfo: 'A full-grown adult male Eastern gorilla typically weighs 140–205.5 kg (309–453 lb) and stands 1.7 m (5.6 ft) upright.'

},

{

text: `How many species of Gibbon are there?`,

ans: [

`7`,

`22`,

`13`,

`18`,

],

moreInfo: 'The number increased rather recently with the discovery of the species that is the answer to the next question.',

},

{

text: `Which of these characters has a species of gibbon named after them?`,

ans: [

`Captain Crunch`,

`Indiana Jones`,

`Gimli`,

`Luke Skywalker`

],

moreInfo: 'The Skywalker hoolock gibbon is named after Luke Skywalker from the Star Wars franchise, as the scientists who described it are fans of the franchise.',

},

{

text: `How many families of ape are there?`,

ans: [

`2`,

`3`,

`4`,

`5`

],

moreInfo: 'All great apes belong to the same family,Hominidae and all gibbons belong to the other, Hylobatidae. Together they make up the superfamily Hominoidea'

},

{

text: `What is the greatest danger to apes?`,

ans: [

`Falling from trees`,

`Low fruit abundance`,

`Climate change`,

`Other apes`

],

moreInfo: 'Habitat destruction, poaching, and human-born disease are the greatest threats to wild ape popluations.'

},


];

const Answers= ['2','1','2','1','1','0','3','3','0','3'];


function Qgen(qustionNum){

return `

<form>

<fieldset>

<legend>${Qs[questionNum].text}</legend>

<label>

<input type="radio" name="answer" required value=0><span>${Qs[questionNum].ans[0]}</span></input>

</label>

<label>

<input type="radio" name="answer" required value=1><span>${Qs[questionNum].ans[1]}</span></input>

</label>

<label>

<input type="radio" name="answer" required value=2><span>${Qs[questionNum].ans[2]}</span></input>

</label>

<label>

<input type="radio" name="answer" required value=3><span>${Qs[questionNum].ans[3]}</span></input>

</label>

<button class="b2"

type="submit"><span>Submit</span></button>

</fieldset>

</form>` 

;}; 

function CorrectGen(questionNum){ 

return `<div class="answerPage">

<h1>Correct!</h1>

<h2>${Qs[questionNum].moreInfo}</h2>

<button type="submit" class="b3"><span>Continue</span></button>

</div>`;};


function IncorrectGen(questionNum){

return `<div class="answerPage">

<h1>The correct answer was:<br>${Qs[questionNum].ans[Answers[questionNum]]}</h1>

<h2>${Qs[questionNum].moreInfo}</h2>

<button type="submit" class="b3"><span>Continue</span></button>

</div>`;};


function resultGen(score){

if (score === 10) {

return `<h1>

Congratulations! You answered each question correctly!</h1>

<h2>Your knowledge of primatology is truely impressive!</h2>

<button type="submit" class="b4"<span>Try Again</span></button>`;

}

else if (score > 7 && score < 10) {

return `<h1>

Nicely done! You answered ${score} questions correctly!</h1>

<h2>With a little work, you'll surely be able to get them all next time!</h2>

<button type="submit" class="b4"<span>Try Again</span></button>`;

}

else if (score > 5 && score < 8 ) {

return `<h1>

Solid effort. You answered ${score} questions correctly.</h1>

<h2>Hopefully you had fun and maybe even learned something.</h2>

<button type="submit" class="b4"<span>Try Again</span></button>`;

}

else {

return `<h1>Well, you got ${score} questions correct.</h1>

<h2>Perhaps its time to cut out the monkey business</h2>

<button type="submit" class="b4"<span>Try Again</span></button>`;

};

}

