const items = {
    i0: {
        y2024: document.getElementById("0-2024"),
        y2023: document.getElementById("0-2023")
    }
}
let showing = {
    i0: {
        y2024: true, 
        y2023: false
    }
}

function colapse(item, year) {
    if (year === 2024){
        if (showing[item].y2024[0]) {
            items[item].y2024[0].classList.replace("show", "hide")
            showing[item].y2024[0] = false
        } else {
            items[item].y2024[0].classList.replace("hide", "show")
            showing[item].y2024[0] = true
        } 
    }
    if (year === 2023)
        if (showing[item].y2023[0] === true) {
            items[item].y2023[0].classList.replace("show", "hide")
            showing[item].y2023[0] = false
        } else {
            items[item].y2023[0].classList.replace("hide", "show")
            showing[item].y2023[0] = true
        }
    } 
}