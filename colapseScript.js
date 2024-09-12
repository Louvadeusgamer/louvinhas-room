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

const i0y2024 = document.getElementById("0-2024")
const i0y2023 = document.getElementById("0-2023")
let Si0y2024 = true
let Si0y2023 = false


function colapse(item, year) {
    if (item === 0) {
        if (year === 2024){
            if (Si0y2024) {
                i0y2024.classList.replace("show", "hide")
                Si0y2024 = false
            } else {
                i0y2024.classList.replace("hide", "show")
                Si0y2024 = true
            } 
        }
        if (year === 2023) {
            if (Si0y2023) {
                i0y2023.classList.replace("show", "hide")
                Si0y2023 = false
            } else {
                i0y2023.classList.replace("hide", "show")
                Si0y2023 = true
            }
        } 
    }
}