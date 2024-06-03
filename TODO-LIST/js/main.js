// Add JS here

const inputBtn = document.getElementById("input_btn");
const input = document.getElementById("input");
const err = document.getElementById("error");

let list = document.getElementById("list");
let pekerjaan = [
    {
        id: 1,
        name: "Belajar HTML",
        status: true,
    }
]
let buttonClick = () => {
    let text = input.value;
    if (!text) {
        err.style.color = "#DF0403";
        err.style.margin = "10px";
        err.style.fontSize = "14px"
        err.innerHTML = "Silahkan masukan nilai dari pekerjaan!";
    } else {
        err.innerHTML = "";
        let tempObj = {
            id: pekerjaan[pekerjaan.length - 1].id +1,
            name: text,
            status: false,
        }
        pekerjaan.push(tempObj);
        getTask();
        input.value = "";
    }
}
inputBtn.addEventListener("click", buttonClick);
let getTask = () => {
    list.innerHTML = "";
    pekerjaan.forEach((item) => {
        if (item.status === true) {
            let status = `<input type="checkbox" name="" id="" checked></input>`
            list.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${status}</td>
                </tr>
            `
        } else {
            let status = `<input type="checkbox" name="" id=""></input>`
            list.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${status}</td>
                </tr>
            `
        }
    });
}

getTask()