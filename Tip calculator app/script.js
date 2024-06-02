const inputBill = document.querySelector('.bill')
const inputNumOfPpl = document.querySelector('.num-of-ppl')
const inputCustom = document.querySelector('.custom')
const resetBtn = document.querySelector('.reset-btn')
const five = document.querySelector('.five')
const ten = document.querySelector('.ten')
const fifteen = document.querySelector('.fifteen')
const twentyfive = document.querySelector('.twentyfive')
const fifty = document.querySelector('.fifty')
const errorTxt = document.querySelector('.error-txt')
const total = document.querySelector('.total')
const tipAmount = document.querySelector('.tip-amount')

five.addEventListener("click", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = 5
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
ten.addEventListener("click", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = 10
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
fifteen.addEventListener("click", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = 15
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
twentyfive.addEventListener("click", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = 25
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
fifty.addEventListener("click", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = 50
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
inputCustom.addEventListener("change", function(){
    if(inputNumOfPpl.value === ""){
        inputNumOfPpl.style.border = "1px solid red"
        errorTxt.style.display = "flex"
    }else{
        let percent = inputCustom.value
        tipAmount.textContent = "$" + (percent / 100) * inputBill.value
        total.textContent = "$" + (percent / 100) * inputBill.value * inputNumOfPpl.value
        inputNumOfPpl.style.border = ""
        errorTxt.style.display = "none"
    }
})
resetBtn.addEventListener("click", function(){
    inputBill.value = ""
    inputNumOfPpl.value = ""
    total.textContent = "$0.00"
    tipAmount.textContent = "$0.00"
    inputCustom.value = ""
    errorTxt.style.display = "none"
    inputNumOfPpl.style.border = ""
})