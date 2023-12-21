//function createAndAnimateImage(container, imageUrl) {
//  const image = new Image();
//  image.src = imageUrl;
//  image.style.position = "fixed"; 
//  image.style.width = "35rem";
//  image.style.height = "auto";
//  image.style.filter = "blur(3px)";
//  container.appendChild(image);
//  positionImage(image);
//}
//
//function positionImage(image) {
//  const screenWidth = window.innerWidth;
//  const screenHeight = window.innerHeight;
//
//  // Définissez des positions aléatoires pour chaque image sur l'écran
//  const randomX = Math.floor(Math.random() * (screenWidth - image.width));
//  const randomY = Math.floor(Math.random() * (screenHeight - image.height));
//
//  image.style.left = `${randomX}px`;
//  image.style.top = `${randomY}px`;
//}
//
//document.addEventListener("DOMContentLoaded", function () {
//  const imageContainer = document.getElementById("imageContainer");
//  for (let i = 1; i <= 10; i++) {
//      createAndAnimateImage(imageContainer, "./assets/table.png");
//  }
//});


  // Musique du Site
  const audio = document.getElementById("myAudio");

  function togglePlayPause() {
        if (audio.paused) {
          audio.play();
      console.log("Coucou antoine");
    } else {
          audio.pause();
      console.log("Allô le zok ? tu me reçois ?");
    }
  }

  // Animation des titres
  const titles = [
        'chute',
    'card',
    'semer',
    'acheter',
    'gaspillage',
    'transition',
    'fin',
    'quiz'
  ];

  titles.forEach((title) => {
        document.addEventListener('DOMContentLoaded', function () {
          var elementToAnimate = document.getElementById(`id__${title}`);
      var animationTriggered = false;

      var animeInstance = anime({
            targets: elementToAnimate,
        translateY: [0, -30],
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 800,
        autoplay: false
      });

      document.addEventListener('scroll', function () {
            var position = elementToAnimate.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight && !animationTriggered) {
              animeInstance.play();
          animationTriggered = true;
        }
      });
    });
  });

  // Plateau de Viande
  LottieInteractivity.create({
        player: "#id__plateau",
    mode:"scroll",
    actions: [
          {
            visibility: [0.30, 0.4],
        type: "play"
      }
    ]
  });

  // Pizza 1/4
  LottieInteractivity.create({
        player: "#id__pizza__left",
    mode:"scroll",
    actions: [
          {
            visibility: [0.35, 0.4],
        type: "play"
      }
    ]
  });

  // Pizza 1/3
  LottieInteractivity.create({
        player: "#id__pizza__right",
    mode:"scroll",
    actions: [
          {
            visibility: [0.35, 0.4],
        type: "play"
      }
    ]
  });

  // BD
  LottieInteractivity.create({
        player: "#id__BD",
    mode:"scroll",
    actions: [
          {
            visibility: [0.2, 0.3],
        type: "play"
      }
    ]
  });

  // Balance
  LottieInteractivity.create({
        player: "#id__balance",
    mode:"scroll",
    actions: [
          {
            visibility: [0.35, 0.4],
        type: "play"
      }
    ]
  });

  // Frites
  LottieInteractivity.create({
        player: "#id__frites",
    mode:"scroll",
    actions: [
          {
            visibility: [0.35, 0.45],
        type: "play"
      }
    ]
  });

  // Tartine
  LottieInteractivity.create({
        player: "#id__tartine",
    mode:"scroll",
    actions: [
          {
            visibility: [0.35, 0.45],
        type: "play"
      }
    ]
  });  

// Quiz

const myQuestions = [
  {
    question: "Qu'est-ce que l'alimentation durable ?",
    answers: {
      a: "Un régime strict pour perdre du poids.",
      b: "Un mode d'alimentation qui prend en compte les aspects économiques, sociaux et environnementaux.",
      c: "Un type d'alimentation exclusivement végétalien."
    },
    correctAnswer: 'b'
  },
  {
    question: "Quel critère est pris en compte dans l'alimentation durable pour réduire l'impact environnemental ?",
    answers: {
      a: 'La couleur des aliments.',
      b: 'Le goût des aliments.',
      c: "L'empreinte carbone des aliments."
    },
    correctAnswer: 'c'
  },
  {
    question: "Quelle est la principale recommandation pour favoriser l'alimentation durable au niveau individuel ?",
    answers: {
      a: 'Manger uniquement des aliments transformés.',
      b: "Privilégier les produits locaux, de saison et issus de l'agriculture biologique.",
      c: "Consommer des aliments provenant de l'autre bout du monde."
    },
    correctAnswer: 'b'
  }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
  function showQuestions(questions, quizContainer){
    quizContainer.innerHTML = questions.map((q, i) => `
      <div class="question">${q.question}</div>
      <div class="answers">
        ${Object.entries(q.answers).map(([letter, answer]) => `
          <label>
            <input type="radio" name="question${i}" value="${letter}">
            ${letter}: ${answer}
          </label>
        `).join('')}
      </div>
    `).join('');
  }

  function showResults(questions, quizContainer, resultsContainer){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let userAnswer = '';
    let numCorrect = 0;

    questions.forEach((q, i) => {
      userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;
      if (userAnswer === q.correctAnswer) {
        numCorrect++;
        answerContainers[i].style.color = 'green';
      } else {
        answerContainers[i].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect}/${questions.length}`;
  }

  showQuestions(questions, quizContainer);

  submitButton.onclick = () => showResults(questions, quizContainer, resultsContainer);
}
