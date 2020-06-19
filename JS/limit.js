$("#limit").click(function(){
    swal({
        title: "리미트소비",
        text: "곧 제공될 서비스입니다.",
        button: "확인",
    });
    });

$("button").click(function(){
    swal({
        title: "로그아웃",
        text: "로그인 페이지로 이동합니다",
        buttons: true,
        dangerMode:true,
    })
    .then((Logout)=> {
        if(Logout) {
            swal("로그아웃합니다");
            document.location.href="loginpage.html"
        } else {
            swal("로그인을 유지합니다");
        }
    })
});
    