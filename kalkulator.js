let hitungan = document.getElementById("tampilanHitungan")
let tombol = document.querySelectorAll("button")
let layar = document.getElementById("tampilanInput")

let reg = /[0-9]/g
// function tampilan(){
    let arrTamp =[]
    let result = ""
    tombol.forEach(
        (buttons, i, arr)=>{
            buttons = arr[i]
            buttons.addEventListener('click', (e) => {
                        result += buttons.value
                        document.body.append(layar)
                        e.preventDefault()
            })
        }
        )
        console.log(result)
    // }
    // if(buttons.value === "=" ){

    // }    
// tampilan()