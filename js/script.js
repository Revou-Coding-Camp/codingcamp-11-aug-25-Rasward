// welcomeSpeech();

// Call the function to welcome speech
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-access').textContent = userName;
    }

}

document.getElementById('sendBttn').addEventListener('click', function () {
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById('user-message').value.trim();

    if (!name) return alert("Please enter your name.");
    if (!dob) return alert("Please select your date of birth.");
    if (!gender) return alert("Please select your gender.");
    if (message.length < 10) return alert("Message must be at least 10 characters.");

    alert(`Message sent!\nName: ${name}\nDOB: ${dob}\nGender: ${gender.value}\nMessage: ${message}`);
});

document.addEventListener("DOMContentLoaded", function () {
  const words = ["Collaborate", "Ngoding", "Discuss", "Talk"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const wordElement = document.getElementById("changing-word");

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      wordElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500);
        return;
      }
    } else {
      wordElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }

  typeEffect();
});



