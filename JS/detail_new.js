// 진행중..
let bud = document.getElementById("budget")
    let buttons = document.getElementsByClassName("budgetbuttons")

    for(let button of buttons){
        button.onclick = function(e){
            let price = this.value
            console.log(price)
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

// $(function () {
//     $('#period').change(function() {
//         console.log(this.value);
//     });

//     $('#Button_NewList').click(function() {
//         console.log($('#period').val());
//         if ($('#period').val() == "") {
//             alert("입력하세요");
//             return;
//         } else {
//             location.href = "Congratulations.html";
//         }
//     });
// });




// window.onload = function(){

//     let scrollNum = document.getElementById("num")
//     let scrollBar = document.getElementById("myRange")

//     scrollBar.onchange = function(e){
//         scrollNum.innerText = this.value
//     }
