let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

let billInput = document.querySelector('#bill');
billInput.addEventListener("input", reciveBillValue);

let numberOfPeopleInput = document.querySelector('#people');
numberOfPeopleInput.addEventListener("input", reciveNumberOfPeopleValue);

function reciveBillValue() {
    bill = billInput.valueAsNumber;
    calculateResults();
}

function reciveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber;
    calculateResults();
}

function reciveTipPercentageValue(value) {
    tipPercentage = value / 100;

    removeClassButtonSelected();

    document.querySelector("#custom-tip").value = "";

    buttonSelected = document.querySelector(`#button-${value}`);
    if (buttonSelected) {
        buttonSelected.classList.add("button-selected");
    }

    calculateResults();
}

function reciveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;

    removeClassButtonSelected();

    calculateResults();
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function calculateResults() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        let tipAmountPerson = calculateTipAmountPerson();
        calculateTotalPerson(tipAmountPerson);
    }
}

function calculateTipAmountPerson() {
    let tipAmountStrong = document.querySelector(".amount strong");
    let tipAmountPerson = bill * tipPercentage / numberOfPeople;
    tipAmountStrong.textContent = `$${tipAmountPerson.toFixed(2)}`;
    return tipAmountPerson;
}

function calculateTotalPerson(tipAmountPerson) {
    let totalStrong = document.querySelector(".total strong");
    let totalAmountPerson = (bill / numberOfPeople) + tipAmountPerson;
    totalStrong.innerText = `$${totalAmountPerson.toFixed(2)}`;
}

function reset() {
    billInput.value = "";
    bill = 0;

    tipPercentage = 0;
    removeClassButtonSelected();
    document.querySelector("#custom-tip").value = "";

    numberOfPeopleInput.value = "";
    numberOfPeople = 0;

    document.querySelector(".amount strong").innerText = "$0.00";
    document.querySelector(".total strong").innerText = "$0.00";
}


