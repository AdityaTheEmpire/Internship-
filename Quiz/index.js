const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionE1 = document.getElementById("question");

questionE1.innerText = `what is ${num1} multipled by ${num2}?`;

const inputE1 = document.getElementById("form");
const formE1 = document.getElementById("form");

const correctAns = num1 * num2;

const scoreE1 = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score =0;
}

formE1.addEventListener("submit", () => {
  const userAns = +inputE1.value;

  if (userAns === correctAns) {
    score++;
    updateLocalStorage()
  }
  else{
    score--;
    updateLocalStorage()
  }
});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}

scoreE1.innerText = `score: ${score}`;