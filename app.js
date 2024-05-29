
function calculateTDEE(weight, height, age, gender, activityLevel) {
    let activityLevels = {
        sedentary: 1.2,
        lightlyActive: 1.375,
        moderatelyActive: 1.55,
        veryActive: 1.725,
        extraActive: 1.9
    };
      
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    
    let tdee = bmr * activityLevels[activityLevel];
   
    
    return tdee;
       
}


function calculateBMI(weight, height) {

    let bmi = weight / ((height / 100) * (height / 100));
    return bmi;
    
}

function clearscreen(){
    window.location.reload();

}
calculateTDEE()
calculateBMI()




function getdata(){
    let age =  document.getElementById('ageInput').value;
    let height = document.getElementById('hightInput').value
    let weight = document.getElementById('weightInput').value
    var dropdownGender = document.getElementById('gender');
    var gender = dropdownGender.options[dropdownGender.selectedIndex].value;
    var dropdownActivity = document.getElementById('activity');
    var activityLevel = dropdownActivity.options[dropdownActivity.selectedIndex].value;

    console.log("ข้อมูลจาก input อายุ:", age);
    console.log("ข้อมูลจาก ส่วนสูง:", height);
    console.log("ข้อมูลจาก น้้ำหนัก:", weight);
    console.log("ข้อมูลจาก เพศ:", gender);
    console.log("ข้อมูลจาก dropdown:", activityLevel);


    
    document.getElementById("showTDEE").innerHTML = ("Your TDEE is: " + calculateTDEE(parseFloat(weight), parseFloat(height), parseInt(age), gender, activityLevel).toFixed(0))
    document.getElementById("showBMI").innerHTML =("Your BMI is:  " + calculateBMI(weight,height).toFixed(0))
     var element = document.getElementById("showdata");   element.classList.add("border-white");


}
