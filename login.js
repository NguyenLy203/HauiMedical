
function compare_account(){
   var Account_properties = JSON.parse(localStorage.getItem("account_register"));
   var Email_input = document.getElementById("email").value;
   var Password_input = document.getElementById("pass").value;
   var change_page_button = '';

   for (var i in Account_properties){
      if ( Email_input!=Account_properties[i]["Email"] || Password_input!=Account_properties[i]["Password"]){
         document.getElementById("check_email_password").innerHTML = "Email hoặc mật khẩu sai";
         document.getElementById("check_email_password").style.color = "red";       
      } else {
         Account_properties[i]["isLogined"]=1;
         console.log(Account_properties[i]);
         localStorage.setItem("logined_account",JSON.stringify(Account_properties[i]));
         console.log(localStorage.getItem("logined_account"));
         change_page_button+='<div class=change-page>'
         change_page_button+='<p>Đăng nhập thành công</p>';
         change_page_button+='<a href="index.html">Về trang chủ</a>';
         change_page_button+='</div>'
         document.getElementById("change_page_button").innerHTML = change_page_button;
         break;
      }
   }
}