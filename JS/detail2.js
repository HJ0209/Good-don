window.onload = function(){

    let scrollNum = document.getElementById("num")

    let scrollBar = document.getElementById("myRange")

    scrollBar.onchange = function(e){
        scrollNum.innerText = this.value
    }

    let bud = document.getElementById("bud")

    let buttons = document.getElementsByClassName("buttons")

    for(let button of buttons){
        button.onclick = function(e){
            let price = this.value
            price = price.substring(0, price.length-2)
            bud.value = price
            scrollBar.setAttribute("max", price)
        }
    }

    bud.onchange = function(e){
        console.log("Change")
        scrollBar.setAttribute("max", this.value)
    }
    let dateInput = document.getElementById("date-term")

    let monthBtn = document.getElementsByClassName("termbuttons")

    for(let btn of monthBtn){
        btn.onclick = function(e){
            dateInput.value = this.value
        }
    }
    
    

}