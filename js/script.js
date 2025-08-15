welcomeSpeech();

// Call the function to welcome speech
function welcomeSpeech() {
    let userName = prompt("What is your name?");
    if (userName != '') {
        document.getElementById('user-access').textContent = userName;
    }

}

function sendMessage() {
    let message = document.getElementById('user-message').value;
    if(message != '') {
        alert("Message sent: " + message);
    } else {
        alert("Please enter amessage before sending.");
    }
}