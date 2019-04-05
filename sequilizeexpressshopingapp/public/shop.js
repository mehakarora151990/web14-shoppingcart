function fetchProducts (done){
    $.get('/api/products',function(data){
        done(data)
    })
}

function addProduct (name,manu,price,done){
    $.post('/api/products',{
        name :name,
        manufacturer :manu,
        price: price
    }, function(data){
        done(data)
    })
}

function createProductCard (product){
    return $(`
    <div class="row" id = "product-list">
    <div class="col-8 card mx-2 p-4">
        <h4 class="product-name"> ${product.name} </h4>
        <div class="product-manufacturer">${product.manufacturer}</div>
        <div class="row">
            <div class="col m-3 p-3">
               <b> rs. ${product.price}  </b>
            </div>
                <button class=" col btn btn-primary m-3">Buy</button>
        </div>
    </div>    
    `
    )
}

