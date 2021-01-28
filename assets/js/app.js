// Login Handling 

var loginBtn = document.querySelector('#loginBtn');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var defaultPass = 'admin';
var defaultMail = 'admin@mail.com'

loginBtn.addEventListener('click', function () {
    if (email.value == defaultMail && pass.value == defaultPass) {
        document.getElementById('login-area').style.display = 'none';
        document.getElementById('transaction-area').style.display = 'block';
        document.getElementById('main-title').innerText = 'Your Bank Account Details';
        document.querySelector('.profile').style.display = 'flex';
    } else {
        console.log(email.value);
        console.log(pass.value);
        alert('Email or Password does not match');
    }
}
)
// 
// }


// Transaction Handling 

var showWithdraw = document.getElementById('showWithdraw');
var totalWithdraw = Number(showWithdraw.textContent);
var showDeposit = document.getElementById('showDeposit');
var totalDeposit = Number(showDeposit.textContent);
var showBalance = document.getElementById('showBalance');
var totalBalance = Number(showBalance.textContent)
var withdrawInput = document.getElementById('withdrawAmount');
var depositInput = document.getElementById('depositAmount');
var withdrawBtn = document.getElementById('withdrawBtn');
var depositBtn = document.getElementById('depositBtn');

withdrawBtn.addEventListener('click', function () {
    var withdrawAmount = Number(withdrawInput.value)
    totalWithdraw += withdrawAmount;
    totalBalance -= withdrawAmount;
    showWithdraw.textContent = totalWithdraw;
    showBalance.textContent = totalBalance;
    document.getElementById("withdrawAmount").value = "";

});
depositBtn.addEventListener('click', function () {
    depositAmount = Number(depositInput.value);
    totalDeposit += depositAmount;
    totalBalance += depositAmount;
    showBalance.textContent = totalBalance;
    showDeposit.textContent = totalDeposit;
    document.getElementById("depositAmount").value = "";
})