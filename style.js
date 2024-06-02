//Khoi tao 1 Product Tab gom 1 list product_box
function generateTab(list){
    
    var index;
    if (list==list0){
        index=0;
    }

    if (list==list1){
        index=1;
    }
    
    if (list==list2){
        index=2;
    }

    var product_tab = document.getElementById("product_tab");
    product_tab.innerHTML = product_tab_Output(list,index,4);
}

//Khoi tao 1 list product_box
function product_tab_Output(list,list_type,list_number){
    var product_box='';
    product_box+='<div class="product-list">'
    for(let i=0;i<list_number;i++){
        product_box+='<div class="product_box">';
        product_box+='<div class="special_price">';
        product_box+='<img src="'+list[i]["product_image"]+'" width="200" height="200">';
        product_box+='<div class="option">';
        product_box+='<button class="buy_product" onclick="addProductToCart(list'+list_type+'['+i+'])">Thêm vào giỏ hàng</button>';
        product_box+='</div>';
        product_box+='</div>';
        product_box+='<div class="price">'+(parseFloat(list[i]["price"]/1000))+'.000 VND </div>';
        product_box+='<div class="text_line">';
        product_box+='<a href="product'+list[i]["product_id"]+'.html">'+list[i]["name"]+'</a>';
        product_box+='</div>'
        product_box+='</div>'
    }
    product_box+='</div>'
    return product_box;
}

//Lua chon Product Tab hien thi
function Tab_selector(){
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    tab1.addEventListener("click",() => {
        generateTab(list0); 
    })

    tab2.addEventListener("click",() => {
        generateTab(list1);
    })

    tab3.addEventListener("click",() => {
        generateTab(list2); 
    })
}

function product_box_list_Output(list,list_number){
    var product_box = '';
    product_box+='<div class="product-list">'
    for (var i=0;i<list_number;i++){
        product_box+=product_box_Output(list[i]);
    }
    product_box+='</div>'
    return product_box;
}

function product_box_Output(product){
    var product_id = product["product_id"];
    var product_box='';
    product_box+='<div class="product_box">';
    product_box+='<div class="special_price">';
    product_box+='<img src="'+product["product_image"]+ '" width="200" height="200">';
    product_box+='<div class="option">';
    product_box+='<button class="buy_product" onclick="addProductToCart(product'+product_id+')">Thêm vào giỏ hàng</button>';
    product_box+='</div>';
    product_box+='</div>';
    product_box+='<div class="price">'+(parseFloat(product["price"]/1000))+'.000 VND </div>';
    product_box+='<div class="text_line">';
    product_box+='<a href="product'+product["product_id"]+'.html">'+product["name"]+'</a>';
    product_box+='</div>'
    product_box+='</div>'
    return product_box;
}

function product_infor_Output(product,product_type){
    var product_box='';
        product_box+='<div class="infor-image">';
        product_box+='<img src="'+product["product_image"]+'" width="200" height="200">';
        product_box+='</div>';
        product_box+='<div class="infor-detail">';
        product_box+='<p class="Name">'+product["name"]+'</p>';
        product_box+='<p class="Maso">MaSP:PVN4302</p>';
        product_box+='<p class="Thuonghieu">Thương hiệu: chưa cập nhập</p>';
        product_box+='<div class="price">'+(parseFloat(product["price"]/1000))+'.000 VND </div>';
        product_box+='<p class="Mota">Mô tả: đang cập nhật</p>';
        product_box+='<button class="buy_product" onclick="addProductToCart(product'+product_type+')">Mua ngay</button>';
        product_box+='</div>';
    return product_box;
}



//Khoi tao mang Cart



//Them product vao mang cart
function addProductToCart(product){
    if (cart.every(value=>value["name"]!=product["name"])) {
        cart.push(product);
        console.log(cart);
        localStorage.setItem("cart_list",JSON.stringify(cart));

        // let account_cart_change = JSON.parse(localStorage.getItem("logined_account"));
        // account_cart_change["Account_cart"]["Product_list"]=cart;
        // localStorage.setItem("logined_account",JSON.stringify(account_cart_change));
        // console.log(account_cart_change);
        // let list_account_change = JSON.parse(localStorage.getItem("account_register"))
 

        localStorage.setItem("account_register",JSON.stringify(list_account));
    } else {
        cart.at(cart.findIndex(value => value["count"]==product["count"]))["count"]++;
        console.log(cart);
        localStorage.setItem("cart_list",JSON.stringify(cart));


        // let account_cart_change = JSON.parse(localStorage.getItem("logined_account"));
        // account_cart_change["Account_cart"]["Product_list"]=cart;
        // console.log(account_cart_change);
        // localStorage.setItem("logined_account",JSON.stringify(account_cart_change));

        localStorage.setItem("account_register",JSON.stringify(list_account));       
    }
    document.getElementById("product_cart").innerHTML=Cart_Output();
    document.getElementsByClassName("money-count")[0].innerHTML=Price_sum();
}

