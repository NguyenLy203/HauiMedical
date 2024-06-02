

//Ham lay thong tin dang ky
function create_Account(){
    var user = document.getElementById("name").value;

    var password = document.getElementById("pass").value;

    var email =  document.getElementById("email").value;

    var Account_cart = new Cart(id_account,cart);

    var account = new Account(id_account,user,password,email,Account_cart);

    return account;
}

//Ham luu thong tin dang ki
function account_Register(){ 
    var new_account = create_Account();
    list_account.push(new_account);
    localStorage.setItem("account_register", JSON.stringify(list_account));
    console.log(JSON.parse(localStorage.getItem("account_register")));
    var change_page_button = '';
    change_page_button+='<div class=change-page>';
    change_page_button+='<p>Đăng kí thành công</p>'
    change_page_button+='<a href="login.html">Về đăng nhập</a>'
    change_page_button+='</div>'
    document.getElementById("change_page_button").innerHTML = change_page_button;
}

