const confirm = document.getElementById('confirmSubmitBtn');
confirm.addEventListener('click', function () {
    const name = document.getElementById('passengerName').value;
    const number = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    if (selectedButtons >= 1 && typeof name === "string" && !isNaN(number) && email) {

        document.getElementById('confirmationModal').checked = true;
    }
    else {
        alert('Please make sure to select at least one seat and provide valid information.');
    }
});