const product = document.querySelector(".product")
const company = document.querySelector(".company")
const connect = document.querySelector(".connect")

const product_img = document.querySelector(".product_img")
const company_img = document.querySelector(".company_img")
const connect_img = document.querySelector(".connect_img")

const menu = document.querySelector(".nav_links_container")
const open_close = document.querySelector(".open_close")



product.addEventListener("click", function(){
    if(product.parentElement.children[1].classList.contains("hide")){
           product.parentElement.children[1].classList.remove("hide")
           company.parentElement.children[1].classList.add("hide")
           connect.parentElement.children[1].classList.add("hide")

           product_img.classList.add("arrow_up")
           company_img.classList.remove("arrow_up")
           connect_img.classList.remove("arrow_up")
     } else{
         product.parentElement.children[1].classList.add("hide")
         product_img.classList.remove("arrow_up")
     }
})

company.addEventListener("click", function(){
    if(company.parentElement.children[1].classList.contains("hide")){
           company.parentElement.children[1].classList.remove("hide")
           product.parentElement.children[1].classList.add("hide")
           connect.parentElement.children[1].classList.add("hide")

           company_img.classList.add("arrow_up")
           connect_img.classList.remove("arrow_up")
            product_img.classList.remove("arrow_up")

     } else{
         company.parentElement.children[1].classList.add("hide")
         company_img.classList.remove("arrow_up")

     }
})

connect.addEventListener("click", function(){
    if(connect.parentElement.children[1].classList.contains("hide")){
           connect.parentElement.children[1].classList.remove("hide")
           company.parentElement.children[1].classList.add("hide")
           product.parentElement.children[1].classList.add("hide")

            connect_img.classList.add("arrow_up")
            company_img.classList.remove("arrow_up")
            product_img.classList.remove("arrow_up")
           
     } else{
         connect.parentElement.children[1].classList.add("hide")
         connect_img.classList.remove("arrow_up")
     }
})

open_close.addEventListener("click", function(){
    if(menu.classList.contains("hide_menu")){
        menu.classList.remove("hide_menu")

        open_close.classList.remove("open")
        open_close.classList.add("close")
    } else{
        menu.classList.add("hide_menu")

        open_close.classList.remove("close")
        open_close.classList.add("open")
    }
})