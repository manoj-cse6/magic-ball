function shakeBall() {
  const questionInput = document.getElementById("question");
  const question = questionInput.value.trim();
  const answerBox = document.getElementById("answer");
  const thinkingBox = document.getElementById("thinking");

  // Clear previous answer and show the thinking animation
  answerBox.textContent = "";
  thinkingBox.classList.remove("hidden");

  if (!question) {
    answerBox.textContent = "Please ask a question!";
    thinkingBox.classList.add("hidden");
    return;
  }

  const answers = [
    "Yes", "No", "Maybe", "Ask again later", "Definitely",
    "Not sure", "Absolutely", "Don't count on it", "Very likely",
    "Better not tell you now"
  ];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  // Display answer after a delay
  setTimeout(() => {
    thinkingBox.classList.add("hidden");
    answerBox.textContent = randomAnswer;
  }, 2000);

  // Send the question to Web3Forms
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      access_key: "fd5b1bff-2750-4527-9780-5d1b650ea630", // Replace with your Web3Forms API key
      name: "Magic 8-Ball User", // You can customize this
      email: "your-email@example.com", // Your email address
      message: question
    })
  })
  .then(response => {
    if (response.ok) {
      console.log("Question sent successfully!");
    } else {
      console.error("Failed to send question.");
    }
  })
  .catch(error => console.error("Error:", error));

  // Clear the question input
  questionInput.value = "";
}

