const quiz = [
  {
    question:'現在（2022年）の世界の人口は？',
    answers:[
      '79億5,400万人',
      '63億4,200万人',
      '32億3,800万人',
      '13億8,500万人'
    ],
    correct:'79億5,400万人'
  },{
    question:'2022年サッカーW杯の開催国は?',
    answers:[
      'ウルグアイ',
      'チリ',
      'メキシコ',
      'カタール'
    ],
    correct:'カタール'
  },{
    question:'2022年3月に現役を引退した体操の内村航平が五輪で獲得した通算メダル数は？',
    answers:[
      '35個',
      '23個',
      '14個',
      '7個'
    ],
    correct:'7個'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義する
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;

    // 上記前$button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    // 問題数がまだあればこちらを実行
    setupQuiz();
  }else{
    // 問題数がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
  }
};


// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}





function checkpage() {
    var ala = document.getElementById("alart");
    var check1 = document.getElementById("first-name1").value;
    var check2 = document.getElementById("first-name2").value;
    var check3 = document.getElementById("last-name1").value;
    var check4 = document.getElementById("last-name2").value;
    var check5 = document.getElementById("a5").value;
    var check6 = document.getElementById("a6").value;
    var check7 = document.getElementById("a7").value;
    var check8 = document.getElementById("a8").value;
    var check9 = document.getElementById("postal-code").value;
    var check10 = document.getElementById("a10").value;
    var check11 = document.getElementById("a11").value;
    var check12 = document.getElementById("a12").value;
    if (
        check1 == "" ||
        check2 == "" ||
        check3 == "" ||
        check4 == "" ||
        check5 == "" ||
        check6 == "" ||
        check7 == "" ||
        check8 == "" ||
        check9 == "" ||
        check10 == "" ||
        check11 == "" ||
        check12 == ""
    ) {
        alert("必要事項を入力してください");
    } else {
      Swal.fire({
        title: 'Sweet!',
        text: '終了!あなたの正解数は' + score + '/' + quizLength + 'です!',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image'
            },
            function (is_comfirm) {
                if (is_comfirm) {
                    //確認しました
                    window.location.href = "./check.html";
                } else {
                    //戻る
                }
            }
        );
    }
}