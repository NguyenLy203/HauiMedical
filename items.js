
document.getElementById("search-options-by-price").style.cursor = "pointer"
document.getElementById("select-price").style.cursor = "pointer"


document.getElementById("search-options-by-price").addEventListener("click",()=>{
    if (document.getElementById("select-price").style.display == "none"){
        document.getElementById("select-price").style.display = "flex";
    } else {
        document.getElementById("select-price").style.display = "none";
    }
});

//Lay gia tri cua checkbox
let price_range = new Array();

price_range[0] = document.getElementById("price-range-1");
price_range[1] = document.getElementById("price-range-2");
price_range[2] = document.getElementById("price-range-3");

var display_product = document.getElementById("display-product");

let price_range_product = new Array();

//Khoi gan gia tri mac dinh cho item

sort_by_price();
display_product.innerHTML = product_box_list_Output(list,list.length);

for (let i=0; i<price_range.length; i++){
    price_range[i].onchange = ()=>{
        if (price_range[i].checked==true){          
            insert_price_range(i);
            sort_by_price();
            if (price_range_product.length==0){
                let not_found_value = '';
                not_found_value+='<p>Không tìm được sản phẩm cần tìm';
                display_product.innerHTML = not_found_value;
            } else {
                display_product.innerHTML = product_box_list_Output(price_range_product,price_range_product.length);  
            }
            
        } else {
            remove_price_range(i);
            sort_by_price();
            display_product.innerHTML = product_box_list_Output(price_range_product,price_range_product.length);      
        }

        if (price_range.every(value=>{
            if(value.checked==true){
                return false;
            }
            return true;
        })==false){

        } else {           
            sort_by_price();
            display_product.innerHTML = product_box_list_Output(list,list.length);
        }
    }
}


function insert_price_range(price_index){
    switch (price_index){
        case 0:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]<=100000){
                    price_range_product.push(list.at(index));
                }
            }
            break;

        case 1:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]>100000 && list.at(index)["price"]<=1000000){
                    price_range_product.push(list.at(index));
                }
            }
            break;
        
        case 2:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]>1000000){
                    price_range_product.push(list.at(index));
                }
            }
            break;
    }
}

function remove_price_range(price_index){
    switch (price_index){
        case 0:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]<=100000){
                    price_range_product.splice(price_range_product.indexOf(list.at(index)),1);
                }
            }
            break;

        case 1:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]>100000 && list.at(index)["price"]<=1000000){
                    price_range_product.splice(price_range_product.indexOf(list.at(index)),1);
                }
            }
            break;
        
        case 2:
            for (let index = 0; index < list.length; index++) {
                if (list.at(index)["price"]>1000000){
                    price_range_product.splice(price_range_product.indexOf(list.at(index)),1);
                }
            }
            break;
    }
}

function sort_by_price(){
    list.sort((a,b)=>a["price"]-b["price"]);
    price_range_product.sort((a,b)=>a["price"]-b["price"]);
}


