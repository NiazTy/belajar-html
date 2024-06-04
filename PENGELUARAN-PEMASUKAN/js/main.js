
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1678700202.
const incomeBtn = document.querySelector("#incomeBtn");
const expenseBtn = document.querySelector("#expenseBtn");

let id;
let transaction = document.getElementById("name");
let balance = document.getElementById("balance");
let transactions = {
    income: [],
    expense: []
}

let incomeHandler = () => {
    if (transactions.income.length === 0) {
        id = 1
    } else {
        id = transactions.income[transactions.income.length - 1].id + 1
    }
    if (transaction.value === "" || balance.value === "") {
        alert("Mohon Isi Seluruh Kotak Yang ada!");
        return;
    }
    let data = {
        id: id,
        name: transaction.value,
        balance: +balance.value
    }
    transactions.income.push(data);
    getTransactions();
    balanceTotal();
    transaction.value = "";
    balance.value = "";
    // console.log(data);
}
let expenseHandler = () => {
    if (transactions.expense.length === 0) {
        id = 1
    } else {
        id = transactions.expense[transactions.expense.length - 1].id + 1
    }
    if (transaction.value === "" || balance.value === "") {
        alert("Mohon Isi Seluruh Kotak Yang ada!");
        return;
    }
    let data = {
        id: id,
        name: transaction.value,
        balance: +balance.value
    }
    transactions.expense.push(data);
    getTransactions();
    balanceTotal();
    transaction.value = "";
    balance.value = "";
    // console.log(data);
}
let getTransactions = () => {
    let incomeTable = document.querySelector("#incomeTable");
    let expenseTable = document.querySelector("#expenseTable");
    incomeTable.innerHTML = "";
    expenseTable.innerHTML = "";

    transactions.income.forEach(item => {
        incomeTable.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.balance}</td>
        </tr>
        `
    });
    transactions.expense.forEach(item => {
        expenseTable.innerHTML += `
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.balance}</td>
        </tr>
        `
    });
}
let balanceTotal = () => {
    let income = 0;
    let expense = 0;
    transactions.income.forEach(item => {
        income += item.balance;
    });
    transactions.expense.forEach(item => {
        expense += item.balance;
    });
    console.log(income - expense);
    document.getElementById("balanceValue").innerHTML = income - expense;
}

incomeBtn.addEventListener("click", incomeHandler);
expenseBtn.addEventListener("click", expenseHandler);
getTransactions()
balanceTotal