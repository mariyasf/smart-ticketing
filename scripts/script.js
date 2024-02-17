const applyButton = document.querySelector('.apply');
const priceElement = document.querySelector('#price');

applyButton.addEventListener('click', () => {
    const selectedClass = document.querySelector('select.class').value;
    let price = 550;

    if (selectedClass === 'Business') {
        price = 1100;
    }

    priceElement.innerText = `${price} Taka`;
});