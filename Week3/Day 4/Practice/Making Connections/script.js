function edit_profile() {
    let name = document.querySelector("#info h2");

    if (name.innerHTML=="Jane Doe") {
        name.innerHTML = "Akali J. Tethi";
    }
    else {
        name.innerHTML = "Jane Doe";
    }
}

function remove_request(element) {
    // Decrease connection requests
    let nbr_req = document.getElementById("nbr-req");
    element.parentElement.parentElement.parentElement.remove();
    nbr_req.innerText = Number(nbr_req.innerText) - 1;

    // Increase connections number in case of accepting
    let nbr_con = document.querySelector("#nbr-con span");
    if (element.alt == "accept") {
        nbr_con.innerText = Number(nbr_con.innerText) + 1;
    }
    // Bonus: Only leave requests bloc header if nbr_req=0
    if (Number(nbr_req.innerText) == 0) {
        document.querySelector("#requests .content").remove();
    }
}

