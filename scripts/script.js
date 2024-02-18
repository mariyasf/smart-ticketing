let totalPrice = 0;
const maxSelectedButtons = 4;
let selectedButtons = 0;

const buttons = document.querySelectorAll('#seatButtonsContainer .btn');

for (const button of buttons) {
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
            totalBookedSeat('totalBookedSeat', selectedButtons);
        }
    });
}


