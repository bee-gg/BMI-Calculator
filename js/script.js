function calculateBmi() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    let bmi = (weight / (height * height) * 10000);

    document.getElementById("heading").innerHTML = 'Your BMI is:';
    document.getElementById("bmi-output").innerHTML = bmi.toFixed(1);
    
    if (bmi <= 18.5){
        document.getElementById("message").innerHTML = 'You are in the underweight range.'
    } else if (bmi >= 18.6 && bmi <= 24.9){
        document.getElementById("message").innerHTML = 'You are in the healthy weight range.'
    } else if (bmi >= 25 && bmi <= 29.9){
        document.getElementById("message").innerHTML = 'You are in the overweight range.'
    } else {
        document.getElementById("message").innerHTML = 'You are in the obese range.'
    }
}

function reload(){
    window.location.reload()
}