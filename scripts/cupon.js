
const applyCuponBTN = document.getElementById('applyBtn');

applyCuponBTN.addEventListener('click', function () {
    const cuponInput = document.getElementById('cuponInputField')
    const cuponValue = cuponInput.value.split(" ").join("").toUpperCase();
    // console.log(cuponValue);

    // NEW15 || Couple20
    if (selectedButtons == maxSelectedButtons) {
        if (cuponValue === "NEW15") {
            const discountTotal = totalPrice * .15;
            const grandTotal = totalPrice - discountTotal;
            updatePrice('totalGrandPrice', grandTotal);

            hideCuponSection();
            discount(discountTotal, 15);

        }
        else if (cuponValue === "COUPLE20") {
            const discountTotal = totalPrice * .20;
            const grandTotal = totalPrice - discountTotal;
            updatePrice('totalGrandPrice', grandTotal);
            hideCuponSection();
            discount(discountTotal, 20);
        }
        else {
            alert('Invalid Cupon');
        }
    }
    else {
        alert('You need to booked at least 4 seats');
    }
})


