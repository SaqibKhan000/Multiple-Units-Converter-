let display = document.querySelector("#dis");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let categories = document.querySelector("#categories");
let result = document.querySelector("#res");

let units = {
    weight: ["kg", "lb"],
    temperature: ["Celsius", "Fahrenheit"],
    distance: ["km", "miles"]
}

function setUnit() {
    from.innerHTML = "";
    to.innerHTML = "";
    units[categories.value].forEach(unit => {
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.value = unit;
        option1.text = unit;
        option2.value = unit;
        option2.text = unit;
        from.appendChild(option1);
        to.appendChild(option2);
    });
}
categories.addEventListener("click", setUnit);



function calculate() {
    let count = 0;
    let displayVal = parseFloat(display.value);

    let fromVal = from.value;
    let toVal = to.value;
    if (isNaN(displayVal)) {
        result.innerText = "Fill the field ☝🏼";
    } else {
        if (fromVal === "kg" && toVal === "lb") {
            count = displayVal * 2.20462;
        } else if (fromVal === "lb" && toVal === "kg") {
            count = displayVal / 2.20462;
        }
        else if (fromVal === "Celsius" && toVal === "Fahrenheit") {
            count = (displayVal * 9 / 5) + 32;
        } else if (fromVal === "Fahrenheit" && toVal === "Celsius") {
            count = (displayVal - 32) * 5 / 9;
        } else if (fromVal === "km" && toVal === "miles") {
            count = displayVal * 0.621371;
        } else if (fromVal === "miles" && toVal === "km") {
            count = displayVal / 0.621371;
        } else {
            count = displayVal;
        }
        result.innerText = `${count.toFixed(2)} ${toVal}`;
    }
}