const questions = [
    {
      question: "Qual é a capital do Brasil?",
      choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "Qual é a capital da Argentina?",
      choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
      answer: "Buenos Aires",
    },
    {
      question: "Qual é a capital da França?",
      choices: ["Roma", "Madri", "Paris", "Londres"],
      answer: "Paris",
    },
    {
      question: "Qual é a capital da Espanha?",
      choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
      answer: "Madri",
    },
    {
      question: "Qual é a capital da Itália?",
      choices: ["Veneza", "Milão", "Roma", "Nápoles"],
      answer: "Roma",
    },
    {
      question: "Qual é a capital do Canadá?",
      choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "Qual é a capital dos Estados Unidos?",
      choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
      answer: "Washington D.C.",
    },
    {
      question: "Qual é a capital do Reino Unido?",
      choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
      answer: "Londres",
    },
  ];
  
  const questionElement = document.getElementById("question");
  const choiceElements = Array.from(document.getElementsByClassName("choice"));
  const nextButton = document.getElementById("next");
  const scoreElement = document.getElementById("score");
  const wrongElement = document.getElementById("wrong");

  let currentQuestion = 0; //salvar qual pergunta estou
  let score = 0;
  let wrong = 0;
  let answerChosen = false; // Marcar se a pergunta ja foi respondida para irmos para proxima

  function loadQuestion(){
    const currentQuestionData = questions[currentQuestion];
  questionElement.innerText = currentQuestionData.question;


  const choices = shuffleArray(currentQuestionData.choices);

    //Para percorrer as questões e jogas nos botões
    for(let i = 0; i < choiceElements.length; i++) {
        choiceElements[i].innerText = choices[i];
    }
answerChosen = false;

  }

  //reordenar escolhas

  function shuffleArray(array){
    //Vai embaralhar as respostas
    let currentIndex = array.length,
     temporaryValue,
     randomIndex;
    
    while( 0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

    
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  // Função de escolher uma resposta

  function checkAnswer(e){
    //indentificar o texto do botão para ver se é a resposta correta

    if(answerChosen) return; //se a pergunta já foi escolhida retorna

    answerChosen = true; //se não foi escolhida agora ela vai ser

    if (e.target.innerText === questions[currentQuestion].answer) {// se o evento corresponde ao valor do botao
      
      score++; // aumenta o score
       scoreElement.innerText = "Pontuação: " + score; // atualizar o texto do score
       
       alert("Correto!") //alerta na pagina do navegador :D
    
      } else {
      wrong++
      
      wrongElement.innerText = "Erros: " + wrong; // atualizar o texto dos erros
      alert( "Errado! A resposta correta é " + questions[currentQuestion].answer + "."); //alerta na pagina do navegador e mostra a resposta correta :D

    }
    }


    // Colocando choice elements no evento

    choiceElements.forEach((btn) => {
      btn.addEventListener("click", checkAnswer)

    });

    //Funcionalidade de avançar nas perguntas

    nextButton.addEventListener("click", () => {
      //Verifica se a pergunta não foi escolhida
      if(!answerChosen) {
        alert("Por favor, responda a pergunta!");
        return
      }
      
      //Caso for respondida
      currentQuestion++;
      //E caso ainda tenha mais perguntas, carregar a proxima
      if(currentQuestion < questions.length){
        loadQuestion();
} else{
  //Caso for o fim do quiz

  alert(
    "Fim do Quiz! Você acertou " +
      score +
      " de " +
      questions.length +
      " perguntas."
  );
  restartQuiz();
}
});

 // reiniciar o quiz
 function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = "Pontuação: 0";
  wrongElement.innerText = "Erros: 0";
  loadQuestion(); // Carrega a primeira pergunta novamente

}


  loadQuestion();