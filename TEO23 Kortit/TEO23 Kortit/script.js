// Function to handle the card click event
function handleCardClick(event) {
    var target = event.target;
    if (target.tagName === 'A') {
      event.stopPropagation();
    } else {
      var card = target.closest('.card');
      if (nextButtonClicked && !card.classList.contains('selected')) {
        card.classList.toggle('flip');
      } else {
        if (!card.classList.contains('selected')) {
          card.classList.add('selected');
          selectedCards.push(card);
        } else {
          card.classList.remove('selected');
          var index = selectedCards.indexOf(card);
          selectedCards.splice(index, 1);
        }
      }
    }
  }
  
  // Function to handle the next button click event
  function handleNextButtonClick() {
    nextButtonClicked = true;
    flipSelectedCards();
    deleteSelectedCards();
    nextButton.style.display = 'none';
  }
  
  // Function to flip selected cards
  function flipSelectedCards() {
    for (var i = 0; i < selectedCards.length; i++) {
      var card = selectedCards[i];
      card.classList.toggle('flip');
    }
  }
  
  // Function to delete selected cards
  function deleteSelectedCards() {
    // Loop through selectedCards array and remove each card element from the DOM
    for (var i = 0; i < selectedCards.length; i++) {
      var card = selectedCards[i];
      card.parentNode.removeChild(card);
    }
    // Clear selectedCards array
    selectedCards = [];
  }
  
  // Array to store selected cards
  var selectedCards = [];
  var nextButtonClicked = false;
  
  // Add event listeners to cards
  var cards = document.getElementsByClassName('card');
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener('click', handleCardClick);
  }
  
  // Add event listener to the next button
  var nextButton = document.getElementById('nextButton');
  nextButton.addEventListener('click', handleNextButtonClick);

  
  
  document.getElementById('nextButton').addEventListener('click', function() {
    // Hide the texts
    var title = document.querySelector('.title');
    var nextTitle = document.querySelector('.next-title');
    var extraText = document.querySelector('.extra-text');
    title.classList.add('hidden');
    nextTitle.classList.remove('hidden');
    extraText.classList.add('hidden');
  
    flipCards();
    setTimeout(function() {
      deleteCards();
    }, 500);
  });
  
