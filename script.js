function buttonClick(selectedCoin) {
  let result = flipCoin();
  displayResults(selectedCoin, result);
}

function flipCoin() {
  let randomNumber = Math.floor(Math.random() * 2) + 1;
  if (randomNumber === 1) {
    return "Heads";
  } else {
    return "Tails";
  }
}

function displayResults(selectedCoin, result) {
  let div = document.getElementById("button-container");

  let firstNewNode = document.createElement("p");
  firstNewNode.classList.add("center");
  firstNewNode.setAttribute("id", "user_guess");
  firstNewNode.innerHTML = `You selected ${selectedCoin}!`;
  div.appendChild(firstNewNode);

  let secondNewNode = document.createElement("p");
  secondNewNode.classList.add("center");
  secondNewNode.setAttribute("id", "random_flip");
  secondNewNode.innerHTML = `The coin flips and comes up ${result}.`;
  div.appendChild(secondNewNode);

  let thirdNewNode = document.createElement("p");
  thirdNewNode.classList.add("center");
  thirdNewNode.setAttribute("id", "statement");

  if (selectedCoin === result) {
    thirdNewNode.innerHTML = "Good Guess!";
    div.appendChild(thirdNewNode);
  } else {
    thirdNewNode.innerHTML = "Better luck next time!";
    div.appendChild(thirdNewNode);
  }
}
