console.log("Development by subirpratihar2000@gmail.com");

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const age = document.querySelector("#age");
const bmi_result = document.querySelector("#bmi_result");
const bmi_btn = document.querySelector("#bmi_btn");
const bmi_input = document.querySelector("#bmi_calculater input");

function bmiInput() {

    if (height.value !== "" && weight !== "" && age.value !== "") {
        bmi_btn.disabled = false;
        bmi_btn.classList.add("btn-danger");
    }else{
        bmi_btn.disabled = true;
        bmi_btn.classList.remove("btn-danger");
    }
}

bmi_btn.onclick = function () {
    bmi_result.classList.add("bg-black") //add background color in bmi_result;

    const meter = height.value / 100; //convert cm to m.

    const bmi_value = (weight.value / (meter * meter)).toFixed(1); //Calculat bmi value.

    if (bmi_value <= 0.0) {
        bmi_result.innerHTML = `<span class="text-danger fw-bold">Sorry! Invalid Value.</span>`;
    } else if (bmi_value > 0.0 && 18.5 > bmi_value) {
        bmi_result.innerHTML = `<span class="text-info fw-bold">Oops! You are Underweight.</span> Your
        BMI is: ${bmi_value}`;
    } else if (bmi_value >= 18.5 && 25 > bmi_value) {
        bmi_result.innerHTML = `<span class="text-success fw-bold">Nice! You are Healthy.</span> Your
        BMI is: ${bmi_value}`;
    } else if (bmi_value >= 25 && 30 >= bmi_value) {
        bmi_result.innerHTML = `<span class="text-warning fw-bold">Oops! You are Overweight.</span> Your
        BMI is: ${bmi_value}`;
    } else {
        bmi_result.innerHTML = `<span class="text-danger fw-bold">Time to Run! Your body in Obese .</span> Your
        BMI is: ${bmi_value}`;
    }
}