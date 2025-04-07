let bill = 0
let tipPorsentage = 0
let numberOfpeople = 0
let buttonSelected = null



function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNmber

    console.log(bill)
}

function receiveNumberOfPeopleValue() {
    numberOfpeople = document.querySelector("#people").valueAsNmber
}

function receiveTipPercentageValue(value) {
    tipPorsentage = value / 100

    removeClassButtonSelected()

    document.querySelector("#custom-tip").value = ""

    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}


function reciveCustomTipPercentageValue () {
    tipPorsentage = document.querySelector("#custom-tip").valueAsNmber / 100

    removeClassButtonSelected()
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected")
        buttonSelected = null 
    }
}