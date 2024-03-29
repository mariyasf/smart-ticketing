function totalBookedSeat(id, count) {
    const updateTotalBookedSeat = document.querySelector(`.${id}`);
    updateTotalBookedSeat.innerText = count;
}
function availableSeat(count) {
    const updateAvailableSeat = document.getElementById('availableSeat');
    updateAvailableSeat.innerText = 40 - count;
}

function updatePrice(id, prices) {

    const updatePrice = document.getElementById(id);
    updatePrice.innerText = prices;

    // console.log('Total Price Updated:', prices);
}

function hideCuponSection() {
    const cupon = document.getElementById('cuponSection');
    cupon.classList.add('hidden');
}

function discount(discountAmount, discountPercent) {
    const updateDiscountSection = document.getElementById('discountSection');
    const updateDiscountAmount = document.getElementById('discountAmount');
    const updateDiscountPercent = document.getElementById('discountPercent');

    updateDiscountSection.classList.remove('hidden');
    updateDiscountPercent.innerText = `${discountPercent}%`;
    updateDiscountAmount.innerText = `BDT: ${discountAmount}`;
}