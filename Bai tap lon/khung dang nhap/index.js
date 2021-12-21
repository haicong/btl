function nhan(){
    var tk= document.getElementById('tk').value;
    var mk= document.getElementById('mk').value;

    if(tk==""||mk==""){
        if(tk==""){
            document.getElementById("loi-1").innerHTML="Vui lòng nhập tài khoản";
        }
        if(mk==""){
            document.getElementById("loi-2").innerHTML="Vui lòng nhập mật khẩu";
        }
    }
    else{
        if(tk=="tk1"&&mk=="12345"){
           window.location="../trang con cap 1/khoahoc.html ";
        }
        else{
            document.getElementById("loi-3").innerHTML="Tài khoản vừa nhập không đúng, vui lòng nhập lại";
        }
    }
}

