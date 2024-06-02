//Khoi tao mang Cart
var cart = new Array();

//Khoi tao gia tri mac dinh cho mang cart
if (localStorage.getItem("cart_list")!=undefined){
    cart = (JSON.parse(localStorage.getItem("cart_list")));
} 

//Lay gia tri tu tai khoan da login
if (localStorage.getItem("logined_account")!=undefined) {
    cart = JSON.parse(localStorage.getItem("logined_account")).Account_cart.Product_list;
}

let list0 = new Array();
let list1 = new Array();
let list2 = new Array();

class Cart{
  Cart_id;
  Product_list = [];

  constructor(Cart_id,Product_list){
    this.Cart_id=Cart_id;
    this.Product_list=Product_list;
  }
}



let product0 = {
  product_id:0,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P20941.png",   //https://bizweb.dktcdn.net/thumb/medium/100/318/319/products/tan-chu-t-dai-oc-luon-cho-nhom-dinh-hinh-2020-3030-2040-2060-20100-3060-3090-3.jpg?v=1675917337000
  price: 1000,
  name: "Dung dịch vệ sinh mũi cho trẻ Nose Hygiene Spray Baby (80ml)",
  count:1,
};
let product1 = {
  product_id:1,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P02439_1.png?versionId=J9O7KlIuEoMJbAOcuVNQIrT3jnFHwDN_",
  price: 555000,
  name: "Nước súc miệng Listerine Coolmint (750ml)",
  count:1
};
let product2 = {
  product_id:2,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/20240503063736-0-P24705_1.jpg",
  price: 5000,
  name: "Dầu gội chống gàu Selsun 1% (Chai 250ml)",
  count:1
};
let product3 = {
  product_id:3,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P26273_2.jpg",
  price: 4000,
  name: "Viên uống Keiko Bilberon Bổ mắt (Hộp 30 viên)",
  count:1
};
let product4 = {
  product_id:4,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P20205_1.png",
  price: 180000,
  name: "Hỗn dịch uống Enterogermina 4B/5ml (2 vỉ x 10 ống)",
  count:1
};
let product5 = {
  product_id:5,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P11390_1.jpg",
  price: 50000,
  name: "Sữa Chống Nắng SUNPLAY Skin Aqua",
  count:1
};
let product6 = {
  product_id:6,
  product_image:
    "https://prod-cdn.pharmacity.io/e-com/images/ecommerce/1000x1000/P24896_1.jpg",
  price: 20000,
  name: "Viên uống Lohha hỗ trợ trí não (Hộp 3 vỉ x 10 viên)",
  count:1
};

var list = [product0, product1, product2, product3, product4, product5, product6];

list0 = [product0, product1, product2, product3];
list1 = [product4, product5, product6, product0];
list2 = [product1, product3, product5, product2];


var list4 = [product6, product5, product4, product3, product2, product1];
var list5 = [product0, product2, product4, product6, product1, product3];
var list6 = [product5, product3, product6, product4, product2, product0];
var list7 = [product2];