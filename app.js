const quiz = [
  {
    question:'『スラムダンク』インターハイ本選，湘北の1回戦の相手は？',
    answers:[
      '豊玉高校',
      '陵南高校',
      '海南大附属高校',
      '山王工業高校'
    ],
    correct : '豊玉高校'
  }, {
    question:'次のメンバーのうち，桜木の先輩にあたるのは？',
    answers:[
      '石井',
      '佐々岡',
      '桑田',
      '角田'
    ],
    correct : '角田'
  }, {
    question:'桜木の公式戦での総得点は何点？（描写があるシーンに限る）',
    answers:[
      '24点',　
      '35点',
      '43点',
      '52点'
    ],
    correct : '35点'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文，選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    });
  handlerIndex++;
}
