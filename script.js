var username =  98165091;
var pass = 'fuckyou';
const loginBTN = document.getElementById("loginBTN");
loginBTN.addEventListener('click', nextFunction);
function nextFunction (){
    const fristAria = document.getElementById("frist");
    var userNumber = document.getElementById('userInput');
    var userName = userNumber.value;
    var pinNumber = document.getElementById('password').value;
    var secoundArea = document.getElementById('secound');
    if(userName == userName && pinNumber == pass){
        fristAria.style.display = 'none' ;
        secoundArea.style.display = 'block' ;
    }
    else {
        document.getElementById('worngPass').style.display = 'inline' ;
    }
    
}

// js code for diposit
document.getElementById('dipositBtn').addEventListener('click', dipositClick);

function dipositClick() {
    var dipositInput = parseFloat(document.getElementById('diposit-input').value);
    var dipoDisplayy = parseFloat(document.getElementById('dipoDisplay').innerText);
    var DipositAmount = dipoDisplayy + dipositInput;
    document.getElementById('dipoDisplay').innerText = DipositAmount;

    var balanceAmount = parseFloat(document.getElementById('BalID').innerHTML);
    var TotalBal = dipositInput + balanceAmount;
    document.getElementById('BalID').innerHTML = TotalBal;
    document.getElementById('diposit-input').value = null;

}
document.getElementById('withdrawButton').addEventListener('click', withdrawClick);

function withdrawClick() {
    var withdrawInput = parseFloat(document.getElementById('withdrawInput').value);
    var withdrawDisplay = parseFloat(document.getElementById('withDrawDisplay').innerText);
    
    var totalWithdraw = withdrawDisplay + withdrawInput;
    document.getElementById('withDrawDisplay').innerHTML = totalWithdraw;
    document.getElementById('withdrawInput').value = null;
    
    var TotalbalAmount = parseFloat(document.getElementById('BalID').innerHTML);

    var newBal = TotalbalAmount + withdrawInput*-1;
    document.getElementById('BalID').innerHTML = newBal;

}

// show password

var showPassword = document.getElementById('sPasss');
var passoard = document.getElementById('password');

showPassword.addEventListener('click', function (){
    if(passoard.type === 'password'){
        passoard.type = 'text';
    }
    else {
        passoard.type = 'password'
    }
})
// popup section start
var hvrElement = document.getElementById('hovar');
var popupElement = document.getElementById('ppup');
var jakaria = document.getElementById('jakku');

hvrElement.addEventListener('mouseover', function (){
    popupElement.style.display = 'block';
});


hvrElement.addEventListener('mouseout', function (){
    popupElement.style.display = 'none';
});

jakaria.addEventListener('mouseover', function (){
    popupElement.style.display = 'block';
});


jakaria.addEventListener('mouseout', function (){
    popupElement.style.display = 'none';
});

popupElement.addEventListener('mouseover', function() {
    popupElement.style.display = 'block';
});

popupElement.addEventListener('mouseout', function() {
    popupElement.style.display = 'none';
});

var menuIcon = document.getElementById('menuIcon');
var menuPopup = document.getElementById('menu-popup');

menuIcon.addEventListener('click', function() {
    if (menuPopup.style.display === 'block') {
        menuPopup.style.display = 'none';
    } else {
        menuPopup.style.display = 'block';
    }
});
