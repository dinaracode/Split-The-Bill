const button = document.querySelector("#btn");
button.addEventListener("click",calculateAmaount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmaount(e){
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if(bill ==="" || people === ""|| people < 1){
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
          })
    }
    // 1- сколько запралит один человек
    let amountPerPerson = bill/people;

    // 2 - сколько чаевых заплатит один человек
    let tipPerPerson = (bill * tip)/people;

    // сумма счета и чаевых
    let totalSam = amountPerPerson + tipPerPerson;

    // добавляем этот метод to.Fixed
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalSam = totalSam.toFixed(2);

    // показываем в приложении в своиз боксах
    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSam;

}

