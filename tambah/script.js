// Pilih semua tombol decrement dan increment
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');

decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value, 10);
        if (value > 1) {
            value--;
            input.value = value;
        }
    });
});


incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value, 10);
        value++;
        input.value = value;
    });
});


const addToCartButton = document.querySelector('.add-to-cart');


addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();

    const quantityInput = document.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value, 10);

    const productName = document.querySelector('.product-name').textContent;


    const productPrice = document.querySelector('.product-price').textContent;

    console.log("Ditambahkan ke keranjang:", {
        name: productName,
        price: productPrice,
        quantity: quantity
    });
});