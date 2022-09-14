/* Precio que se multiplica por la cantidad */
let price = 400000;

/* Capturo el botón que dispara el evento */
let clickTotal = document.getElementById('btn-total');
clickTotal.addEventListener('click', (e) =>{   

    /* Cambio de color del circulo */
    let selectColor = document.getElementById('select-color').value;
    let color = document.getElementById('color');
    color.style.backgroundColor = selectColor;

    /* Input captura cantidad, la multiplica por valor y modifica el DOM en el total y cantidad */
    let inputQuantity = document.getElementById('input-quantity').value;
    let totalQuantity = document.getElementById('total-quantity');
    totalQuantity.innerHTML = inputQuantity;
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = inputQuantity * price;

} 
)
