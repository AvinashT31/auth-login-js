function addTheProduct(event){

    event.preventDefault();
    // alert("working");

    var productName = document.getElementById("proName").value;
    var productImage = document.getElementById("proImage").value;
    var productPrice = document.getElementById("proPrice").value;

    var Data = {name:productName, image:productImage, price: productPrice}
    console.log(Data, "Data");

    var dataFromLS = JSON.parse(localStorage.getItem("productInfo"))|| []
    dataFromLS.push(Data);
    console.log(dataFromLS, "dataFromLS");

    localStorage.setItem("productInfo", JSON.stringify(dataFromLS));
    document.getElementById("proName").value = '';
    document.getElementById("proImage").value = '';
    document.getElementById("proPrice").value = '';
    alert("product added successfully");

    

}