const i0y2024 = document.getElementById("0-2024")
const i0y2023 = document.getElementById("0-2023")
const i2y2024 = document.getElementById("2-2024")
const i2y2023 = document.getElementById("2-2023")

let Si0y2024 = true
let Si0y2023 = false
let Si2y2024 = true
let Si2y2023 = false


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

    if (item === 2) {
        if (year === 2024) {
            if (Si2y2024) {
                i2y2024.classList.replace("show", "hide")
                Si2y2024 = false 
            } else {
                i2y2024.classList.replace("hide", "show")
                Si2y2024 = true
            }
        }
        if (year === 2023) {
            if (Si2y2023) {
                i2y2023.classList.replace("show", "hide")
                Si2y2023 = false 
            } else {
                i2y2023.classList.replace("hide", "show")
                Si2y2023 = true
            }
        }
    }
}