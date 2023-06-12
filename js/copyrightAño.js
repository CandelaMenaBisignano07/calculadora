const año=document.querySelector(".año")
const date=new Date()

document.addEventListener("DOMContentLoaded",()=>{
    año.innerHTML=date.getFullYear()
})