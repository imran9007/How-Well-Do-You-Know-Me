ReadLinesync = require('readline-sync');
var score = 0;

var highscores = [
  {
    name: 'faizan',
    score: '5',
  },
  {
    name: 'muskan',
    score: '4',
  },
]

var Questions = [
  {
    question: 'Where Do I Live? ',
    answer: 'Kolkata',
  },
  {
    question: 'Where Do I Work? ',
    answer: 'Infotech',
  },
  {
    question: 'Whats My Favourite Food? ',
    answer: 'Biryani',
  },
  {
    question: 'Whats My Favourite Game? ',
    answer: 'Football',
  },
  {
    question: 'Who Is My Sports Idol? ',
    answer: 'Lionel Messi',
  },
  {
    question: 'Do I Know Swimming? ',
    answer: 'No',
  },
  {
    question: 'Have I Ever Been To Outside India? ',
    answer: 'No',
  },
  {
    question: 'Which Phone I am Using Now? ',
    answer: 'Poco M3',
  },
]

function welcome() {
  var UserName = ReadLinesync.question('May I Know Your Name? ');
  console.log('Welcome', UserName, 'Do You Know Md Imran?');
  console.log('Well I Have Few Questions, Answer Them To Show How Well You Know Me')
}


function play(question, answer) {
  var UserAnswer = ReadLinesync.question(question);


  if (UserAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log('You Are Right');
    score = score + 1
  } else {
    console.log('You Are Wrong');
    score = score - 1
  }
  console.log('Current Score Is', score);
  console.log('----------------------');
}

function game() {
  for (i = 0; i < Questions.length; i++) {
    var CurrentQuestions = Questions[i];
    play(CurrentQuestions.question, CurrentQuestions.answer)
  }
}

function showscores() {
  console.log('YAY! You Scored', score);
  console.log('Check Out The High Score, If You Think Your Name Should Be There Then Ping Me');
  highscores.map(score => console.log(score.name, ':', score.score));
}


welcome()
game()
showscores()