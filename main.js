let cart = document.querySelector('#number-cart')
let number_cart = 0

let buttom_cart = document.querySelector('.adicionar-carrinho')

buttom_cart.addEventListener('click', () =>{
    number_cart++
    cart.innerHTML = number_cart
})