
const submitBtn = document.getElementById("submitBtn");
const printBtn = document.getElementById("printBtn");

let carts = [];
let getCarts = () => {
    cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";

    carts.forEach((cart) => {
        cartBody.innerHTML += `
        <tr>
            <td>${cart.id}</td>
            <td>${cart.nama}</td>
            <td>${cart.barang}</td>
            <td>Rp. ${cart.harga}</td>
        </tr>`;
    });
}
let data = () => {
    let id;
    let name = document.getElementById("name").value;
    let item = document.getElementById("item").value;
    let price = document.getElementById("price").value;

    if (carts.length === 0) {
        id = 1
    } else {
        id = carts[carts.length - 1].id + 1
    }

    let cart = { 
        id, 
        nama: name, 
        barang: item, 
        harga: +price 
    };

    carts.push(cart);
    getCarts()
    console.log(carts);
    document.getElementById("name").value = "";
    document.getElementById("item").value = "";
    document.getElementById("price").value = "";
}

let printData = () => {
    document.querySelector(".form-box").style.display = "none";
    printBtn.style.display = "none";
    window.print();
}

submitBtn.addEventListener("click", data);
printBtn.addEventListener("click", printData)