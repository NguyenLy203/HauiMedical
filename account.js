let list_account = new Array();
let id_account=0;
if (localStorage.getItem("account_register")!=undefined){
    list_account = (JSON.parse(localStorage.getItem("account_register")));
    id_account = (JSON.parse(localStorage.getItem("account_register")).length);
    console.log(list_account);
}

class Account{
    Account_id; 
    Username;
    Password;
    Email;
    isAdmin;
    isLogined;
    Account_cart;
    constructor(Account_id,Username,Password,Email,Account_cart){
        this.Account_id=Account_id;
        this.Username=Username;
        this.Password=Password;
        this.Email=Email;
        this.isLogined=0;
        this.Account_cart = Account_cart;
    }

    get_Username(){
        return this.Username;
    }

    get_Password(){
        return this.Password;
    }

    get_Email(){
        return this.Email;
    }

    get_isLogined(){
        return this.isLogined;
    }

    set_isLogined(isLogined){
        this.isLogined=isLogined;
    }
}

class Admin extends Account{
    isAdmin=1;
}

class Client extends Account{
    isAdmin=0;
}



