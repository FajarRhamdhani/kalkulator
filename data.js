class Calculator {
    constructor( layar, tombol, buttons1, bgWarna1, bgWarna2, btnWarna, latarform){
        this.layar=layar
        this.tombol=tombol
        this.buttons1=buttons1
        this.bgWarna1=bgWarna1
        this.bgWarna2=bgWarna2
        this.btnWarna=btnWarna
        this.latarform=latarform
    }
    _isiInputAwal() {
        this.tombol.forEach(
            (buttons, i, arr) =>{
                buttons = arr[i];
                        buttons.addEventListener('click', (e) => {
                            if(this.layar.value === null || this.layar.value === '0' ){
                                this.layar.value = buttons.value;
                                document.body.append(this.layar)
                            }else if(buttons.value === "="){
                                this.layar.value.substring(0,this.layar.value.length-1)
                            }else{
                                this.layar.value += buttons.value
                                document.body.append(this.layar)
                                e.preventDefault()
                            }
                        })
                    
            })
    }

    _menghapusKaliBagiPersenDiAwal(){
        this._isiInputAwal()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if(this.layar.value[0]==="*" || this.layar.value[0]==="/" || this.layar.value[0]==="%"){
                        this.layar.value = ""
                    }else{
                        e.preventDefault()
                    }
                })
            })            
        
    }

    _persentase(){
        this._menghapusKaliBagiPersenDiAwal()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if(buttons.name === "%"){
                        this.layar.value=eval(this.layar.value)
                        this.layar.value=eval(this.layar.value * 1/100)
                    }else{
                        e.preventDefault()
                    }
                })
            })            
        
    }

    _membuatReset(){
        this._persentase()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if(buttons.value === "AC"){
                        this.layar.value=""
                    }else{
                        e.preventDefault()
                    }
                })
            })
    }

    _membuatPlusMin(){
        this._membuatReset()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if(buttons.name==="+/-"){
                        buttons.value="-" 
                        if(this.layar.value[0]==="-"){
                            this.layar.value= this.layar.value.substring(1,this.layar.value.length)
                            this.layar.value= this.layar.value.substring(0,this.layar.value.length-1)
                        }else{
                            this.layar.value = buttons.value +this.layar.value
                        }
                    }else{
                        e.preventDefault()
                    }
                })
            })
    }

    _membuatDesimal(){
        this._membuatPlusMin()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if( this.layar.value[0]==="."){
                        this.layar.value = "0."
                    }else{
                        e.preventDefault()
                    }
                })
            })
    }
         

    _backspace(){
        this._membuatDesimal()
        this.tombol.forEach(
            (buttons, i, arr) => {
                buttons = arr[i]
                buttons.addEventListener('click', (e) => {
                    if(buttons.name === "c"){
                        this.layar.value = this.layar.value.substring(0,this.layar.value.length-1)
                    }else{
                        e.preventDefault()
                    }
                })
            })    
    }
  
}

class Result extends Calculator {
    constructor( layar, tombol, buttons1, bgWarna1, bgWarna2, btnWarna, latarform){
        super( layar, tombol, buttons1, bgWarna1, bgWarna2, btnWarna, latarform)
    }
    calculate(){
        this._backspace()
            this.tombol.forEach(
                (buttons, i, arr)=>{
                    buttons = arr[i]
                        buttons.addEventListener('click', (e) => {
                            try {
                                if(buttons.value === "="){
                                    this.layar.value = eval(this.layar.value)
                                    e.preventDefault()
                                }
                            }catch(error){
                                this.layar.value = "Syntax Error"
                                e.preventDefault()
                            }
                        })
                    })      
                    
        }
    memperbaikiTampilan(){
        this.calculate()
        this.tombol.forEach(
            (buttons, i, arr)=>{
                buttons = arr[i]
                    buttons.addEventListener('click', () => {
                        this.layar.style.marginTop="-445px"
                        this.layar.style.position="absolute"
                        this.layar.style.width="21%"
                        this.layar.style.marginLeft="494px"
                        this.layar.style.paddingRight="100px"
                        if(buttons.name==="terang"){
                            this.latarform.style.backgroundColor="cadetblue"
                        }else if(buttons.name==="gelap"){
                            this.latarform.style.backgroundColor="black"
                        }
                    })
                })      
    }

   
}


const kal = new Result(
    
    document.getElementById("tampilanInput" ),
    document.querySelectorAll("button"),
    document.getElementById("firstButtons"),
    document.getElementById("gelap"),
    document.getElementById("terang"),
    document.getElementsByClassName("#btnNew"),
    document.getElementById("form")
    
);


kal.memperbaikiTampilan()
