const submitFormButton = document.getElementById('submitForm');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');

submitFormButton.addEventListener('click', submitForm);

function setPopup(message, yesBtnFunction, noBtnFunction) {
  popup.style.display = 'block';
  const popupMessage = document.getElementById('popupMessage');
  popupMessage.innerText = message;
  yesBtn.addEventListener('click', yesBtnFunction);
  noBtn.addEventListener('click', noBtnFunction);
}

function submitForm() {
  const nameInput = document.getElementById('nameInput');
  const nameInputValue = nameInput.value;
  if (nameInputValue === '') {
    setPopup(
      'Are you sure to submit the form with empty name?',
      sendApiRequest,
      closePopup
    );
    return;
  }
  sendApiRequest();
}

function closePopup() {
  popup.style.display = 'none';
}

function sendApiRequest() {
  console.log('API request is sent');
}
