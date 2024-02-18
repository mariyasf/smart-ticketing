let totalPrice = 0;
const maxSelectedButtons = 4;
let selectedButtons = 0;
document.addEventListener("DOMContentLoaded", function () {

    const buttons = document.querySelectorAll('#seatButtonsContainer .btn');



    // Add click event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {

            if (selectedButtons == maxSelectedButtons) {
                document.getElementById('my_modal_6').checked = true;
            }

            if (this.style.backgroundColor === 'green' || this.disabled) {
                return;
            }

            if (selectedButtons < maxSelectedButtons) {

                this.style.backgroundColor = 'green';
                selectedButtons++;
                this.disabled = true;
            }


            const buttonId = this.id;
            console.log("Clicked button with ID: " + buttonId);
            console.log(this.style.backgroundColor);

            if (this.style.backgroundColor === 'green') {
                addTableData(buttonId);
                updatePrice('totalPrice', totalPrice);
                updatePrice('totalGrandPrice', totalPrice);
                availableSeat(selectedButtons);
            }

            // cuppon add

        });
    });
});

function addTableData(buttonId) {
    // Get the table body
    const seatTableBody = document.getElementById('seatTableBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
                    <th>${seatTableBody.children.length + 1}</th>
                    <td>${buttonId}</td>
                    <td>Economy</td>
                    <td>BDT: 550</td>
                `;

    seatTableBody.appendChild(newRow);
    totalPrice += 550;
}

function availableSeat(count) {
    const updateAvailableSeat = document.getElementById('availableSeat');
    updateAvailableSeat.innerText = 40 - count;
}

function updatePrice(id, prices) {

    const updatePrice = document.getElementById(id);
    updatePrice.innerText = prices;

    console.log('Total Price Updated:', prices);
}

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

function hideCuponSection() {

    const cupon = document.getElementById('cuponSection');
    cupon.classList.add('hidden');
}
function discount(discountAmount) {
    const updateDiscountSection = document.getElementById('discountSection');
    const updateDiscountAmount = document.getElementById('discountAmount');

    updateDiscountSection.classList.remove('hidden');
    updateDiscountAmount.innerText = `BDT: ${discountAmount}%`;
}