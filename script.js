// front screen hide
function frontScreen() {
    document.getElementById('front-screen').style.display = 'none';
}

// third screen hide
function thirdScreen() {
    document.getElementById('third-screen').style.display = 'none';
}


// Validation of pin code
var user_pin_code;
var user_input;
var user_input_amount;
var remaining_amount;
var valid_amount = 10000;

function checkPin() {
    user_pin_code = 12345;

    user_input = document.getElementById('input-1').value;

    if(user_pin_code == user_input) {
        document.getElementById('second-screen').style.display = 'none';
    }
    else {
        document.getElementById('para-1').innerHTML = 'Invalid pin code';
        document.getElementById('para-2').innerHTML = 'hint: 12345';
        document.getElementById('para-1').style.color = '#bb2124';
        document.getElementById('para-2').style.color = '#000';
    }
}


function amountWithDraw() {
    var user_input_amount = document.getElementById('input-2').value;

    if(user_input_amount <= valid_amount) {
        document.getElementById('fourth-screen').style.display = 'none';

        remaining_amount = valid_amount - user_input_amount;
        document.getElementById('info-1').innerHTML = 'Your previous amount is: $' + valid_amount + '/-';
        document.getElementById('info-2').innerHTML = 'Your withdraw is: $' + user_input_amount + '/-';
        document.getElementById('info-3').innerHTML = 'Your remaining amount is: $' + remaining_amount + '/-';
    }
    else {
        document.getElementById('para-3').innerHTML = 'Insuffient Amount';
        document.getElementById('para-4').innerHTML = 'Amount must be less than $10,000.';
        document.getElementById('para-3').style.color = '#bb2124';
    }
};

function balanceCheck() {
    document.getElementById('third-screen').style.display = 'none';
    document.getElementById('fourth-screen').style.display = 'none';
    document.getElementById('info-1').innerHTML = "Your current balance is: $" + valid_amount;
}