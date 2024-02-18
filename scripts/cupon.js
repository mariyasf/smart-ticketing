
const applyCuponBTN = document.getElementById('applyBtn');

applyCuponBTN.addEventListener('click', function () {
    const cuponInput = document.getElementById('cuponInputField')
    const cuponValue = cuponInput.value;
    console.log(cuponValue);

    // NEW15 || Couple20
    if (selectedButtons == maxSelectedButtons) {
        if (cuponValue === "NEW15") {
            const grandTotal = totalPrice - (totalPrice * .15);
            updatePrice('totalGrandPrice', grandTotal);

            hideCuponSection();
            discount(15);

        }
        else if (cuponValue === "Couple20") {
            const grandTotal = totalPrice - (totalPrice * .20);
            updatePrice('totalGrandPrice', grandTotal);
            hideCuponSection();
            discount(20);
        }
        else {
            alert('Invalid Cupon');
        }
    }
    else {
        alert('You need to booked at least 4 seats');
    }
})