//Xuat product trong cart
function Cart_Output(){
    var opt='';
    for (var i in cart){        
            opt+='<li>';
            opt+='<a href=""><img src="'+cart.at(i)["product_image"]+'"></a>';
            opt+='<a href="" class="incartproduct">'+cart.at(i)["name"]+'</a>';
            opt+='<input id="cart_value'+i+'" type="number" value="'+cart.at(i)["count"]+'" min="1" onchange="changeProductFromCart('+i+')"></input>';
            opt+='<img onclick="removeProductFromCart('+i+')" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgwKmMVuHz7mE54Jr4mQBTcbtIgVj-L1TlNg&usqp=CAU">'; 
            opt+='</li>';         
    }
    return opt;
}

function changeProductFromCart(product_index){
    cart.at(product_index)["count"]=document.getElementById("cart_value"+product_index).value;
    document.getElementsByClassName("money-count")[0].innerHTML= Price_sum();
    localStorage.setItem("cart_list",JSON.stringify(cart));
    localStorage.setItem("account_register",JSON.stringify(list_account));
}

//Xoa product khoi mang cart
function removeProductFromCart(product_index){
    if (cart.length!=0){
        cart.at(product_index)["count"]=1;
        cart.splice(product_index,1);
        localStorage.setItem("cart_list",JSON.stringify(cart));
        localStorage.setItem("account_register",JSON.stringify(list_account));
        document.getElementById("product_cart").innerHTML=Cart_Output();
        document.getElementsByClassName("money-count")[0].innerHTML= Price_sum();
    } else {
        document.getElementById("product_cart").innerHTML=Cart_Output()
    }  
}

function Price_sum(){
    var opt='';
    var sum=0;
    for (var i in cart){
       sum+=(cart.at(i)["count"] * cart.at(i)["price"]);
    }
    opt +='<p class="money-count">'+parseFloat(sum)+' VND</p>';
    return opt;
}


function Account_status(){
    var user_interface='';
    user_interface+='<img src="img/user.png">';
    user_interface+='<div>';

    if (localStorage.getItem("logined_account")==undefined){
        user_interface+='<a href="login.html">Đăng Nhập</a></span>&nbsp;/&nbsp;';
        user_interface+='<a href="register.html">Đăng Ký</a>';
    } else {
        var Account_properties = JSON.parse(localStorage.getItem("logined_account"));
        
        if (Account_properties["isLogined"]==1){
            user_interface+='<div class="account-name">'+Account_properties["Username"]+'</div>';
            user_interface+='<button onclick="Log_out()">Log out</button>';
        } else {
            user_interface+='<a href="login.html">Đăng Nhập</a></span>&nbsp;/&nbsp;';
            user_interface+='<a href="register.html">Đăng Ký</a>';
        }          
    }
    user_interface+='</div>';
    document.getElementById("test").innerHTML = user_interface;
}

function Log_out(){
    // let account_array = JSON.parse(localStorage.getItem("account_register"));
    // let logined_account =  JSON.parse(localStorage.getItem("logined_account"));
    // for (i in account_array){
    //     if (logined_account["Email"]==account_array[i]["Email"] && logined_account["Password"]==account_array[i]["Password"]){
    //         account_array[i]= logined_account;
    //         break;
    //     }
    // }    
    // localStorage.setItem("account_register",JSON.stringify(account_array));
    localStorage.removeItem("logined_account");
    cart.splice(0);
    console.log(cart);
    document.getElementById("product_cart").innerHTML=Cart_Output();
    document.getElementsByClassName("money-count")[0].innerHTML=Price_sum();
    Account_status();
}

function Search_Output(){
    var opt='';
    var array = Search_product();
    for (var i in array){        
            opt+='<li>';
            opt+='<a href="product'+array.at(i)["product_id"]+'.html"><img src="'+array.at(i)["product_image"]+'"></a>';
            opt+='<a href="product'+array.at(i)["product_id"]+'.html" class="incartproduct">'+array.at(i)["name"]+'</a>';
            opt+='<div class="price">Giá tiền:<br>'+(parseFloat(array.at(i)["price"]/1000))+'.000 VND</br> </div>';
            opt+='<img class="cart_icon" onclick="addProductToCart(product'+array.at(i)["product_id"]+')" src="https://bizweb.dktcdn.net/100/318/319/themes/666938/assets/cart.png?1678935293329"></img>';
            opt+='</li>';         
    }  

    document.getElementById("search_list").innerHTML=opt;

    for (var i in array){
        document.getElementsByClassName("cart_icon")[i].style.cursor = "pointer";
    }
    
}


function Search_product(){
    let Search_list = new Array();
    for (let i in list){
        if (RegExp(document.getElementById("search_box").value.trim().toLowerCase()).test(list[i].name.toLowerCase()) && document.getElementById("search_box").value.trim()!=''){
            Search_list.push(list[i]);
        } 
    }
    return Search_list;
}
