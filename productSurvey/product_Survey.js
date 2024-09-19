function submitFeedback(){
    // Retrieve values from the input fields
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;

    // Display the retrieved data in the HTML
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // Make the user information section visible
    document.getElementById('userInfo').style.display = 'block';

    // Alert after feedback submission
    alert('Thank you for your valuable feedback');
}

// Button click event listener
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Add event listener for 'Enter' key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
