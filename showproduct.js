window.onload = function () {

    // alert("working");

    var showproduct = document.getElementById("displayproduct")
    console.log(showproduct, "showproduct");

    var dataFromLS = JSON.parse(localStorage.getItem("productInfo"));
    console.log(dataFromLS, "dataFromLS");

    array = []

    for (var i = 0; i < dataFromLS.length; i++) {
        array += `<div><p>${dataFromLS[i].name}</p><img src="${dataFromLS[i].image}"></img><p>${dataFromLS[i].price}</p><button onclick = 'addToCart(${(JSON.stringify(dataFromLS[i]))})'>Add to cart</button></div>`
    }

    showproduct.innerHTML = array;
    console.log(showproduct, "showproduct");
}

function addToCart(pro) {
    // alert("working");
    // console.log(pro);
    var product = JSON.stringify(pro);
    console.log(product);

    var dataFromLS = JSON.parse(localStorage.getItem("userInfo"))
    console.log(dataFromLS, "dataFromLS")
    var currentUser = JSON.parse(localStorage.getItem("cuser"))
    console.log(currentUser, "currentUser");

    Alluser = []

    if (currentUser) {
        for (var i = 0; i < dataFromLS.length; i++) {
            if (dataFromLS[i].Email === currentUser["current-user-email"]) {
                var newObj = dataFromLS[i];
                newObj["cartproduct"] = newObj["cartproduct"] || [];
                newObj["carproduct"].push(JSON.parse(product));
                console.log(newObj, heree);
                Alluser.push(newObj)
            }
            else {
                Alluser.push(dataFromLS[i])
            }
        }
        localStorage.setItem("userInfo", JSON.stringify(Alluser));
        console.log(Alluser, heree);
        alert("product added into cart")
    }
    else {
        alert("please login first and then product add");
    }
}