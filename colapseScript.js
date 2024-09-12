const items = {
    i0: {
        2024: document.getElementById("0-2024"),
        2023: document.getElementById("0-2023")
    }
}
let showing = {
    i0: {
        2024: true, 
        2023: false
    }
}

function colapse(item, year) {
    if (showing[item].year) {
        items[item].y2024.classList.replace("show", "hide")
        showing[item].year = false
    } else {
        items[item].y2024.classList.replace("hide", "show")
        showing[item].year = true
    }
}