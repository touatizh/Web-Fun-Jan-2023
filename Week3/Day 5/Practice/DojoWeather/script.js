function loading() {
    alert("Loading weather report...");
}

function accepted(element) {
    element.parentElement.parentElement.remove();
}

function convert_temp(element) {
    // get selected option after change
    var unit = element.options[element.selectedIndex].value;

    // get a list of all temperature values on screen
    var tempList = document.querySelectorAll(".red, .blue");

    // convert all temperature values depending on the unit selected
    switch (unit) {
        case "F":
            tempList.forEach((t) => {
                let x = Number(t.innerHTML.replace("°", ""));
                x = (x * 9) / 5 + 32;
                t.innerHTML = x.toFixed(0) + "°";
            });
            break;

        case "C":
            tempList.forEach((t) => {
                let x = Number(t.innerHTML.replace("°", ""));
                x = ((x - 32) * 5) / 9;
                t.innerHTML = x.toFixed(0) + "°";
            });
            break;

        default:
            alert("This unit of measurement is not supported yet.");
            break;
    }
}
