// Decision tree data structure
const decisionTree = [
    {
      question: "Is your device turned on?",
      options: ["Yes", "No"],
      next: [1, 2], // Points to the next steps in the tree
    },
    {
      question: "Check the power cable. Is it plugged in?",
      options: ["Yes", "No"],
      next: [3, 4],
    },
    {
      question: "Please turn on your device.",
      options: [],
      next: [],
      end: true,
    },
    {
      question: "Plug in the power cable and try again.",
      options: [],
      next: [],
      end: true,
    },
    {
      question: "Please ensure the power cable is securely connected and try again.",
      options: [],
      next: [],
      end: true,
    },
  ];
  
  // Function to display current step
  function displayStep(stepIndex) {
    const step = decisionTree[stepIndex];
    const treeContainer = document.getElementById("tree-container");
  
    let htmlContent = `<p>${step.question}</p>`;
    step.options.forEach((option, index) => {
      htmlContent += `<button onclick="nextStep(${step.next[index]})">${option}</button>`;
    });
  
    treeContainer.innerHTML = htmlContent;
    animateButtons();
  }
  
  // Handle the transition to the next step
  function nextStep(nextStepIndex) {
    const feedbackMessage = document.getElementById("feedback-message");
    
    if (nextStepIndex !== undefined) {
      const nextStep = decisionTree[nextStepIndex];
      if (nextStep.end) {
        feedbackMessage.innerHTML = "Thank you for using the Decision Tree!";
        feedbackMessage.style.display = "block";
      } else {
        displayStep(nextStepIndex);
      }
    }
  }
  
  // Add fade-in effect to buttons
  function animateButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.opacity = '1';
      }, index * 100); // Add staggered animation
    });
  }
  
  // Start the decision tree from the first step
  displayStep(0);
  