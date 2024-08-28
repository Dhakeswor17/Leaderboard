// Select elements
const main = document.getElementById('main');
const addButton = document.getElementById('add');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const countryInput = document.getElementById('country');
const scoreInput = document.getElementById('score');
const fieldError = document.getElementById('field');

// Function to add a player to the leaderboard
function addPlayer() {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const country = countryInput.value.trim();
    const score = scoreInput.value.trim();
    

    // Check if all fields are filled
    if (!firstName || !lastName || !country || !score) {
        fieldError.style.display = 'block';
        setTimeout(() => {
            fieldError.style.display = 'none';
        }, 3000);
        return;
    }

    // Create player card
    const playerCard = document.createElement('div');
    playerCard.className = 'player-card';

    const playerInfo = document.createElement('div');
    playerInfo.className = 'player-info';
    playerInfo.innerHTML = `<strong>${firstName} ${lastName}</strong> (${country}) - Score: <span class="player-score">${score}</span>`;

    const scoreControls = document.createElement('div');
    scoreControls.className = 'score-controls';
    const increaseButton = document.createElement('button');
    increaseButton.textContent = '+5';
    const decreaseButton = document.createElement('button');
    decreaseButton.textContent = '-5';

    increaseButton.onclick = () => updateScore(playerInfo, 5);
    decreaseButton.onclick = () => updateScore(playerInfo, -5);

    scoreControls.appendChild(increaseButton);
    scoreControls.appendChild(decreaseButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.innerHTML = '🗑️'; // Unicode trash icon
    deleteButton.onclick = () => main.removeChild(playerCard);

    playerCard.appendChild(playerInfo);
    playerCard.appendChild(scoreControls);
    playerCard.appendChild(deleteButton);

    main.appendChild(playerCard);

    // Clear input fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    countryInput.value = '';
    scoreInput.value = '';
}

// Function to update the player's score
function updateScore(playerInfo, value) {
    const scoreSpan = playerInfo.querySelector('.player-score');
    let currentScore = parseInt(scoreSpan.textContent, 10);
    currentScore += value;
    scoreSpan.textContent = currentScore;
}

// Event listener for the "Add Player" button
addButton.addEventListener('click', addPlayer);
