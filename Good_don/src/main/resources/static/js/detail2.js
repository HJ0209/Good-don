$(document).ready(() => {
    $(".buttons").click(function(){
        // 이게 해당 버튼들을 선택해서 클릭 이벤트를 지정해준 코드야
       
        let value = this.value.trim().substr(0, this.value.length - 2) * 1
        $("#budget").val(value)
    })

    $('.termbuttons').click(function(){
        let value = this.value.trim().substr(0, this.value.length - 2) * 1
        $("#date-term").val(value)
    })


    $('.cyclebuttons').click(function(){
        let value = this.value.trim().substr(0, this.value.length - 3) * 1
        $("#date-cycle").val(value)
    })

    $("#Button_NewList").click(function(e){
        if($("#budget").val().length !== 0){

        }else{
            e.preventDefault()
            alert("목표금액을 입력해주세요")
        }
    })
    $("#Button_NewList").click(function(e){
        if($("#date-term").val().length !== 0){

        }else{
            e.preventDefault()
            alert("기간을 입력해 주세요")
        }
    })
    $("#Button_NewList").click(function(e){
        if($("#date-cycle").val().length !== 0){

        }else{
            e.preventDefault()
            alert("납입주기를 입력해 주세요")
        }
    })

})