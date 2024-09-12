const items = [
    "0" = {
        y2024: document.getElementById("0-2024"),
        y2023: document.getElementById("0-2023")
    }
]
let showing = [
    "0" = {
        y2024: true,
        y2023: false
    }
]

function colapse(item, year) {
    if (item === 0){
        if (year === 2024) {
            if (showing[0].y2024) {
                items[0].y2024.classList.replace("show", "hide")
            } else {
                items[0].y2024.classList.replace("hide", "show")
            }
        }
    }
}