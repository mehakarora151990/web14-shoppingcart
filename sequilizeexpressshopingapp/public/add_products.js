$(function(){

    let productName = $('#productName')
    let productManufacturer = $('#productManufacturer')
    let productPrice = $('#productPrice')

    $("#btnProductAdd").click(function(){
        addProduct(
            productName.val(),
            productManufacturer.val(),
            productPrice.val(),
            function (addsProduct){
            window.alert("added"+addsProduct.name+"to database");
            }

        )
    })
})