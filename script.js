
// preventing page from refreshing
document.getElementById("pin-creator").addEventListener("click", function(event){
    event.preventDefault();
  });
document.getElementById("pin-submit").addEventListener("click", function(event){
    event.preventDefault();
  });

//   generate pin
function generatePin () {
    min = 0,
    max = 9999;
    pinNumber = ("0" + Math.floor(Math.random() * (max - min + 1)) + min).substr(-4);
    document.getElementById('pin-display').value= pinNumber;
}

// backspace button
function backSpace(){
    document.getElementById("calculator").display.value = document.getElementById("calculator").display.value.slice(0,-1); 
}
// display input value
function displayInput(displayValue){
document.getElementById("calculator").display.value += displayValue;
}

// pin match checking
function pinChecker (){
    let pinDisplay = document.getElementById("pin-display");
    let inputPin = document.getElementById("input-pin");

    if(pinDisplay.value == "" && inputPin.value == ""){
        document.getElementById("notMatched").style.display = "block";
    }

    else if(pinDisplay.value == inputPin.value){
        document.getElementById("matched").style.display = "block";
        document.getElementById("notMatched").style.display = "none";
    }
     else if(pinDisplay.value != inputPin.value){
        document.getElementById("notMatched").style.display = "block";
        document.getElementById("matched").style.display = "none";
        document.getElementById("calculator").reset();
    }   
}

