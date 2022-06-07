var btns = document.querySelectorAll('.btn_addtoCart_js');

btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        var btnItem = e.target
        var product = btnItem.parentElement.parentElement.parentElement
        var productImg = product.querySelector('.product-img').src
        var productPrice = product.querySelector('.price-new').textContent
        var productName = product.querySelector('.product__content-title').textContent
        // console.log(productPrice.textContent,productImg.src,productName.textContent)
        addCart(productImg, productName, productPrice)
        // cartTotal()
    })
});
function addCart(productImg, productName, productPrice) {
    var addtr = document.createElement('tr')
    var trcontent = `
            <tr>
                    <td><img class="img_car" src="${productImg}" alt=""></td>
                    <td><p>${productPrice}</p></td>
                    <td><input class="sl_cart" type="number" value="1" step="1" min="1"></td>
                    <td><button class="btn delete_product">Xóa</button></td>
            </tr>
            
            `
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector('tbody')
    cartTable.append(addtr)
    cartTotal()
    delete_cart()
    input_Change()
};

function cartTotal() {
    var cartItem = document.querySelectorAll('tbody tr')

    var result = 0
    // console.log(cartItem)
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('.sl_cart').value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector('p').innerHTML
        // console.log(productPrice)
        result2 = inputValue * productPrice
        result = result2 + result
        // console.log(result)
        // console.log(tongTien)
    }
    var tongTien = document.querySelector('.tongtien')
    tongTien.innerHTML = result + ' VND'
};

function delete_cart() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var btn_Product = document.querySelectorAll('.delete_product')
        btn_Product[i].addEventListener('click', (e) => {
            var btn_delete = e.target
            var cart_Item_delete = btn_delete.parentElement.parentElement
            cart_Item_delete.remove()
            cartTotal()
            // console.log(cart_Item_delete)
        })
    }
};

function input_Change() {
    var cartItem = document.querySelectorAll('tbody tr')
    for (var i = 0; i < cartItem.length; i++) {
        var input = cartItem[i].querySelector('.sl_cart')
        input.addEventListener('change', (e) => {
            cartTotal()
        })
    }
};