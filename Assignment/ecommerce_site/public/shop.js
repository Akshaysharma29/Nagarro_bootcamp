//product fetch and then add
function fetchProducts (done) {
    $.get('/api/products', function (data) {
        done(data)
    })
}

function addProduct (name, manuf, price, done) {
    $.post('/api/products', {
        name: name,
        manufacturer: manuf,
        price: price
    }, function (data) {
        done(data)
    })
}

//user item add
function addusers (name,price, done) {
    $.post('/api/users', {
        name: name,
        price: price,
        //qunatity: quantity
    }, function (data) {
        done(data)
    })
}




function createProductCard (product) {
    return $(`
    <div class="col-4 card mx-2 p-4">
        <h4 class="product-name"><span class ="productname">${product.name}</span></h4>
        <div class="product-manufacturer"><span>${product.manufacturer}</span></div>
        <div class="row">
            <div class="col m-3 p-3 productprice">
                ${product.price}
            </div>
            <button class="col btn btn-primary m-3 adduseritem">Buy</button> 
        </div>
    </div>`
        )
}
